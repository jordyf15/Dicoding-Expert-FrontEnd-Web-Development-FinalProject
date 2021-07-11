class restoDetailAboutUs extends HTMLElement {
  set aboutUs(description) {
    this._description = description;
    this.render();
  }

  render() {
    this.innerHTML = `
      <section tabindex="0" id="resto-detail-about-us">
        <h2 tabindex="0" id="resto-detail-about-us-title"><span>About Us</span></h2>
        <p tabindex="0" id="resto-detail-about-us-desc">${this._description}</p>
      </section>
    `;
  }
}

customElements.define('resto-detail-about-us', restoDetailAboutUs);
