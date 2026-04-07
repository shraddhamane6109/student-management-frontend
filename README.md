# 🎓 Student Management System - Frontend

A React-based frontend for the Student Management System with authentication and full CRUD operations. This application connects to a Spring Boot REST API backend.

🔗 Backend Repository
https://github.com/shraddhamane6109/student-management-backend

---

# 🚀 Features

## 🔐 Authentication

* User Login
* User Registration
* Logout
* Protected Dashboard Route

## 👨‍🎓 Student Management

* Add Student
* View Student List
* Update Student
* Delete Student
* Full CRUD Operations

---

# 🛠️ Tech Stack

* React
* React Router DOM
* Axios
* Tailwind CSS
* Vite
* JavaScript

---

# 📁 Project Structure

```
src
 ├── pages
 │   ├── Login.jsx
 │   ├── Register.jsx
 │   └── Dashboard.jsx
 │
 ├── api.js
 ├── ProtectedRoute.jsx
 ├── App.jsx
 └── main.jsx
```

---

# 🔌 API Configuration

Backend base URL configured in:

```
src/api.js
```

```
baseURL: "http://localhost:8080"
```

Change this URL when deploying backend.

---

# ▶️ How to Run

## 1. Install dependencies

```
npm install
```

## 2. Start development server

```
npm run dev
```

Application runs at:

```
http://localhost:5173
```

---

# 📄 Pages

* Login Page
* Register Page
* Dashboard
* Student CRUD Interface

---

# ⚠️ Backend Requirement

Backend server must be running at:

```
http://localhost:8080
```

---

# 📸 Screenshots

## Login Page

![Login](screenshots/login.png)

## Register Page

![Register](screenshots/register.png)

## Dashboard

![Dashboard](screenshots/dashboard.png)

## Update Student

![Update Student](screenshots/update.png)

---

# 🔮 Future Improvements

* Form validation
* Toast notifications
* Loading spinner
* Role-based authentication
* Responsive UI improvements
* Deployment (Netlify / Vercel)

---

# 👩‍💻 Author

Shraddha Mane
MCA Student (2027)
Full Stack Developer
React | Java | Spring Boot | MySQL
