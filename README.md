# E-Shop App - ReactJS 🚀

![alt text](/src/assets/images/homePage.jpg)


## ⭐ Introduction 

This is an ecommerce App made using  React, Redux, CSS and Javascript. It is a responsive web application. CRUD operations can be performed on products. A dummy ecommerce api service : https://my-json-server.typicode.com/ has been used to create a dummy database and perform fetch API methods on it. Redux state is managed using react-redux and thunk packages. Changes are made persistent on refreshes using local storage.


 Folder and Components Structure
                            
 
                          📦src
                           ┣ 📂components
                           ┃ ┣ 📜Card.jsx
                           ┃ ┣ 📜CartCard.jsx
                           ┃ ┗ 📜Navbar.jsx
                           ┣ 📂pages
                           ┃ ┣ 📜AddProduct.jsx
                           ┃ ┣ 📜AllProducts.jsx
                           ┃ ┣ 📜Cart.jsx
                           ┃ ┣ 📜Home.jsx
                           ┃ ┗ 📜ProductDetails.jsx
                           ┣ 📂store
                           ┃ ┣ 📂actions
                           ┃ ┃ ┗ 📜index.js
                           ┃ ┣ 📂localStore
                           ┃ ┃ ┗ 📜index.js
                           ┃ ┣ 📂reducers
                           ┃ ┃ ┗ 📜index.js
                           ┃ ┗ 📜index.js
                           ┣ 📂styles
                           ┃ ┗ 📜index.css
                           ┣ 📜App.jsx
                           ┗ 📜index.jsx

                         App-----store(actions,redux store,reducer,localstore)
                          |
                        Home-----Navbar
         _________________|__________
        |                 |          |          
      AllProducts    AddProduct    Cart
       |      |                      |
     Card  ProductDetails         CartCard
                                                  
                                            
        
𝐔𝐬𝐞𝐫 𝐒𝐭𝐨𝐫𝐢𝐞𝐬

- Users should be able to Navigate to HOME, ALL PRODUCTS, ADD A PRODUCT and CART page using navigation bar or HOME Page Menu.

- Users should be able to view status of cart from any page on the navigation bar beside CART icon.

- Users should be able to view,edit, delete, and add products to cart from All Products page, they can click on any product to go to Product Details page.

- Users should be able to switch on to Sort items by price view and switch it off to resume non sorted view in All products page. 

- Users should be able to view,edit(all the details), delete, and add products to cart from Products Details page.

- Users should be able to Add a new product from ADD A PRODUCT page.

- Users should be able to view all the items added to cart in Cart Page and can remove items from cart as well.

- Users should be able to view updated state of products and cart on refreshes. 

- Users should be able to view notifications on edit, delete and add operations failure or success.


𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬

- Navbar
  - Show cart items count
  - Show Home, All Product, Add a Product, and Cart pages
- All products page
  - Show list of products from the API (using the above server)
  - Each product is editable by clicking on the “pencil” button. And we can edit that product inline. On finish editing the product a notification is shown
  - Each product is deletable, on clicking of the delete button will delete the product and a notification is shown
  - Implemented a sort button. On clicking it should sort by “price” and shows a cross button just beside it. On clicking the cross button the sort is removed.
  - Add to cart button: adds products to cart.
- Add a Product page
  - On clicking of the Add button after filling the details adds the product in the DB, and shows Notification on success/failure.
- Product detail page  
  - Shows all the details of a product
  - Add to cart button: adds products to cart.
  - Each product is editable by clicking on the “pencil” button. And we can edit that product inline. On finish editing the product a notification is shown
  - Each product is deletable, on clicking of the delete button will delete the product and a notification is shown
- Cart Page
  - Shows all the items in the cart
  - Remove Button: removes the product from cart
  - Total price amount of all the items added inside card is shown.
- Routing is managed via React Router 
- Global State management  via Redux library. Accessing and updating global stat via React Redux and Thunk packages


<br/>
<br/>

### 🛠️ Tools Used

<p align="justify">
<img height="140" width="140" src="https://ik.imagekit.io/garbagevalue/garbage/tags/ReactJS_ne_91IZ6n.webp">
<img height="140" width="140" src="https://user-images.githubusercontent.com/76626529/135654695-ca008e4f-99c8-40fc-9b73-8573f03c2867.png">
<img height="140" width="140" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png">
<img height="140" width="140" src="https://logodix.com/logo/470309.png">
<img height="140" width="140" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png">
<img height="140" width="140" src="https://code.visualstudio.com/assets/apple-touch-icon.png">
<img height="140" width="140" src="https://miro.medium.com/max/312/1*SRL22ADht1NU4LXUeU4YVg.png">
</p>


<br/>
<br/>


-  Packages:
   - react
   - react-dom
   - react-redux
   - react-router-dom
   - react-scripts
   - react-toastify
   - redux
   - redux-thunk
   - thunk
   - web-vitals
   
-  Library: ReactJS
-  Programming / Scripting: JavaScript
-  Front-End: HTML, CSS
-  Runtime Environment: NodeJS
-  Integrated Development Environment: VSCode

<br/>
<br/>

## 💻 Screens

![alt text](/src/assets/images/allProducts.jpg)
![alt text](/src/assets/images/editHome.jpg)
![alt text](/src/assets/images/deleteHome.jpg)
![alt text](/src/assets/images/sort.jpg)
![alt text](/src/assets/images/prductDetails.jpg)
![alt text](/src/assets/images/editDetail.jpg)
![alt text](/src/assets/images/deleteDetail.jpg)
![alt text](/src/assets/images/cart.jpg)


<br/>

I hope you like the project. Thank you for your time 😄

<br/>





# Getting Started with Create React App


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts




In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
