class Loader extends HTMLElement {
  render() {
    this.innerHTML = `
      <div id="loader-container">
        <div id="loader"></div>
        <p>Fetching data, please wait...</p>
      </div>
    `;
  }
}

customElements.define('loader-element', Loader);
