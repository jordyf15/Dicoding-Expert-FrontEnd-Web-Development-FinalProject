(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,,,,,,,,function(n,e,t){"use strict";var o=t(3);t(5),t(10),t(7);function d(n,e,t,r,i,o,a){try{var s=n[o](a),d=s.value}catch(n){return void t(n)}s.done?e(d):Promise.resolve(d).then(r,i)}function r(s){return function(){var n=this,a=arguments;return new Promise(function(e,t){var r=s.apply(n,a);function i(n){d(r,e,t,i,o,"next",n)}function o(n){d(r,e,t,i,o,"throw",n)}i(void 0)})}}var i={render:function(){return r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <section id="hero">\n      <picture>\n        <source id="hero-img"  media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg" alt="background hero, orang-orang makan makanan diatas meja">\n        <source id="hero-img"  media="(min-width: 600px)" srcset="./images/hero-image_2-large.jpg" alt="background hero, orang-orang makan makanan diatas meja">\n        <img id="hero-img" src="./images/hero-image_2.jpg" alt="background hero, orang-orang makan makanan diatas meja">\n      </picture>\n      <div id="hero-cover"></div>\n      <p tabindex="0" id="hero-desc">\n          <span id="hero-catchphrase">Bingung mau makan dimana?</span>\n          Cek Restopedia saja, berekplorasilah dengan berbagai macam restoran. \n          Semuanya ada di restopedia, temukanlah restoran yang tepat untuk acaramu!\n      </p>\n      </section>\n      <section id="resto">\n        <h2 class=\'content-title\'><span tabindex="0">Explore Restaurant</span></h2>\n        <div role="list" id="resto-list"></div>\n      </section>\n    ');case 1:case"end":return n.stop()}},n)}))()},afterRender:function(){return r(regeneratorRuntime.mark(function n(){var e,t,r,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector("#resto"),t=document.querySelector("#resto-list"),(r=document.createElement("loader-element")).render(),e.appendChild(r),n.prev=5,n.next=8,o.a.listRestaurants();case 8:i=n.sent,e.removeChild(e.lastChild),i.forEach(function(n){var e=document.createElement("resto-item");e.resto=n,t.appendChild(e)}),n.next=19;break;case 13:n.prev=13,n.t0=n.catch(5),e.removeChild(e.lastChild),(i=document.createElement("resto-fetch-error-message")).render(),e.appendChild(i);case 19:case"end":return n.stop()}},n,null,[[5,13]])}))()}};e.a=i},function(n,e,t){"use strict";var a=t(1);t(5),t(7);function d(n,e,t,r,i,o,a){try{var s=n[o](a),d=s.value}catch(n){return void t(n)}s.done?e(d):Promise.resolve(d).then(r,i)}function r(s){return function(){var n=this,a=arguments;return new Promise(function(e,t){var r=s.apply(n,a);function i(n){d(r,e,t,i,o,"next",n)}function o(n){d(r,e,t,i,o,"throw",n)}i(void 0)})}}var i={render:function(){return r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <section id="favorite">\n        <h2 class=\'content-title\'><span tabindex="0">Favorite Restaurants</span></h2>\n        <div role="list" id="resto-list"></div>\n      </section>\n    ');case 1:case"end":return n.stop()}},n)}))()},afterRender:function(){return r(regeneratorRuntime.mark(function n(){var e,t,r,i,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector("main"),t=document.querySelector("#favorite"),r=document.querySelector("#resto-list"),i=document.createElement("loader-element"),e.classList.toggle("fail-loading"),r.classList.toggle("list-fail-loading"),t.classList.toggle("fail-loading"),i.render(),t.appendChild(i),n.prev=9,n.next=12,a.a.getAllRestaurants();case 12:o=n.sent,e.classList.remove("fail-loading"),r.classList.remove("list-fail-loading"),t.classList.remove("fail-loading"),t.removeChild(t.lastChild),o.forEach(function(n){var e=document.createElement("resto-item");e.resto=n,r.appendChild(e)}),n.next=26;break;case 20:n.prev=20,n.t0=n.catch(9),t.removeChild(t.lastChild),(o=document.createElement("resto-fetch-error-message")).render(),t.appendChild(o);case 26:case"end":return n.stop()}},n,null,[[9,20]])}))()}};e.a=i},function(n,e,t){"use strict";var g=t(2),h=t(3);t(22),t(23),t(24),t(25),t(26),t(28),t(10),t(7);function d(n,e,t,r,i,o,a){try{var s=n[o](a),d=s.value}catch(n){return void t(n)}s.done?e(d):Promise.resolve(d).then(r,i)}function r(s){return function(){var n=this,a=arguments;return new Promise(function(e,t){var r=s.apply(n,a);function i(n){d(r,e,t,i,o,"next",n)}function o(n){d(r,e,t,i,o,"throw",n)}i(void 0)})}}var i={render:function(){return r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <section id="detail"></section>\n    ');case 1:case"end":return n.stop()}},n)}))()},afterRender:function(){return r(regeneratorRuntime.mark(function n(){var e,t,r,i,o,a,s,d,l,c,p,u,m,x;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=g.a.parseActiveUrlWIthoutCombiner(),e=document.querySelector("#detail"),(t=document.querySelector("main")).classList.toggle("fail-loading"),d=document.createElement("loader-element"),e.classList.toggle("fail-loading"),d.render(),e.appendChild(d),n.prev=8,n.next=11,h.a.detailRestaurant(l.id);case 11:r=n.sent,e.removeChild(e.lastChild),t.classList.remove("fail-loading"),e.classList.toggle("fail-loading"),c=r.address,i=r.categories,o=r.city,a=r.customerReviews,p=r.description,m=r.id,u=r.menus,s=r.name,d=r.pictureId,x=r.rating,(l=document.createElement("resto-detail-hero")).hero={pictureId:d,name:s,city:o,address:c},(c=document.createElement("resto-detail-about-us")).aboutUs=p,(p=document.createElement("resto-detail-menu")).menu={categories:i,menus:u},(u=document.createElement("resto-detail-review")).reviews={customerReviews:a,rating:x},(x=document.createElement("resto-detail-form-review")).createReview=m,(m=document.createElement("resto-detail-favorite-button")).init(r),e.appendChild(m),e.appendChild(l),e.appendChild(c),e.appendChild(p),e.appendChild(u),e.appendChild(x),u.setNextButton(),u.setPreviousButton(),x.setReviewButton(),n.next=45;break;case 39:n.prev=39,n.t0=n.catch(8),e.removeChild(e.lastChild),(x=document.createElement("resto-fetch-error-message")).render(),e.appendChild(x);case 45:case"end":return n.stop()}},n,null,[[8,39]])}))()}};e.a=i},,,,function(n,e,t){var r=t(8),i=t(18),t={insert:"head",singleton:!1};r(i="string"==typeof(i=i.__esModule?i.default:i)?[[n.i,i,""]]:i,t);n.exports=i.locals||{}},function(n,e,t){(e=t(9)(!1)).push([n.i,"* {\n    box-sizing: border-box;\n}\nbody, html{\n    padding: 0;\n    margin: 0;\n    min-height: 100vh;\n    width: 100vw;\n    max-width: 100vw;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    overflow-x: hidden;\n}\nbody{\n    display:flex;\n    flex-direction: column;\n}\na, button, input{\n    min-width: 44px;\n    min-height: 44px;\n}\n\nmain{\n    margin-bottom: 40px;\n    flex-grow: 1;\n    position: relative;\n}\nheader{\n    background-color: white;\n    text-align: center;\n    box-shadow: 0px 3px 5px 0px rgba(197,198,199,1);\n}\nheader h1{\n    margin: 0px;\n    padding: 10px 0px 10px 20px;\n    text-align: center;\n    color: #03ac0e;\n}\n#nav-list{\n    list-style-type: none;\n    padding: 0;\n    border-bottom: 1px solid #a4b0be;\n    margin:0;\n}\n.nav-items a{\n   display: block;\n   text-align: center;\n   padding: 11px 0;\n   border-top: 1px solid #a4b0be;\n   text-decoration: none;\n   color: black;\n}\n.nav-items a:hover, .nav-items a:focus{\n    color:#03ac0e;\n    text-decoration: underline;\n    font-weight: bold;\n}\n#drawer{\n    position: absolute;\n    width: 100%;\n    background-color: white;\n    left: -105%;\n    transition: left 1s;\n    box-shadow: 0px 3px 5px 0px rgba(197,198,199,1);\n    z-index: 4;\n}\n#drawer.open{\n    left: 0;\n}\n#hamburger-container{\n      text-align: center;\n      padding-bottom: 10px;\n}\n#hamburger{\n    font-size: 30px;\n    padding: 2px 10px;\n    background: none;\n    border: none;\n    margin-bottom: 10px;\n}\n\n\n#hero{\n    height: 200px;\n    background-color: pink;\n    position: relative;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    overflow-y: hidden;\n}\n\n#hero-img{\n    width: 100%;\n    min-height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n}\n#hero-cover{\n    background-color: black;\n    width: 100%;\n    height: 200px;\n    opacity: 0.7;\n    position: absolute;\n    z-index: 2;\n    top: 0;\n}\n#hero-desc{\n    color: white;\n    position: relative;\n    z-index: 3;\n    margin: 0;\n    font-size: 14px;\n    padding: 0 15px;\n}\n#hero-catchphrase{\n    font-weight: bold;\n    display: block;\n    font-size: 16px;\n    margin-bottom: 10px;\n}\n\n.content-title, #resto-detail-about-us-title, #resto-detail-review-title, #resto-detail-form-review-title{\n    color: #03ac0e;\n    text-align: center;\n    margin: 50px 10px;\n    border-bottom: 3px solid #03ac0e; \n    line-height: 0.1em;\n}\n.content-title span, #resto-detail-about-us-title span, #resto-detail-review-title span, #resto-detail-form-review-title span{\n    background:#fff; \n    padding:0 10px; \n}\n\n\n#resto-list{\n    list-style-type: none;\n    padding: 0;\n    display: grid;\n    justify-content: space-around;\n    row-gap: 50px;\n}\n.resto-item{\n    width: 250px;\n    border-radius: 20px;\n    box-shadow: 0px 0px 5px 2px rgba(186,184,186,1);\n    text-align: center;\n    position: relative;\n}\n.resto-item-img{\n    width: 100%;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n    max-height: 150px;\n}\n.resto-item-name{\n    margin: 5px 0 0;\n    font-size: 18px;\n}\n.resto-item-city{\n    background-color: #03ac0e;\n    color: white;\n    position: absolute;\n    top: 20px;\n    left: 0;\n    padding: 5px 10px 5px 5px;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    font-size: 14px;\n}\n.resto-rating{\n    margin: 5px;\n}\n.full-star{\n    color: #f5cb5c;\n}\n.half-star{\n    -webkit-text-fill-color: transparent;\n}\n.resto-item-desc{\n    margin-top: 5px;\n    font-size: 14px;\n}\n.resto-item-view{\n    text-decoration: none;\n    display: inline-block;\n    background-color: #03ac0e;\n    color: white;\n    font-weight: bold;\n    padding: 10px 50px;\n    margin-bottom: 20px;\n    border-radius: 10px;\n    border: 2px solid #03ac0e;\n}\n.resto-item-view:hover{\n    background-color: white;\n    color: #03ac0e;\n}\n\n#resto-detail-hero{\n    position: relative;\n    background-color: pink;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#resto-detail-hero-cover{\n    position: absolute;\n    top: 0px;\n    z-index: 2;\n    background-color: black;\n    opacity: 0.5;\n    width: 100%;\n    height: 100%;\n}\n#resto-detail-hero img{\n    position: absolute;\n    top: 0px;\n    width: 100vw;\n    height: 100vh;\n}\n#resto-detail-hero #resto-detail-name{\n    position: relative;\n    z-index: 3;\n    color: white;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n#resto-detail-hero #resto-detail-location{\n    position: relative;\n    z-index: 3;\n    background-color: #03ac0e;\n    color: white;\n    text-align: center;\n    font-size: 15px;\n    padding: 10px;\n    border-radius: 20px;\n}\n\n#resto-detail-about-us{\n    margin-bottom: 50px;\n}\n\n#resto-detail-about-us-desc{\n    text-align: justify;\n    margin: 0px 30px;\n    font-size: 14px;\n}\n\n#resto-detail-menu{\n    background-color: #03ac0e;\n    padding-top: 20px;\n}\n\n#resto-detail-menu-title{\n    color: white;\n    text-align: center;\n    margin: 50px 10px;\n    border-bottom: 3px solid white; \n    line-height: 0.1em;\n}\n#resto-detail-menu-title span{\n    background:#03ac0e; \n    padding:0 10px; \n}\n\n#resto-detail-menu h3{\n    color: white;\n    text-align: center;\n}\n\n#category-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.resto-detail-menu-categories{\n    color: white;\n    font-weight: bold;\n    margin-bottom: 15px;\n    padding: 5px 10px;\n    border-radius: 20px;\n    border: 2px solid white;\n}\n\n.resto-detail-menu-list{\n    list-style-type: none;\n    color: white;\n    padding: 0 20px;\n    max-height: 364px;\n    overflow-y: auto;\n}\n.resto-detail-menu-list-items{\n    padding: 15px 0;\n    border-bottom: solid 1px white;\n    display: flex;\n    justify-content: space-between;\n}\n\n#resto-detail-menu-food-drink-container{\n    padding-bottom: 30px;\n}\n\n#resto-detail-menu-foods, #resto-detail-menu-drinks{\n    width: 98%;\n}\n#resto-detail-rating{\n    text-align: center;\n    margin-bottom: 40px;\n}\n#resto-detail-rating-star{\n    font-size: 30px;\n}\n#resto-detail-rating-stat{\n    font-size: 25px;\n    font-weight: bold;\n}\n#resto-detail-review-list{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#resto-detail-review-item{\n    text-align:center;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    margin: 0px 20px;\n}\n#resto-detail-review-item-review{\n    margin-bottom: 30px;\n}\n#resto-detail-review-item-name{\n    margin-bottom: 5px;\n    color: #03ac0e;\n    font-weight: bold;\n    font-size: 18px;\n}\n#resto-detail-review-item-date{\n    font-size: 14px;\n}\n#previous-review, #next-review{\n    background: none;\n    border: none;\n    min-width: 44px;\n    min-height: 44px;\n    color: #03ac0e;\n    font-weight: bold;\n    font-size: 20px;\n    cursor: pointer;\n}\n#next-review.disabled, #previous-review.disabled{\n    color: #a4b0be;\n    cursor: default;\n}\n\n#review-form{\n    display:flex;\n    flex-direction: column;\n    margin: 0 20px;\n    text-align: center;\n}\n#review-form div{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 20px;\n}\n#review-form div label{\n    color: #03ac0e;\n    font-size: 18px;\n    font-weight:500;\n}\n#form-review-name, #form-review-text{\n    margin-bottom: 10px;\n    border: 1px solid #a4b0be;\n    font-weight: 600;  \n    padding-left: 5px;\n}\n#form-review-name::placeholder , #form-review-text::placeholder {\n    color: #718093;\n    font-weight: 600;   \n   \n}\n#form-review-name{\n    height: 40px;\n}\n#form-review-text{\n    height: 150px;\n    padding: 5px 0px 0px 5px;\n}\n\n.error-message{\n    color: #c23616;\n    font-weight:500;\n}\n#send-review-button-container{\n    text-align: center;\n    background-color: pink;\n}\n#send-review-button{\n    box-sizing: border-box;\n    background-color: #03ac0e;\n    color: white;\n    border: 2px solid #03ac0e;\n    padding: 15px 0;\n    font-size: 18px;\n    margin: 30px auto 0;\n    width: 100%;\n    max-width: 350px;\n    display: block;\n}\n#send-review-button:hover{\n    background-color: white;\n    color: #03ac0e;\n}\n\n\n#favorite-button{\n    position: fixed;\n    z-index: 5;\n    background-color: #03ac0e;\n    border: 2px solid white;\n    border-radius: 50%;\n    padding: 15px 17px;\n    color: white;\n    font-size: 20px;\n    right: 30px;\n    bottom: 30px;\n}\nfooter{\n    text-align: center;\n    background-color:#03ac0e;\n    color: white;\n}\nfooter p{\n    margin: 0;\n    padding: 15px;\n}\n\n.skip-link{\n    position: absolute;\n    top: -100px;\n    text-decoration: none;\n    background-color: white;\n    font-size: 18px;\n    font-weight: bold;\n    color:#03ac0e;\n    padding: 8px;\n    z-index: 100;\n}\n.skip-link:focus{\n    top: 120px;\n}\n.resto-detail-menu-list::-webkit-scrollbar {\n    width: 7px;\n    height: 7px;\n}\n.resto-detail-menu-list::-webkit-scrollbar-thumb {\n    background: #03ac0e;\n    border-radius: 11px;\n    border: solid 1px white;\n}\n.resto-detail-menu-list::-webkit-scrollbar-track{\n    background: #ffffff;\n    border-radius: 15px;\n}\nloader-element{\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#loader-container{\n    text-align: center;\n    color: #03ac0e;\n    font-weight: bold;\n}\n\n#loader{\n    width: 60px;\n    height: 60px;\n    border: 10px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 10px solid #03ac0e;\n    border-bottom: 10px solid #03ac0e;\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n    margin: auto;\n}\n\n#alert-container {\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 10;\n    top: 0px;\n    width: 100vw;\n    height: 100vh;\n}\n#alert-container-cover{\n    background-color: black;\n    opacity: 0.7;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n}\n#alert {\n    background-color: white;\n    color: black;\n    margin: auto;\n    opacity: 1;\n    z-index: 15;\n    text-align: center;\n    min-width: 250px;\n    font-weight: 700;\n    border-radius: 10px;\n    font-size: 20px;\n}\n#alert p{\n    margin-bottom: 40px;\n}\n#alert p #success{\n    color: #04AA6D;\n}\n#alert p #fail{\n    color: #f44336;\n}\n#alert button{\n    min-width: 44px;\n    min-height: 44px;\n    background-color: #03ac0e;\n    font-size: 16px;\n    margin-bottom: 20px;\n    padding: 0 30px;\n    color: white;\n    border: none;\n    border-radius: 10px;\n}\n.fail-loading{\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n}\n.list-fail-loading{\n    margin: 0;\n}\nresto-fetch-error-message {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #f44336;\n    margin: auto;\n    font-size: 22px;\n    font-weight: bold;\n    flex-grow: 1;\n    text-align: center;\n}\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n}\n  \n",""]),n.exports=e},function(n,e,t){var r=t(8),i=t(20),t={insert:"head",singleton:!1};r(i="string"==typeof(i=i.__esModule?i.default:i)?[[n.i,i,""]]:i,t);n.exports=i.locals||{}},function(n,e,t){(e=t(9)(!1)).push([n.i,"@media screen and (min-width: 350px){\r\n  #hero-desc{\r\n      padding: 0 30px;\r\n  }\r\n  #hero-catchphrase{\r\n      font-size: 18px;\r\n  }\r\n\r\n  #resto h2{\r\n      margin: 50px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 450px){\r\n  header{\r\n      display: flex;\r\n      justify-content: space-between;\r\n  }\r\n  #drawer{\r\n      position: relative;\r\n      left: 0;\r\n      box-shadow: none;\r\n      \r\n      max-width: 300px;\r\n  }\r\n  #nav-list{\r\n      display: flex;\r\n      width: 100%;\r\n      justify-content: space-around;\r\n      border: none;\r\n      align-items: center;\r\n      height: 100%;\r\n      padding-right: 10px;\r\n  }\r\n  .nav-items a{\r\n      border: none;\r\n      padding: 12px 2px;\r\n   }\r\n  #hamburger{\r\n      display: none;\r\n  }\r\n\r\n\r\n  #hero{\r\n      height: 300px;\r\n      justify-content: center;\r\n  }\r\n  #hero-cover{\r\n      height: 300px;\r\n  }\r\n  #hero-desc{\r\n      font-size: 18px;\r\n  }\r\n  #hero-catchphrase{\r\n      font-size: 24px;\r\n  }\r\n\r\n  .skip-link:focus{\r\n      top: 65px;\r\n  }\r\n\r\n  #resto-detail-hero #resto-detail-name{\r\n    font-size: 45px;\r\n  }\r\n\r\n  #resto-detail-about-us-desc{\r\n    margin: 0px 30px;\r\n    font-size: 16px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 550px){\r\n  #hero-desc{\r\n      font-size: 18px;\r\n  }\r\n  #hero-catchphrase{\r\n      font-size: 24px;\r\n  }\r\n  #resto-detail-about-us-desc{\r\n    margin: 0px 50px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 625px){\r\n  #resto-list{\r\n      grid-template-columns: auto auto;\r\n  }\r\n  #resto-detail-hero #resto-detail-name{\r\n    font-size: 55px;\r\n  }\r\n  #resto-detail-hero #resto-detail-location{\r\n    font-size: 20px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 700px){\r\n  #hero-desc{\r\n      max-width: 700px;\r\n  }\r\n  #resto-detail-about-us{\r\n      text-align: center;\r\n  }\r\n  #resto-detail-about-us-desc{\r\n   font-size: 18px;   \r\n}\r\n    #category-container{\r\n        flex-direction: row;\r\n        justify-content: space-evenly;\r\n    }\r\n    #resto-detail-menu-food-drink-container{\r\n        display: flex;\r\n    }\r\n    #resto-detail-menu-foods, #resto-detail-menu-drinks{\r\n        width: 49%;\r\n    }\r\n    .resto-detail-menu-list::-webkit-scrollbar {\r\n        width: 10px;\r\n        height: 7px;\r\n    }\r\n    .resto-detail-menu-list::-webkit-scrollbar-thumb {\r\n        background: #03ac0e;\r\n        border-radius: 11px;\r\n        border: solid 1px white;\r\n    }\r\n    .resto-detail-menu-list::-webkit-scrollbar-track{\r\n        background: #ffffff;\r\n        border-radius: 15px;\r\n    }\r\n\r\n    #resto-detail-rating-star{\r\n        font-size: 40px;\r\n    }\r\n    #resto-detail-rating-stat{\r\n        font-size: 25px;\r\n        font-weight: bold;\r\n    }\r\n    #previous-review{\r\n        margin-left: 50px;\r\n    }\r\n    #next-review{\r\n        margin-right: 50px;\r\n    }\r\n\r\n    #review-form{\r\n        padding: 0 50px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 925px){\r\n  #resto-list{\r\n      grid-template-columns: auto auto auto;\r\n  }\r\n  #resto-detail-hero #resto-detail-name{\r\n    font-size: 70px;\r\n    }\r\n    #resto-detail-about-us-desc{\r\n        padding: 0 70px;\r\n     }\r\n    #previous-review{\r\n        margin-left: 70px;\r\n    }\r\n    #next-review{\r\n        margin-right: 70px;\r\n    }\r\n    #review-form{\r\n        padding: 0 100px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1225px){\r\n    #resto-list{\r\n        grid-template-columns: auto auto auto auto;\r\n    }\r\n    #resto-detail-hero #resto-detail-name{\r\n        font-size: 80px;\r\n    }\r\n    #resto-detail-about-us-desc{\r\n        padding: 0 100px;\r\n     }\r\n     #previous-review{\r\n        margin-left: 110px;\r\n    }\r\n    #next-review{\r\n        margin-right: 120px;\r\n    }\r\n    #review-form{\r\n        padding: 0 150px;\r\n    }\r\n}",""]),n.exports=e}]]);