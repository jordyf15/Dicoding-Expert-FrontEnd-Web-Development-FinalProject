class restoDetailReview extends HTMLElement {
  set reviews({ customerReviews, id, rating }) {
    this._customerReviews = customerReviews;
    this._rating = rating;
    this._currentReview = 0;
    this.render();
  }

  render() {
    this.innerHTML = `
      <section tabindex="0" id="resto-detail-review">
        <h2 tabindex="0" id="resto-detail-review-title"><span>Our Reviews</span></h2>
        <div id="resto-detail-rating">
          <span tabindex="0" id="resto-detail-rating-stat">${this._rating}/5</span>
          <div id="resto-detail-rating-star">
            ${this.setRating()}
          </div>
          <span tabindex="0" id="resto-detail-rating-total">(${this._customerReviews.length}) reviews</span>
        </div>
        <div id="resto-detail-review-list">
          <button aria-label="previous-review" id="previous-review"><i class="fas fa-arrow-left"></i></button>
          <div id="resto-detail-review-item">
            <span tabindex="0" id="resto-detail-review-item-review">${this._customerReviews[0].review}</span>
            <span tabindex="0" id="resto-detail-review-item-name">${this._customerReviews[0].name}</span>
            <span tabindex="0" id="resto-detail-review-item-date">${this._customerReviews[0].date}</span>
          </div>
          <button aria-label="next-review" id="next-review"><i class="fas fa-arrow-right"></i></button>
        </div>
      </section>
    `;
  }

  setRating() {
    let starRating = '';
    for (let i = 0; i < Math.floor(this._rating / 1); i++) {
      starRating += '<i class="fa fa-star full-star detail-star"></i>';
    }
    const halfStar = Math.round((this._rating % 1) * 100);
    if (halfStar !== 0) {
      starRating += `<i class="fa fa-star half-star detail-star" 
        style='background: -webkit-linear-gradient(0deg ,rgba(245,203,92,1) ${halfStar}%, rgba(232,237,223,1) ${100 - halfStar}%); -webkit-background-clip: text;'></i>`;
    }
    return starRating;
  }

  setNextButton() {
    const nextButton = document.querySelector('#next-review');
    const previousButton = document.querySelector('#previous-review');
    const reviewText = document.querySelector('#resto-detail-review-item-review');
    const reviewName = document.querySelector('#resto-detail-review-item-name');
    const reviewDate = document.querySelector('#resto-detail-review-item-date');
    if (this._currentReview === this._customerReviews.length - 1) {
      nextButton.disabled = true;
      nextButton.classList.toggle('disabled');
    }
    nextButton.addEventListener('click', (event) => {
      event.stopPropagation();
      if (this._currentReview !== this._customerReviews.length - 1) {
        this._currentReview++;
        const { review, name, date } = this._customerReviews[this._currentReview];
        reviewText.innerHTML = review;
        reviewName.innerHTML = name;
        reviewDate.innerHTML = date;
        previousButton.disabled = false;
        previousButton.classList.remove('disabled');
        if (this._currentReview === this._customerReviews.length - 1) {
          nextButton.disabled = true;
          nextButton.classList.toggle('disabled');
        }
      }
    });
  }

  setPreviousButton() {
    const previousButton = document.querySelector('#previous-review');
    const nextButton = document.querySelector('#next-review');
    const reviewText = document.querySelector('#resto-detail-review-item-review');
    const reviewName = document.querySelector('#resto-detail-review-item-name');
    const reviewDate = document.querySelector('#resto-detail-review-item-date');
    if (this._currentReview === 0) {
      previousButton.disabled = true;
      previousButton.classList.toggle('disabled');
    }
    previousButton.addEventListener('click', (event) => {
      event.stopPropagation();
      if (this._currentReview !== 0) {
        this._currentReview--;
        const { review, name, date } = this._customerReviews[this._currentReview];
        reviewText.innerHTML = review;
        reviewName.innerHTML = name;
        reviewDate.innerHTML = date;
        nextButton.disabled = false;
        nextButton.classList.remove('disabled');
        if (this._currentReview === 0) {
          previousButton.disabled = true;
          previousButton.classList.toggle('disabled');
        }
      }
    });
  }
}

customElements.define('resto-detail-review', restoDetailReview);
