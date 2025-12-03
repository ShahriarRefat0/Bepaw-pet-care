# Bepaw – Winter Pet Care Platform
A modern winter pet care platform for pet owners to discover services, winter products, grooming options, and expert tips — all in one place.  
Built with **React**, **Firebase Authentication**, **React Router**, and **Tailwind CSS**, Bepaw focuses on a clean UI, smooth animations, and secure user experience.  

[![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.2-blue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-9.23.0-yellow?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-green)](https://vercel.com/home)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

**Repository:** [GitHub Repo](https://github.com/programming-hero-web-course2/b12-a9-firesheild-ShahriarRefat0.git)  
**Live Demo:** [Live](https://babet-pate-care.netlify.app/)

---  

## 📚 Table of Contents

- [Overview](#-overview)
- [Core Features](#-core-features)
- [Tech Stack](#-tech-stack)
- [App Structure](#-app-structure)
- [Pages & Functionality](#-pages--functionality)
- [Data & JSON Usage](#-data--json-usage)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

## 🐕 Overview

**Bepaw – Winter Pet Care Platform** helps pet owners keep their pets **warm, safe, and healthy** during the winter season.

Users can:

- Explore **local pet care services**
- Discover **winter pet clothing & accessories**
- Browse **grooming options**
- Read **expert winter care tips**
- Create an account, **log in securely**, and manage their **profile**

The platform is designed with:

- A **minimalist, winter-themed UI**
- **Responsive layout** for all devices
- **Engaging animations** using AOS and Animate.css
- **Smooth navigation** using React Router

---

## ✨ Core Features

- ✅ **Fully responsive design** – optimized for mobile, tablet, and desktop  
- ✅ **Single Page Application (SPA)** with client-side routing  
- ✅ **Authentication system**
  - Email/password **signup & login**
  - **Google login** (social authentication)
- ✅ **Protected routes**
  - Service details
  - Profile page  
  (Only accessible when user is logged in)
- ✅ **Profile management**
  - Update display name
  - Update profile picture
- ✅ **Dynamic data**
  - Services and winter care tips loaded from JSON data
- ✅ **Hero slider**
  - Swiper-based, winter-themed hero section
- ✅ **Toast notifications**
  - Success/error feedback using `react-hot-toast`
- ✅ **Extra home sections**
  - Expert vets showcase
  - Winter care tips
  - Custom section/CTA for users

---

## 🛠 Tech Stack

**Frontend**

- ⚛️ **React** – UI library
- 🔀 **React Router** – client-side routing
- 🎨 **Tailwind CSS** – utility-first CSS framework
- 🌼 **DaisyUI** – component library on top of Tailwind

**Authentication & Services**

- 🔐 **Firebase Authentication** – email/password & Google sign-in

**UI / UX Enhancements**

- 🎞 **AOS (Animate On Scroll)** – scroll-based animations
- 🌀 **Animate.css** – prebuilt CSS animations
- 🧊 **Swiper.js** – interactive sliders/hero carousel
- 🔔 **React Hot Toast** – toast notifications

**Build & Deploy**

- ⚡ **Vite** – fast development bundler
- ▲ **Vercel** – deployment platform

---

## 🧩 App Structure

> High-level layout of the application:

- **Navbar**
  - Logo
  - Navigation links
  - Dynamic user avatar (if logged in)
  - Login/Register/Logout buttons

- **Main Content**
  - Hero slider
  - Popular winter care services
  - Winter care tips
  - Expert vets section
  - FAQ section
  - Custom section (CTA / info)

- **Footer**
  - Basic contact info
  - Social links (if configured)
  - Terms / privacy links (static text)

You can explore the structure inside the `src` folder for:

- `components/` – shared UI components  
- `pages/` – route-based pages  
- `routes/` – route configuration & protected route logic  
- `contexts/` or `providers/` – auth/context providers (if used)

---

## 📄 Pages & Functionality

### 1️⃣ Home Page

- Winter-themed hero section powered by **Swiper**
- Grid/list of **popular services**:
  - Image, name, price, rating, and “View Details”
- Section for **winter care tips**
- **Expert vets** showcase with short profiles
- **FAQ** section to answer common user questions

---

### 2️⃣ Service Details Page (Protected)

- Accessible only to **authenticated users**
- Shows full service details loaded from JSON (e.g., description, price, rating, duration)
- Includes a **booking form**:
  - Name
  - Email
  - Button: **“Book Now”**
- On successful submission, a **success toast** appears

---

### 3️⃣ Authentication Pages

#### 🔐 Login Page

- Email & password fields
- Password visibility toggle
- **Google login** button
- **Forgot password** link
- Error/success messages shown via toast

#### 🆕 Signup Page

- Name, Email, Password, Photo URL
- Password validation:
  - Minimum length
  - Strength rules (if implemented)
- On success, user is created in Firebase Auth

---

### 4️⃣ My Profile Page (Protected)

- Displays logged-in user information:
  - Name
  - Email
  - Profile image
- Form to **update profile**:
  - Display name
  - Photo URL
- Uses Firebase’s profile update API
- **“Update Profile”** button triggers update and toast feedback

---

### 5️⃣ Forgot Password

- Simple form with email input
- Sends reset link using Firebase
- User is prompted to **check Gmail** or email provider
- Feedback shown via toast

---

## 📦 Data & JSON Usage

The app uses **local JSON data** (likely stored in the `public` folder) for:

- Service lists
- Winter care tips
- Possibly expert vet profiles

This approach makes the app:

- Easy to extend (just update JSON)
- Simple to maintain
- Great for learning **data-driven UI** in React

---

## 🚀 Getting Started

Follow these steps to run Bepaw locally on your machine.

### Prerequisites

Make sure you have:

- **Node.js** (LTS version recommended)
- **npm** or **yarn** installed
- A **Firebase project** for Authentication

---

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ShahriarRefat0/Bepaw-pet-care.git

# 2. Go into the project directory
cd Bepaw-pet-care

# 3. Install dependencies
npm install
# or
yarn install

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies & Packages Used](#technologies--packages-used)
- [Layout Structure](#layout-structure)
- [Pages & Functionality](#pages--functionality)
- [JSON Data](#json-data)
- [Installation & Setup](#installation--setup)
- [Author](#author)

---

## Project Overview

**Bepaw** is a cozy winter companion platform designed for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season.

Users can explore:

- Local pet care services
- Winter pet clothing
- Grooming options
- Expert tips
- Profile management and secure login

The platform focuses on a **modern, minimalist design**, intuitive navigation, and engaging animations using **AOS** and **Animate.css**.

---

## Features

- Fully **responsive** design for mobile, tablet, and desktop
- **Single Page Application (SPA)** behavior with smooth route navigation
- **Authentication system**: Email/password signup & login, Google social login
- **Protected routes**: Service details and profile pages accessible only to logged-in users
- **Profile management**: Update display name and profile picture
- **Dynamic JSON data**: Services and winter care tips
- **Interactive hero slider**: Swiper-based winter-themed hero section
- **Toast notifications**: Success/error messages using **react-hot-toast**
- **Extra home page sections**: Expert vets showcase, winter care tips, and a custom section

---

## Technologies & Packages Used

- **React** – Frontend framework
- **React Router** – SPA routing
- **Firebase Authentication** – Secure user login/signup
- **React Hot Toast** – Toast notifications for success/error messages
- **AOS (Animate on Scroll)** – Scroll-based animations
- **Animate.css** – Smooth element animations
- **Swiper.js** – Interactive sliders for hero section
- **Tailwind CSS** – Utility-first styling
- **DaisyUI** – Prebuilt UI components for rapid development

---

## Layout Structure

- **Navbar**: Logo, navigation links, dynamic user avatar, login/register/logout buttons
- **Footer**: Contact info, social links, privacy policy
- **Main Sections**:
  - Hero slider
  - Popular winter care services
  - Winter care tips
  - Expert vets
  - FAQ section

---

## Pages & Functionality

1. **Home Page**

   - Hero section with winter-themed Swiper slider
   - Popular services with cards displaying image, name, price, rating, and view details
   - Winter care tips
   - Expert vet profiles
   - FAQ

2. **Service Details Page** (Protected Route)

   - Shows full service information from JSON
   - Booking form with name, email, and "Book Now" button
   - Success toast on booking submission

3. **Authentication Pages**

   - **Login Page**: Email, password, password toggle, Google login, forgot password link
   - **Signup Page**: Name, email, password, photo URL, password validation

4. **My Profile Page**

   - Shows logged-in user info: Name, email, profile image
   - Update profile form using Firebase
   - Functional "Update Profile" button

5. **Forgot Password**
   - Email input and reset button redirecting user to Gmail for password reset

```

---  
## 👨‍💻 Author

### Shahriar Refat
MERN Stack Web Developer | Passionate about building modern, user-friendly web apps.

✉️ Email: **shahariarrefat@gmail.com**
🌍 GitHub:  [@ShahriarRefat0]([https://example.com](https://github.com/ShahriarRefat0))
