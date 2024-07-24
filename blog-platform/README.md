# Blog Platform

A simple blog platform developed using Spring Boot, Thymeleaf, Java, MySQL, HTML, CSS, and JavaScript. This project allows users to create, view, edit, and delete blog posts.

## Features

- Create new blog posts
- View a list of all blog posts
- View details of a single blog post
- Edit existing blog posts
- Delete blog posts with confirmation

## Technologies Used

- Java
- Spring Boot
- Spring Data JPA
- Thymeleaf
- MySQL
- HTML
- CSS
- JavaScript

## Prerequisites

- Java 11 or higher
- Maven
- MySQL

## Setup and Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/blog-platform.git
   cd blog-platform
2. **Create the mySQL database**:<br>
CREATE DATABASE blog_platform;<br>
3. **Configure the database connection**:<br>
Update the src/main/resources/application.properties file with your MySQL database connection details:<br>
'spring.datasource.url=jdbc:mysql://localhost:3306/blog_platform'<br>
'spring.datasource.username=root'<br>
'spring.datasource.password=your_password'<br>
'spring.jpa.hibernate.ddl-auto=update'<br>
'spring.jpa.show-sql=true'<br>
4. **Build and run the application**:
   You can run the application from Spring Tool Suite (STS) by right-clicking on the BlogPlatformApplication class and selecting Run As -> Spring Boot App
5. **Access the application**:<br>
Open your web browser and navigate to http://localhost:8080/.<br>

## Project Structure
blog-platform/
├── src/main/java/com/example/employee123/<br>
│   ├── BlogPlatformApplication.java<br>
│   ├── model/<br>
│   │   └── Post.java<br>
│   ├── repository/<br>
│   │   └── PostRepository.java<br>
│   ├── service/<br>
│   │   └── PostService.java<br>
│   └── controller/<br>
│       └── PostController.java<br>
├── src/main/resources/<br>
│   ├── static/<br>
│   │   └── styles.css<br>
│   ├── templates/<br>
│   │   ├── index.html<br>
│   │   ├── new_post.html<br>
│   │   ├── edit_post.html<br>
│   │   └── view_post.html<br>
│   └── application.properties<br>
└── pom.xml


