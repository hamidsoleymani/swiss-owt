# Swiss OWT - Boat Management Application

## Step 1 – Planning and Requirements

Before writing any code, spend **40–60 minutes** understanding the project and making architectural decisions.

### Questions to Answer

1. What do you want to build?
2. Which technology stack do you want to use?
3. Which architecture do you want to use?
4. Which authentication mechanism should be used?
5. Which parts should you implement yourself and which parts can be accelerated with AI?
6. Should OpenAPI be used for frontend code generation?
7. Should the backend be implemented first, or should backend and frontend be developed in parallel?
8. What are the backend do's and don'ts?

---

# Result

## 1. Functional Requirements

### Mandatory

### UC1 – Login

The user opens the application and is redirected to a login page.
After successful authentication, the user is redirected to the boat overview (UC2).

### UC2 – Boat Overview

The authenticated user sees a paginated list of all boats.

### UC3 – Boat Management

The user can:

- Create a boat
- Update a boat
- Delete a boat

### UC4 – Boat Details

The user can open the detail view of a boat.

---

### Optional (only if time permits)

### UC5 – Search

Search or filter boats by:

- Name
- Description

### UC6 – Delete Confirmation

Display a confirmation dialog before deleting a boat.

### Nice-to-have Features

- GitHub Actions CI/CD
- Swagger / OpenAPI documentation
- Dark Mode
- WCAG AA accessibility
- Audit log
    - Created by
    - Updated by
    - Deleted by
    - Timestamp

---

## 2. Technology Stack

### Backend

- Java 21
- Spring Boot 3.5
- Spring Security
- Spring Data JPA
- PostgreSQL 17
- Flyway
- Maven
- OpenAPI
- Swagger

### Frontend

- Angular 21

### Infrastructure

- Docker
- Docker Compose

### Testing

- Postman
- JUnit
- Integration Tests

---

## 3. Architecture

Initially use a classic **3-Layer Architecture**:

- Controller
- Service
- Repository

If the project grows significantly, migrate to **Onion Architecture**.

---

## 4. Authentication

Preferred:

- OAuth2

For this project:

- HTTP Basic Authentication
- HTTPS

Keep the solution simple.

---

## 5. AI Usage

Use OpenAI to accelerate development.

Potential areas:

- Angular UI
- Routing
- Boilerplate code
- Documentation

Implement the business logic yourself.

---

## 6. OpenAPI

Evaluate whether OpenAPI should be used for frontend code generation.

---

## 7. Development Strategy

Implement the backend first.

Validate all REST endpoints with Postman before starting frontend development.

---

## 8. Backend Guidelines

### Do

- Follow SOLID principles
- Follow Clean Code principles
- Write meaningful names
- Keep methods small
- Write unit and integration tests

### Don't

- Do not use Lombok
- Do not use the `var` keyword
- Keep the code explicit and readable

---

# Project Setup

Create a Spring Boot project named:

```
swiss-owt
```

Requirements:

- Java 21
- Maven
- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL
- Flyway
- OpenAPI
- Swagger

Change the default server port from **8080** to **9090** because users may already have applications running on port 8080.

---

# Project Structure

```text
swiss-owt/
├── backend/
├── frontend/
├── database/
├── certificate/
├── docker-compose.yml
└── README.md
```

---

# GitHub Repository

Clone the project:

```bash
git clone https://github.com/hamidsoleymani/swiss-owt.git
```

---

# Technologies Used

- Angular 21
- Spring Boot 3.5
- Java 21
- PostgreSQL 17
- Flyway
- Docker
- Docker Compose
- Spring Security (Basic Authentication + HTTPS)
- OpenAPI
- Swagger

---

# Requirements

- Docker Desktop or Colima

---

# Running the Application

Start the complete application:

```bash
docker compose up --build
```

The first build may take several minutes because Docker downloads all required dependencies.

---

# Open the Application

```
http://localhost
```

---

# Login

Username:

```text
admin
```

Password:

```text
admin
```

---

# Stop the Application

```bash
docker compose down
```

---

# Remove the Database Volume

```bash
docker compose down -v
```