import CONFIG from '../../globals/config';

class restoDetailHero extends HTMLElement {
  set hero({
    pictureId,
    name,
    city,
    address,
  }) {
    this._pictureId = pictureId;
    this._name = name;
    this._city = city;
    this._address = address;

    this.render();
  }

  render() {
    this.innerHTML = `
    <section tabindex="0" id="resto-detail-hero">
      <div id="resto-detail-hero-cover"></div> 
      <img tabindex="0" src="${CONFIG.BASE_URL}/images/large/${this._pictureId}" alt="${this._name}">
      <h2 tabindex="0" id="resto-detail-name">${this._name}</h2>
      <span tabindex="0" id="resto-detail-location"><i class="fas fa-map-marker-alt"></i> ${this._city}, ${this._address}</span>
    </section>
    `;
  }
}

customElements.define('resto-detail-hero', restoDetailHero);
