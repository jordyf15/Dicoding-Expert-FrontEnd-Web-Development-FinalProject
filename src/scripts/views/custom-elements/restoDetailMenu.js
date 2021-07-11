class restoDetailMenu extends HTMLElement {
  set menu({
    categories,
    menus,
  }) {
    this._categories = categories;
    this._menus = menus;
    this.render();
  }

  render() {
    this.innerHTML = `
      <section tabindex="0" id="resto-detail-menu">
        <h2 tabindex="0" id="resto-detail-menu-title"><span>Our Menu</span></h2>
        <section tabindex="0" id="resto-detail-menu-category">
          <h3 tabindex="0" >Categories</h3>
          <div id="category-container">
          ${this.setCategories()}
          </div>
        </section>
        <div id="resto-detail-menu-food-drink-container">
          <section tabindex="0" id="resto-detail-menu-foods">
            <h3 tabindex="0">Foods</h3>
            <ul id="resto-detail-menu-food-list" class="resto-detail-menu-list" tabindex="0">
              ${this.setFoods()}
            </ul>
          </section>
          <section tabindex="0" id="resto-detail-menu-drinks">
            <h3 tabindex="0">Drinks</h3>
            <ul tabindex="0" id="resto-detail-menu-drink-list" class="resto-detail-menu-list">
              ${this.setDrinks()}
            </ul>
          </section>
        </div>
      </section>
    `;
  }

  setCategories() {
    let result = '';
    this._categories.forEach((category) => {
      result += `<span tabindex="0" class="resto-detail-menu-categories">${category.name}</span>`;
    });
    return result;
  }

  setFoods() {
    let result = '';
    const { foods } = this._menus;
    foods.forEach((food) => {
      result += `<li tabindex="0" class="resto-detail-menu-list-items">
        <span tabindex="0" class="resto-detail-menu-list-items-name">${food.name}</span>
        <span tabindex="0" class="resto-detail-menu-list-items-price">Rp. 20.000</span>
      </li>`;
    });
    return result;
  }

  setDrinks() {
    let result = '';
    const { drinks } = this._menus;
    drinks.forEach((drink) => {
      result += `<li tabindex="0" class="resto-detail-menu-list-items">
        <span tabindex="0" class="resto-detail-menu-list-items-name">${drink.name}</span>
        <span tabindex="0" class="resto-detail-menu-list-items-price">Rp. 10.000</span>  
      </li>`;
    });
    return result;
  }
}

customElements.define('resto-detail-menu', restoDetailMenu);
