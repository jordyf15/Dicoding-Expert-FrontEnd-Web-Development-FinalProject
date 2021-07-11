class RestoAlert extends HTMLElement {
  set alert({ message, error }) {
    this._message = message;
    this._error = error;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="alert-container">
        <div id="alert-container-cover"></div>
        <div id="alert">
          <p>Send review <span id="${this._error ? 'fail' : 'success'}">${this._message}<span></p>
          <button id="alert-remove-button">Ok</button>
        </div>
      </div>
    `;
  }

  setButton() {
    const mainContainer = document.querySelector('main');
    this.lastElementChild.lastElementChild.addEventListener('click', () => {
      mainContainer.removeChild(mainContainer.lastChild);
    });
  }
}

customElements.define('resto-alert', RestoAlert);
