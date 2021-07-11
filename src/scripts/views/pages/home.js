import RestaurantApiSource from '../../data/restaurant-api-source';
import '../custom-elements/restoItem';
import '../custom-elements/loader';
import '../custom-elements/restoFetchErrorMessage';

const Home = {
  async render() {
    return `
      <section id="hero">
      <picture>
        <source id="hero-img"  media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg" alt="background hero, orang-orang makan makanan diatas meja">
        <source id="hero-img"  media="(min-width: 600px)" srcset="./images/hero-image_2-large.jpg" alt="background hero, orang-orang makan makanan diatas meja">
        <img id="hero-img" src="./images/hero-image_2.jpg" alt="background hero, orang-orang makan makanan diatas meja">
      </picture>
      <div id="hero-cover"></div>
      <p tabindex="0" id="hero-desc">
          <span id="hero-catchphrase">Bingung mau makan dimana?</span>
          Cek Restopedia saja, berekplorasilah dengan berbagai macam restoran. 
          Semuanya ada di restopedia, temukanlah restoran yang tepat untuk acaramu!
      </p>
      </section>
      <section id="resto">
        <h2 class='content-title'><span tabindex="0">Explore Restaurant</span></h2>
        <div role="list" id="resto-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('#resto');
    const restaurantList = document.querySelector('#resto-list');
    const loaderElement = document.createElement('loader-element');
    loaderElement.render();
    restoContainer.appendChild(loaderElement);

    try {
      const restaurants = await RestaurantApiSource.listRestaurants();
      restoContainer.removeChild(restoContainer.lastChild);
      restaurants.forEach((restaurant) => {
        const restaurantListItem = document.createElement('resto-item');
        restaurantListItem.resto = restaurant;
        restaurantList.appendChild(restaurantListItem);
      });
    } catch (error) {
      restoContainer.removeChild(restoContainer.lastChild);
      const restoFetchErrorMessage = document.createElement('resto-fetch-error-message');
      restoFetchErrorMessage.render();
      restoContainer.appendChild(restoFetchErrorMessage);
    }
  },
};

export default Home;
