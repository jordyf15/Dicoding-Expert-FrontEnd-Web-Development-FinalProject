class RestoFetchErrorMessage extends HTMLElement {
  render() {
    this.innerHTML = `
      <div id="fetch-error-message">
        <i class="fas fa-exclamation-triangle"></i>
        <span>Fetching data failed</span>
      </div>
    `;
  }
}

customElements.define('resto-fetch-error-message', RestoFetchErrorMessage);
