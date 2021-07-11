import CONFIG from '../../globals/config';
import './restoAlert';

class restoDetailFormReview extends HTMLElement {
  set createReview(id) {
    this._id = id;
    this.render();
  }

  render() {
    this.innerHTML = `
      <section tabindex="0" id="resto-detail-review-form">
        <h2 tabindex="0" id="resto-detail-form-review-title"><span>Give Review</span></h2>
        <form tabindex="0" id="review-form">
          <div>
            <label tabindex="0" for="form-review-name">Your Name: </label>
            <span tabindex="0" id="review-name-error" class="error-message"></span>
          </div>
          <input type="text" id="form-review-name" name="formReviewName" placeholder="Input your name here">
          <div>
            <label tabindex="0" for="form-review-text">Your Review: </label>
            <span tabindex="0" id="review-text-error" class="error-message"></span>
          </div>
          <textarea tabindex="0" type="text" id="form-review-text" name="formReviewText" placeholder="Input your review here"></textarea>
          <input tabindex="0" type="button" id="send-review-button" value="SEND REVIEW">
        </form>
      </section>
    `;
  }

  setReviewButton() {
    const sendReviewButton = document.querySelector('#send-review-button');

    sendReviewButton.addEventListener('click', async (event) => {
      let validReview = true;
      const reviewName = document.querySelector('#form-review-name');
      const reviewText = document.querySelector('#form-review-text');
      const reviewNameErrorMessage = document.querySelector('#review-name-error');
      const reviewTextErrorMessage = document.querySelector('#review-text-error');
      const mainContainer = document.querySelector('main');

      reviewNameErrorMessage.innerHTML = '';
      reviewTextErrorMessage.innerHTML = '';
      event.stopPropagation();
      if (reviewName.value === '') {
        validReview = false;
        reviewNameErrorMessage.innerHTML = 'Please input your name!';
      }
      if (reviewText.value === '') {
        validReview = false;
        reviewTextErrorMessage.innerHTML = 'Please input your review!';
      }
      if (validReview === true) {
        const headers = {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        };
        const data = {
          id: this._id,
          name: reviewName.value,
          review: reviewText.value,
        };
        const response = await fetch(`${CONFIG.BASE_URL}/review`, {
          method: 'POST',
          headers,
          body: JSON.stringify(data),
        });
        const responseJson = await response.json();
        const restoAlert = document.createElement('resto-alert');
        const { error, message } = responseJson;
        restoAlert.alert = { error, message };
        mainContainer.appendChild(restoAlert);
        restoAlert.setButton();
        reviewName.value = '';
        reviewText.value = '';
      }
    });
  }
}

customElements.define('resto-detail-form-review', restoDetailFormReview);
