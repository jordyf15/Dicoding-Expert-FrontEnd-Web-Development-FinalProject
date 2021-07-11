import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class restoItem extends HTMLElement {
  set resto(resto) {
    const {
      id,
      name,
      description,
      pictureId,
      city,
      rating,
    } = resto;
    this._id = id;
    this._name = name;
    this._description = `${description.substring(0, 120)}...`;
    this._pictureId = pictureId;
    this._city = city;
    this._rating = rating;
    this.render();
  }

  render() {
    let starRating = '';
    for (let i = 0; i < Math.floor(this._rating / 1); i++) {
      starRating += '<i class="fa fa-star full-star"></i>';
    }
    const halfStar = Math.round((this._rating % 1) * 100);
    if (halfStar !== 0) {
      starRating += `<i class="fa fa-star half-star" 
        style='background: -webkit-linear-gradient(0deg ,rgba(245,203,92,1) ${halfStar}%, rgba(232,237,223,1) ${100 - halfStar}%); -webkit-background-clip: text;'></i>`;
    }
    this.innerHTML = `
      <article tabindex="0" class='resto-item' id='${this._id}'>
        <img class='resto-item-img lazyload' data-src='${CONFIG.BASE_URL}/images/small/${this._pictureId}' alt='${this._name}'>
        <h3 class='resto-item-name'>${this._name}</h3>
        <span class='resto-item-city'><i class="fas fa-map-marker-alt"></i> ${this._city}</span>
        <p class='resto-rating'>${starRating} ${this._rating}</p>
        <p class='resto-item-desc'>${this._description}</p>  
        <a class="resto-item-view" href="#/detail/${this._id}">View More</a>
      </article>
    `;
    this.setAttribute('role', 'listitem');
  }
}
customElements.define('resto-item', restoItem);
