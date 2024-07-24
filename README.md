# ThreadsOFBharat (E-Commerce Website)

This project aims to provide a marketplace for users to browse and purchase various items, including sarees, jewelry, and accessories.

## Project Overview
The application is built with a modern tech stack:<br>
Frontend: Angular<br>
Backend: Spring Boot<br>
Database: PostgreSQL

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Java 11 or higher
- Angular CLI
- PostgreSQL
- Eclipse IDE (for backend development)
- Visual Studio Code (for frontend development)

## Getting Started
   
 ### Project Structure:

**Frontend (Angular)**:<br>
Components:<br>
SignupComponent: Handles user registration.<br>
LoginComponent: Manages user login.<br>
HomepageComponent: Displays the main navigation and product categories.<br>
SareesComponent: Shows a list of sarees available for purchase.<br>
JewelryComponent: Displays various jewelry items.<br>
AccessoriesComponent: Lists accessories.<br>
CartComponent: Manages items added to the user's cart.<br>
CheckoutComponent: Handles the checkout process.
**Backend (Spring Boot)**:<br>
Entity Class: Defines the CartItem entity, which represents items in the cart.<br>
`src/main/java/com/example/demo/entity/CartItem.java`

Repository Interface: Provides CRUD operations for CartItem entities.<br>
`src/main/java/com/example/demo/repository/CartItemRepository.java`

Service Class: Contains business logic for managing cart items.<br>
`src/main/java/com/example/demo/service/CartItemService.java`

Controller Class: Exposes RESTful endpoints for cart item operations.<br>
`src/main/java/com/example/demo/controller/CartItemController.java`

CORS Configuration: Configures Cross-Origin Resource Sharing (CORS) settings.<br>
`src/main/java/com/example/config/WebConfig.java`

Application Properties: Contains configuration properties for the application.
src/main/resources/application.properties 

 **Set up PostgreSQL**:
   Still in the process
