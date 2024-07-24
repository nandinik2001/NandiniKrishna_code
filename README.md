# E-Commerce Application

This project is an e-commerce application with a Spring Boot backend and an Angular frontend. The backend uses PostgreSQL as the database for storing cart items.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Java 11 or higher
- Node.js and npm
- Angular CLI
- PostgreSQL
- Eclipse IDE (for backend development)
- Visual Studio Code (for frontend development)

## Getting Started

### Backend (Spring Boot)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
2. **Set up PostgreSQL**
   Still in the process
3. **Project Structure**
   Project Structure
Entity Class: Defines the CartItem entity, which represents items in the cart.

src/main/java/com/example/demo/entity/CartItem.java
Repository Interface: Provides CRUD operations for CartItem entities.

src/main/java/com/example/demo/repository/CartItemRepository.java
Service Class: Contains business logic for managing cart items.

src/main/java/com/example/demo/service/CartItemService.java
Controller Class: Exposes RESTful endpoints for cart item operations.

src/main/java/com/example/demo/controller/CartItemController.java
CORS Configuration: Configures Cross-Origin Resource Sharing (CORS) settings.

src/main/java/com/example/config/WebConfig.java
Application Properties: Contains configuration properties for the application.

src/main/resources/application.properties 
