/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking & Unliking Restaurants');

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.resto-item-view', 5);
  I.seeElement('.resto-item-view');

  const toBeLikedRestaurant = locate('.resto-item-name').first();
  const toBeLikedRestaurantName = await I.grabTextFrom(toBeLikedRestaurant);

  I.click(locate('.resto-item-view').first());
  I.waitForElement('#favorite-button', 5);
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.waitForElement('.resto-item', 5);
  I.seeElement('.resto-item');
  const likedRestaurant = locate('.resto-item-name').first();
  const likedRestaurantName = await I.grabTextFrom(likedRestaurant);

  assert.strictEqual(toBeLikedRestaurantName, likedRestaurantName);
});

Scenario('Unliking a liked restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.resto-item', 5);
  I.seeElement('.resto-item');

  const likedRestaurant = locate('.resto-item-name').first();
  const likedRestaurantName = await I.grabTextFrom(likedRestaurant);

  I.click(locate('.resto-item-view').first());
  I.waitForElement('#favorite-button', 5);
  I.seeElement('#favorite-button');
  I.click('#favorite-button');
  I.amOnPage('/#/favorite');
  I.waitForElement('.resto-item', 5);
  I.seeElement('.resto-item');

  let totalLikedRestaurant = await I.grabNumberOfVisibleElements('.resto-item');
  assert.strictEqual(totalLikedRestaurant, 1);

  const toBeUnlikedRestaurant = locate('.resto-item-name').first();
  const toBeUnlikedRestaurantName = await I.grabTextFrom(toBeUnlikedRestaurant);
  assert.strictEqual(likedRestaurantName, toBeUnlikedRestaurantName);

  I.click(locate('.resto-item-view').first());
  I.waitForElement('#favorite-button', 5);
  I.seeElement('#favorite-button');
  I.click('#favorite-button');
  I.amOnPage('/#/favorite');
  totalLikedRestaurant = await I.grabNumberOfVisibleElements('.resto-item');
  assert.strictEqual(totalLikedRestaurant, 0);
});
