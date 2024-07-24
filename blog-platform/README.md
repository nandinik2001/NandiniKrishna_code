# Simple Blog Platform

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
'spring.datasource.url=jdbc:mysql://localhost:3306/blog_platform'
'spring.datasource.username=root'
'spring.datasource.password=your_password'
'spring.jpa.hibernate.ddl-auto=update'
'spring.jpa.show-sql=true'

