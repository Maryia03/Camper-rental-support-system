# Camper-rental-support-system
This project is a web application designed to support camper rental services. The system automates reservations, fleet management, and customer service processes.

## 🛠️ Technologies
- Java 17
- Spring Boot
- React
- MySQL
- Docker

## 🧑‍💻 Features
- User:
  - Register and log in
  - Browse available campers
  - View camper pages
  - Search campers using filters (location, dates, number of seats, price)
  - Check camper availability for selected dates
  - Create a reservation for a camper
  - Cancel reservation
  - View personal profile
  - View reservation history

- Employee:
  - View and manage reservations
  - Modify reservation details at customer request
  - Cancel reservations
  - Check camper availability and status
  - Update camper availability
  - Manage camper fleet
  - Update rental prices for campers

- Admin:
  - Add new camper types
  - Add, edit, and delete campers
  - Manage all reservations
  - Change reservation statuses
  - Manage service and maintenance records for campers
  - Add and manage pickup/return locations
  - Manage users and employee accounts

## ⚙️ Running the Project
- Backend:
  - cd backend
  - ./mvnw spring-boot:run
- Frontend:
  - cd frontend
  - npm start
- Docker:
  - docker compose up --build
