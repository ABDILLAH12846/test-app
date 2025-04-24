
# 🛒 Simple React Product App

A simple product listing and cart management app built with React, Redux Toolkit, and TypeScript. Includes basic login authentication and protected routes.

---

## 🚀 Features

- ✅ Product listing (fetched from Fake Store API)
- ✅ Product detail page (with dynamic routing)
- ✅ Task Management (can add, update, and delete)
- ✅ Add to cart (with quantity control)
- ✅ Redux state management (with redux-persist)
- ✅ Simple login (frontend-only, hardcoded)
- ✅ Protected routes (cannot access main app without login)
- ✅ Responsive layout with CSS Modules

---

## 🔐 Login Credentials

> You **must login first** to access any route (products, cart, etc).

```
Username: bambang  
Password: 12345
```

---

## 📦 Tech Stack

- React + TypeScript
- Redux Toolkit
- Redux Persist
- React Router DOM
- CSS Modules
- Vite

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ABDILLAH12846/test-app.git
cd test-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Open in Browser

```
http://localhost:5173
```

---

## 🗂️ Folder Structure

```
src/
├── app/                # Redux store setup (with persist)
├── assets/             # Icons and images
├── element/            # Reusable UI components (e.g. Button, CardProduct)
├── page/               # Pages (Login, Home, Detail)
├── redux/              # Redux slices (auth, product, cart)
└── main.tsx            # App entry point
```

---

## 📝 License

This project is licensed under the MIT License — feel free to use and modify!

---

Built with ❤️ by **Abdillah Zikri Alhusni**