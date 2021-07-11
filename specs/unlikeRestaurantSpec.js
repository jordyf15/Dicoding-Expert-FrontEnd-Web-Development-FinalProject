/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

describe('Unliking a Restaurant', () => {
  beforeEach(async () => {
    const restaurant = {
      id: 1,
      name: 'restaurant 1',
      description: 'description restaurant 1',
      pictureId: 1,
      city: 'city 1',
      rating: 5,
    };
    await FavoriteRestaurantIdb.putRestaurant(restaurant);
    const restoDetailFavoriteButton = document.createElement('resto-detail-favorite-button');
    await restoDetailFavoriteButton.init(restaurant);
    document.body.appendChild(restoDetailFavoriteButton);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should display unlike button when the restaurant has been liked', async () => {
    expect(document.querySelector('[aria-label="Tidak menyukai Restoran"]')).toBeTruthy();
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not display like button when the restaurant has been liked', async () => {
    expect(document.querySelector('[aria-label="Menyukai Restoran"]')).toBeFalsy();
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should be able to unlike a restaurant', async () => {
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw an error if the restaurant that will be unlike is not in the db', async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
