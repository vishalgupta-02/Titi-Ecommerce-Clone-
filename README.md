# Titi-Ecommerce

Titi- A online clothing ecommerce website with the MERN stack technology and equipped with Razorpay and Stripe payment gateway. It has the two panels- admin and main website. This is it for now. I will update my journey of this project on this file and will learn more about the tech and better than the previous projects. I hope Everything workswell

## Day-01 (NavBar Done and Folders Created)

Today we have done the following things:

1. We will create the folder structures of the project as the below
[
    1. Assets - all the resources such as images, videos and some files
    2. Components - Today We just created The Navbar section
    3. Context - Nothing done today in this folder
    4. Pages - We created 9 files in this folder -> About, Cart, Collection, Contact, Home, Login, Orders, PLaceOrder, Product
    5. App.jsx - It contains all the navigation links to all the pages or the components
    6. index.css - It contains all the styles for the main.jsx but we are using Tailwind Css framework
    7. main.jsx - This file was fetched by the id by the index.html
]
2. We worked on the Navbar section today and added navigation to the different pages. These are the following things:
[
    1. We added the Logo.
    2. added the different pages with links or navigations.
    3. We added the search icon and will add the feature later on.
    4. The Profile icon with the three options - My Profile, Orders and LogOut
    5. The Orders icon with better features will be added later on.
]

These are the few things we have done and will so much later on and I hope for the best

## Day-02 (8 Components and 1 Context Created)

Today we have done the following things-

1. Firstly We have created the 8 Components such as- BestSeller, Footer, Hero, LatestCollections, NewsletterBox, OurPolicy, ProductItem,Title
2. First, We touched the HEro component and there we done the following things-
  We created 3 different components-
    a. BestSeller - It contain the section of all the bestseller clothes the website sells. It displays the 5 items at most and this can be done with the help of useContext, useState and useEffect hooks alongwith their names and title
    b. LatestArrivals - It contain all the latest items the website provides to the customer and it displays only 10 items at a time with the 3 hooks- useState, useEffect and useContext
3. Then we created the OurPolicy component which contain all the info about the different policies and features we provide
4. We created the subscribe component with the basic functionalities of taking email as the input from the form
5. Then we created the footer section with the basic things.
6. The title component provides the basic texts for titles to be displayed.
7. We are using them to increase the reusability of the codes.
8. We have created the ShopContext component as it provides the following things-
  a. Different products that needs to be used by different components.
  b. currency of the country.
  c. deliveryFee which is fixed throughout the application.
  This can be done using the following things-
    I. Creation of contexts using createContext()
    II. Contexts definition and passing them as props
    III. Exporting them to the different components using Provider with value and you can take the reference of contexts through their documentation.

### This is it for today and will learn and write more about the project tomorrow

## Day-03 (Frontend Completed Approximately)

Today we have done the following things-

1. We have added the SearchBar component and the toast notifications in the App.jsx
2. We created the CartTotal component which displays the total amount after calculating all the fees and services.
3. We faced some issues on the NAvbar component and will fix it later.
4. We created RelatedProduct component from scratch.
5. We added addToCart, getCartCount, updateQuantity and getCartAmount function or api's in the context file.
6. We updated the About page with Title and NewsletterBox component.
7. We also faced some issue in Cart component where all the products are not showing up.
8. We created the Contact page from scratch.
9. Build the logic between SignUp and Login.
10. We created the Orders page and PlaceOrder page also.
11. Created the Product page where all the details of single page is displayed.

### This is it for today and will try to learn and code more about the project
