# Full-stack React/Flask Digital Library App
I built a digital library project for developers using Flask for my backend, and React as my frontend UI. The application is geared towards those who love keeping track of their books and provides a space for them to create, update and showcase their collection of their book library. Once a user registers on the backend, they have an API key which allows them to perform CRUD operations from a frontend source. My React frontend allows any authenticated users to display and update their book data in a DataTable component.

## What it does:
1. Backend - User Registration/Authentication
Used form input to collect a user’s email and password. I passed that data into a SQLAlchemy User model that automatically generated a user id, api token, and hashed password to store in the database along with their email. Upon login, I query the database for the user’s email – if the stored password hash matches the password they used to login, I will take them to a page that displays all of their user info.

2. Backend - CRUD Operations
I built 5 API endpoints for a logged-in user to Create, Retrieve, Update, and Delete books from their personal collection. The Create and Update routes expect a JSON object full of book information in the body. Each route takes in a user id and expects the user’s API token to appear as an x-access-token in the header. All routes are protected  with a custom decorator that authenticates a user by querying the database for their email and API token.

3. Frontend - User Login
I used Firebase Authentication to allow users to log in using existing Google credentials. I protected Drone CRUD pages with Firebase AuthGuard component, so users are required to log in before accessing any information that is not theirs. Several contents on the site change dynamically based upon a user’s login status.

4. Frontend - Data Display / Creation
I created a data table component that automatically makes a GET request to the backend server when a user visits the page. Based on the user’s credentials, all of their books will populate the table. Each book record has a checkbox with a pop-up modal with an Update or Delete form. If a user wants to update a book, they fill out a form with new attributes and that information is sent to the backend update route. If they want to delete a drone, they can do so at the click of a button and send a delete request. 
Users are also able to add a brand new book using form input from the same page.



## Techonoligies Used
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Glitch](https://img.shields.io/badge/glitch-%233333FF.svg?style=for-the-badge&logo=glitch&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

### Get Started

1. Cloning repo
   Open terminal and paste the command below: <br />
  ``git clone https://github.com/Goldelm24/React-digital-library.git
  ``
2. After the repository is cloned, navigate to the project directory using the following command: <br />
    ``cd React-digital-library
    ``
3. Lastly run this command to download all dependecies <br />
      ``npm install
      ``
## Final Product ![Digital Library](https://react-digital-library-7e8a5.web.app/)
