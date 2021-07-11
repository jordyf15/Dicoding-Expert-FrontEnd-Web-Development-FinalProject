import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurant-api-source';
import '../custom-elements/restoDetailHero';
import '../custom-elements/restoDetailAboutUs';
import '../custom-elements/restoDetailMenu';
import '../custom-elements/restoDetailReview';
import '../custom-elements/restoDetailFormReview';
import '../custom-elements/restoDetailFavoriteButton';
import '../custom-elements/loader';
import '../custom-elements/restoFetchErrorMessage';

const Detail = {
  async render() {
    return `
      <section id="detail"></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWIthoutCombiner();
    const detailContainer = document.querySelector('#detail');
    const mainContainer = document.querySelector('main');
    mainContainer.classList.toggle('fail-loading');
    const loaderElement = document.createElement('loader-element');
    detailContainer.classList.toggle('fail-loading');
    loaderElement.render();
    detailContainer.appendChild(loaderElement);

    try {
      const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
      detailContainer.removeChild(detailContainer.lastChild);
      mainContainer.classList.remove('fail-loading');
      detailContainer.classList.toggle('fail-loading');
      const {
        address,
        categories,
        city,
        customerReviews,
        description,
        id,
        menus,
        name,
        pictureId,
        rating,
      } = restaurant;
      const restoDetailHero = document.createElement('resto-detail-hero');
      restoDetailHero.hero = {
        pictureId,
        name,
        city,
        address,
      };
      const restoDetailAboutUs = document.createElement('resto-detail-about-us');
      restoDetailAboutUs.aboutUs = description;
      const restoDetailMenu = document.createElement('resto-detail-menu');
      restoDetailMenu.menu = { categories, menus };
      const restoDetailReview = document.createElement('resto-detail-review');
      restoDetailReview.reviews = { customerReviews, rating };
      const restoDetailFormReview = document.createElement('resto-detail-form-review');
      restoDetailFormReview.createReview = id;
      const restoDetailFavoriteButton = document.createElement('resto-detail-favorite-button');
      restoDetailFavoriteButton.init(restaurant);
      detailContainer.appendChild(restoDetailFavoriteButton);
      detailContainer.appendChild(restoDetailHero);
      detailContainer.appendChild(restoDetailAboutUs);
      detailContainer.appendChild(restoDetailMenu);
      detailContainer.appendChild(restoDetailReview);
      detailContainer.appendChild(restoDetailFormReview);
      restoDetailReview.setNextButton();
      restoDetailReview.setPreviousButton();
      restoDetailFormReview.setReviewButton();
    } catch (error) {
      detailContainer.removeChild(detailContainer.lastChild);
      const restoFetchErrorMessage = document.createElement('resto-fetch-error-message');
      restoFetchErrorMessage.render();
      detailContainer.appendChild(restoFetchErrorMessage);
    }
  },
};

export default Detail;
