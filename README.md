# WarmPaws – Winter Pet Care Platform

[![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.2-blue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-9.23.0-yellow?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deploy-green)](https://www.netlify.com/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

**Repository:** [GitHub Repo](https://github.com/programming-hero-web-course2/b12-a9-firesheild-ShahriarRefat0.git)  
**Live Demo:** [Live](https://babet-pate-care.netlify.app/)

---

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

**WarmPaws** is a cozy winter companion platform designed for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season.

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

---
