# React Application with Navbar, Resizing, and CRUD Operations

This repository contains a React application with a navigation bar, resizable components, and CRUD (Create, Read, Update, Delete) operations for managing employee data.

## Features

 - **Resizing**: Navigate to resize the components using the `react-grid-layout` library.
   - **CRUD Operations**: Navigate to perform CRUD operations on employee data.

1. **Resizing (First Task)**:
   - Utilizes the `react-grid-layout` library for resizing components.
   - Allows users to resize components dynamically.

2. **CRUD Operations (Second Task)**:
   - Users can add a new employee with the following details:
     - Image
     - Name
     - Field
     - Position
     - Employee Type
   - Users can update the details of a single employee.
   - Provides a count of how many times the add and update API endpoints were hit.

## Installation and Setup

To run the application locally, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>


# Backend Details

## Welcome to dataneuron_Backend

# Project Name

dataneuron

## Database Schema

### Crud_operation

- `image`: string
- `name`: string
- `field`: string
- `position`: string
- `EmployeType`: string

## API Endpoints

## API Endpoints

List the available API endpoints and their descriptions here.

# Backend API Documentation

Welcome to the backend API documentation for project. This documentation provides information on available endpoints and how to use them for frontend development.

# get all Employes

- **URL:** `https://dataneuron-backend-3.onrender.com/`
- **Method:** `get`
- **Description:** get all employee employees.
- **Extra info:** no need to pass anything just make the request

# Add new Employee

- **URL:** `https://dataneuron-backend-3.onrender.com/add`
- **Method:** `POST`
- **Description:** Add a new employee.
- **Request Body:**
  - Include employee details.

# Update Employee

- **URL:** `https://dataneuron-backend-3.onrender.com/update/:id`
- **Method:** `PATCH`
- **Description:** update new employee.
- **Request Body:**
  - Include details that need ti be update.
  -
  - - **Request params:**
  - Include employee id in params.

# Get api counts

- **URL:** `https://dataneuron-backend-3.onrender.com/count`
- **Method:** `GET`
- **Description:** get api counts of add and update.
- - **Extra info:** no need to pass anything just make the request
