import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import '../custom-elements/restoItem';
import '../custom-elements/restoFetchErrorMessage';

const Favorite = {
  async render() {
    return `
      <section id="favorite">
        <h2 class='content-title'><span tabindex="0">Favorite Restaurants</span></h2>
        <div role="list" id="resto-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('main');
    const favoriteContainer = document.querySelector('#favorite');
    const restaurantList = document.querySelector('#resto-list');
    const loaderElement = document.createElement('loader-element');
    mainContainer.classList.toggle('fail-loading');
    restaurantList.classList.toggle('list-fail-loading');
    favoriteContainer.classList.toggle('fail-loading');
    loaderElement.render();
    favoriteContainer.appendChild(loaderElement);

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      mainContainer.classList.remove('fail-loading');
      restaurantList.classList.remove('list-fail-loading');
      favoriteContainer.classList.remove('fail-loading');
      favoriteContainer.removeChild(favoriteContainer.lastChild);
      restaurants.forEach((restaurant) => {
        const restaurantListItem = document.createElement('resto-item');
        restaurantListItem.resto = restaurant;
        restaurantList.appendChild(restaurantListItem);
      });
    } catch (error) {
      favoriteContainer.removeChild(favoriteContainer.lastChild);
      const restoFetchErrorMessage = document.createElement('resto-fetch-error-message');
      restoFetchErrorMessage.render();
      favoriteContainer.appendChild(restoFetchErrorMessage);
    }
  },
};

export default Favorite;
