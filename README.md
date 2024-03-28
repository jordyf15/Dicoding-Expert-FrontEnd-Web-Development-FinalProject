# Restopedia
Restopedia is a Progressive web apps that allows the user to view information about certain restaurants such as their location, menus, reviews and ratings and also favorite them. This project was made in order to pass Dicoding's Expert Front-End Web Development Course.
  
## Live Demo on Repl
https://restopedia-97073.web.app/ 
  
## Setup
### Installation
    git clone https://github.com/jordyf15/Dicoding-Expert-FrontEnd-Web-Development-FinalProject.git
    npm install
### Scripts
- To start on development environment: `npm run start-dev`
- To build: `npm run build`
- To do Integration test with Karma and Jasmine: `npm run test`
- To do End-to-End testing with Codecept and Puppeteer: `npm run e2e`
- To do linting: `npm run lint`

## Information about the course
There are 3 submissions in this course that have their own requirements which have already been fulfilled by the Restopedia PWA.  
### 1st Submission
Features that is required to be in the application for the 1st submission.
#### App Bar (Navigation Bar)  
Requirements:
1. Display the name of the application or the logo of the restaurant catalog application.
2. It has navigation Menu with:
    - Home button that redirect to the root domain.
    - Favorite button with the value # (As a placeholder for the 2nd submission).
    - About Us button that redirect to your LinkedIn/Github/Social Media profile.
3. It has a working navigation drawer that can be accessed well in mobile screens.

#### Hero Element (Jumbotron Element)  
Requirements: 
1. Display hero element with the provided pictures.
2. Hero element picture must be full width or have fulfilled the following requirements:
    - Displayed minimally with width of 1000 px on viewport with width >= 1200px.
    - If viewport has width of < 1200px, then the hero element will be displayed full-width.

#### Restaurant List  
Requirements:
1. Display a list of restaurant based on the provided data in src/DATA.json.
2. Required to display the name, picture, and minimally choose to display one between city, rating, or the restaurant description.

#### Footer  
Requirements:
1. It have footer displayed on the bottom of the page.
2. It have a text content, for example "Copyright © 2020 - Hunger Apps".

#### Responsive Display  
Requirements:
1. The display of the web app have to be responsive in all screen sizes (mobile - tablet - desktop). Prioritize the mobile first.
2. Use CSS grid or flexbox technique on designing the layout. Float are not allowed.
3. Sets the viewport size dynamically based on the screen device being used.

#### Website Accessibility  
Requirements:  
1. All functionality of the website can be used using the keyboard.
2. Apply the skip to content technique to skip the focus on the navigation menu.
3. There is an alternative text on all the images displayed. If the picture doesn't have any meaning just give an empty value for the alt attribute.
4. The touchable elements such as button and anchor tags need to have a minimum size of 44 x 44px.
5. Use semantic elements when designing the structure of the HTML.

### 2nd Submission
Features that is required in the application for the 2nd submission.
#### Home Page (Restaurant List)
Requirements:
1. Display a list of restaurant which data was taken from the API https://restaurant-api.dicoding.dev/.
2. Must display the name, picture and minimally one between city, rating, or description of the restaurant.
3. Each of the restaurant item in the restaurant list must have a CTA or link that redirect to the detail of that restaurant item.
4. The Home page must still have the hero element from the previous submission.

#### Restaurant Detail Page
Requirements:
1. Displays details of the selected restaurant from the home page (restaurant list) or restaurant favorites page.
2. In the Detail page there must be:
    - Restaurant name
    - Picture
    - Address
    - City
    - Description
    - Food menus
    - Drink menus
    - Customer Reviews
3. It has a favorite button that will input or remove the favorite restaurant from the database which uses IndexedDB.

#### Favorite Restaurant List Page
Requirements:  
1. The Favorite Restaurant List Page can be access through the navigation menu by clicking the favorite anchor.
2. Display restaurants that has been favorited by the user which was taken from IndexedDB.
3. Must display the name, picture and minimally one between city, rating, or description of the restaurant.
4. Each of the restaurant item in the list must have a CTA or link that redirect to the detail of that restaurant item.

#### Native Capability
Requirements: 
1. The application can be accessed in offline state without the asset failed to be loaded, including the data acquired from the API. Use caching to handle this.
2. The application must display icon Add to Home Screen.
3. The application must have a custom icon that is displayed at home screen and splash screen.

#### Code Quality
Requirements:
1. Must use ESLint as a linter when writing the javascript code.
2. Uses one of the style guide whether its Google JavaScript Code Style, AirBnB JavaScript Code Style, or StandardJS Code Style.
3. Make sure there is no error when running the eslint.

#### Maintain the requirements in the previous submission. 
Such as display responsibility, accessibility on the website, appbar, footer and so on.

### 3rd Submission
Features that is required to be in the application for the 3rd submission.

#### Integration Testing
Requirements:
1. Implement integration testing for favorite and unfavorite restaurant functionality.

#### End to End Testing
Requirements:
1. Implement end to end testing for the following scenarios: 
    - Favorite a restaurant
    - Unfavorite a restaurant

#### Image Optimization
Requirements: 
1. Do compression on the picture that was used for the hero element. The size of the picture must be under 200kb.
2. Implement image responsive technique on the picture that was used for the hero element. The size of the picture for mobile and desktop screen size must be different.
3. Implement lazy loading technique on the picture that was used for the restaurant list items.

#### Bundle Optimization
Requirements: 
1. Use bundle analyzer for the project.
2. Use code splitting technique to seperate vendor code with the code that you write.

#### Maintain the requirements in the previous submission. 
Such as PWA implementation, display responsiveness, and website accessibility and so on.
