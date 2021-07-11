/* eslint-disable no-undef */
Feature('Reviewing a Restaurant');

Scenario('Reviewing one restaurant', ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.resto-item', 5);
  I.click(locate('.resto-item-view').first());

  I.waitForElement('#form-review-name', 5);
  I.seeElement('#form-review-name');
  I.fillField('#form-review-name', 'Joseph Joestar');

  I.waitForElement('#form-review-text', 5);
  I.seeElement('#form-review-text');
  I.fillField('#form-review-text', 'Your next line will be "Lah kok ada jojo reference"');

  I.waitForElement('#send-review-button', 5);
  I.seeElement('#send-review-button');
  I.click('#send-review-button');

  I.waitForElement('#alert', 5);
  I.seeElement('#alert');
  I.waitForElement('#alert-remove-button', 5);
  I.seeElement('#alert-remove-button');
  I.click('#alert-remove-button');
});
