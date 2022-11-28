
# EasyPark_App
## 🚗 MERN EasyPark Booking Management Application
### Quoc Lam & Yumi Yu

---

💎 Deployed App: http://www.ezcarparkspot.com/

🖥 GitHub Repo: https://github.com/Wokko-wok/EasyPark_App

📖 Part A Documentation Repo: https://github.com/Wokko-wok/EasyPark_App-Documents


## Installation Instructions

To use the app locally, please follow the below instructions.

- Create a directory in a suitable location on your machine named and `$ cd` into it.
- Whilst in the directory, from bash CLI, clone the server repo `$ git clone https://github.com/Wokko-wok/EasyPark_App.git`.
- CD into the api folder `$ cd api`.
- Install yarn packages with `$ yarn`.
- From bash run `$ yarn start` to start the local server.
- The server will run on local host port 27017.
- In another terminal CD into the client folder `$ cd client`.
- Install yarn packages with `$ yarn`.
- From bash run `$ yarn start` to start the local client.
- The server will run on local host port 3000.


On the deployed application 2 accounts have been prepaired for viewing


To view as admin:

  email: Admin@test.com

  password: Admin1



To view as a normal user:

  email: test@test.com

  password: Password

(You can also create an account as you see fit)

---

## API Endpoints

| Users               | Bookings                | Carparks                  |
| ------------------- | ----------------------- | ------------------------- |
| POST /register      | GET /                   | GET /:id                  |
| POST /login         | GET /:id                | GET /                     |
| GET /               | GET /all                | POST /                    |
| DELETE /:id         | GET /user/:userId       | DELETE /:id               |
|                     | POST /                  | PUT /:id                  | 
|                     | PUT /:id                |                           |                    
|                     | GET /:id                |                           |                    
|                     | DELETE /:id             |                           | 

---

## Testing

The application has been tested in Chrome on Mac OS.

The production and development applications have both gone through extensive automated and manual testing with Postman, JEST, REST Client and Cypress.

- Manual test logs: https://docs.google.com/spreadsheets/d/1JKDUfCoHt_nbstkc0rgSBTqE7ZVkpLL6dFifslC6bE8/edit?usp=sharing


- Postman :
  ![Postman](docs/PostmanTesting.png)

- REST : 
  ![REST](docs/REST-ClientTesting.png)

- Cypress : 
  ![Cypress](docs/CYPRESS-ClientTEsting.png)

---

## Screenshots of Current Site

#### Home Page

![Home](docs/homePage.png)

#### Login

![Login](docs/loginPage.png)

#### Search on Home PAge

![Auto Search](docs/auto-search-HomePage.png)

#### Carpark List Page 

![lists](docs/carparkList-map.png)

#### Booking

![Booking](docs/bookingPage.png)

#### Success

![Success](docs/successbooking.png)

#### User Bookings

![UserBookings](docs/UserBookings.png)

#### Admin Page

![AdminPage](docs/adminPage.png)

![AdminUser](docs/Admin-user.png)

![AdminBookings](docs/Admin-bookings.png)


---