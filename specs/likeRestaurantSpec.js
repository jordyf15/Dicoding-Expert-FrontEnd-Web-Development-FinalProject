/* eslint-disable no-undef */
import '../src/scripts/views/custom-elements/restoDetailFavoriteButton';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

describe('Liking a restaurant', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should show the like button when the restaurant is not liked', async () => {
    const restoDetailFavoriteButton = document.createElement('resto-detail-favorite-button');
    await restoDetailFavoriteButton.init({
      id: 1,
      name: 'restaurant palsu',
      description: 'menunya pun palsu',
      pictureId: 123,
      city: 'kota kepalsuan',
      rating: 5,
    });
    document.body.appendChild(restoDetailFavoriteButton);

    expect(document.querySelector('[aria-label="Menyukai Restoran"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant is not liked', async () => {
    const restoDetailFavoriteButton = document.createElement('resto-detail-favorite-button');
    await restoDetailFavoriteButton.init({
      id: 1,
      name: 'restaurant palsu',
      description: 'menunya pun palsu',
      pictureId: 123,
      city: 'kota kepalsuan',
      rating: 5,
    });
    document.body.appendChild(restoDetailFavoriteButton);

    expect(document.querySelector('[aria-label="Tidak menyukai Restoran"')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    const restoDetailFavoriteButton = document.createElement('resto-detail-favorite-button');
    await restoDetailFavoriteButton.init({
      id: 1,
      name: 'restaurant palsu',
      description: 'menunya pun palsu',
      pictureId: 123,
      city: 'kota kepalsuan',
      rating: 5,
    });
    document.body.appendChild(restoDetailFavoriteButton);

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({
      id: 1,
      name: 'restaurant palsu',
      description: 'menunya pun palsu',
      pictureId: 123,
      city: 'kota kepalsuan',
      rating: 5,
    });
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('Should not add the restaurant again when it is already liked', async () => {
    const restoDetailFavoriteButton = document.createElement('resto-detail-favorite-button');
    await restoDetailFavoriteButton.init({
      id: 1,
      name: 'restaurant palsu',
      description: 'menunya pun palsu',
      pictureId: 123,
      city: 'kota kepalsuan',
      rating: 5,
    });
    document.body.appendChild(restoDetailFavoriteButton);

    await FavoriteRestaurantIdb.putRestaurant({
      id: 1,
      name: 'restaurant palsu',
      description: 'menunya pun palsu',
      pictureId: 123,
      city: 'kota kepalsuan',
      rating: 5,
    });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{
      id: 1,
      name: 'restaurant palsu',
      description: 'menunya pun palsu',
      pictureId: 123,
      city: 'kota kepalsuan',
      rating: 5,
    }]);

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no information', async () => {
    const restoDetailFavoriteButton = document.createElement('resto-detail-favorite-button');
    await restoDetailFavoriteButton.init({});
    document.body.appendChild(restoDetailFavoriteButton);

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
