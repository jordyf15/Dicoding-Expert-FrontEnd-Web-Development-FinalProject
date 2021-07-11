import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

class restoDetailFavoriteButton extends HTMLElement {
  async init(restaurant) {
    const {
      id,
      name,
      description,
      pictureId,
      city,
      rating,
    } = restaurant;
    this._restaurant = {
      id,
      name,
      description,
      pictureId,
      city,
      rating,
    };

    await this._renderButton();
  }

  async _renderButton() {
    if (await this._isRestaurantExist()) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  }

  async _isRestaurantExist() {
    const { id } = this._restaurant;
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  }

  _renderFavorite() {
    const favoriteButton = document.createElement('button');
    favoriteButton.id = 'favorite-button';
    favoriteButton.innerHTML = '<i class="far fa-heart" aria-label="Menyukai Restoran"></i>';

    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this.removeChild(this.lastChild);
      this._renderButton();
    });
    this.appendChild(favoriteButton);
  }

  _renderFavorited() {
    const favoriteButton = document.createElement('button');
    favoriteButton.id = 'favorite-button';
    favoriteButton.innerHTML = '<i class="fas fa-heart" aria-label="Tidak menyukai Restoran"></i>';

    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this.removeChild(this.lastChild);
      this._renderButton();
    });
    this.appendChild(favoriteButton);
  }
}

customElements.define('resto-detail-favorite-button', restoDetailFavoriteButton);
