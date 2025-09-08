# Property Management System Web (PMS)

A modern and modular **Property Management System (PMS)** built with **React, Vite**, and **Clean Architecture**. It features distinct dashboards for:
- **Admin**
- **Real Estate Office**
- **Service Provider**

---

##  Architecture Overview
```
src/
├── presentation/        # UI Layer (React components, pages, and routes)
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components
│   └── routes/           # Public & private route definitions
│
├── application/          # Application Layer (state & use cases)
│   ├── useCases/         # Business logic orchestrators
│   └── state/            # Zustand stores for state management
│
├── domain/               # Domain Layer (core business rules)
│   ├── entities/         # Domain models/entities (e.g., Property)
│   └── repositories/     # Abstract repository interfaces
│
├── infrastructure/       # Infrastructure Layer (implementation details)
│   ├── api/              # Axios instances & API calls
│   └── storage/          # LocalStorage/session handling
│
├── shared/               # Shared utilities across the app
│   ├── hooks/            # Custom React hooks
│   ├── constants/        # Constants (e.g., colors, governorates)
│   └── utils/            # Helper functions
└── main.jsx              # Application entry point
```


This structure ensures:
- Clear separation of concerns
- Highly testable code
- Ease of maintenance and scaling

---

##  Getting Started

### Prerequisites
Ensure you have Node.js and npm installed
```bash
node --version
npm --version
```

---
##  Setup
### Clone the repo
```bash
git clone https://github.com/Kareem-Bizreh/Property-Management-System-Web.git
cd Property-Management-System-Web
```

### Install dependencies
```bash
npm install
```

---
##  Environment Setup

### Create a .env file in the root with your API base URL:
```env
VITE_API_BASE_URL=https://api.yoursite.com
```
Then install BackEnd and turn it on and you will have a BackEnd
### BackEnd Repo
[Property Management System BackEnd](https://github.com/OnlyAbdullh/Property-Management-System-BackEnd)


---
##  Usage

- Visit `/login` to sign in (or start on the landing page).
- After authentication, you'll be redirected to the correct dashboard based on your role:
    - **Admin Dashboard**
    - **Real Estate Office Dashboard**
    - **Service Provider Dashboard**
- Navigation is handled via **React Router** with:
    - **Public Routes** – e.g., Login, Landing page
    - **Private Routes** – Role-specific dashboards requiring authentication
- Filters allow searching and sorting properties by:
    - Governorate (City)
    - Region
    - Listing Type
    - Status

---
## Core Features

- **Clean Architecture**  
  Clear separation between layers:
    - `presentation/` for UI components, pages, and routing
    - `application/` for use-case logic and state management with Zustand
    - `domain/` for entities and repository interfaces
    - `infrastructure/` for API connections and storage logic

- **Advanced State Management with Zustand**  
  Lightweight and fast state container makes your app scalable and easy to maintain.

- **Centralized API Handling using Axios**  
  Custom Axios instance with interceptors for:
    - Automatic authentication handling
    - Global error management, including unauthorized (401/403) redirects

- **Role-Based Routing**  
  Separate route sets for:
    - Admin
    - Real Estate Office
    - Service Provider

- **Entity Pattern Implementation**  
  Domain entities like Property ensure consistent data handling and business logic encapsulation.

- **Dynamic Filtering & Search**  
  Efficient property search by city, region, type, and status using ID-based lookups for fast filtering.

- **Responsive & Modern UI Design with Tailwind CSS**  
  Tailwind CSS + `@tailwindcss/vite` plugin help create a fully responsive interface that adapts on all screen sizes.

- **Material UI Components & RTL Support**  
  Using MUI (`@mui/material` and `@mui/icons-material`) with Emotion styling for performant, themeable components and right-to-left text support.

- **Smooth Animations with Framer Motion**  
  Elegant transitions and motion effects to enhance UX.

- **Interactive Maps using Leaflet & React-Leaflet**  
  Display property locations on interactive maps for better visualization.

- **Reusable UI Components**  
  Includes Inputs, Dropdowns, Modals, Textareas with autosize.

- **Toast notifications**  
  Toast notifications using (`react-toastify`).

- **Loading State Management**  
  Visual feedback with spinners and skeletons for better UX.

- **Utility Tools**
    - `react-hook-form` for form state management and validation
    - `react-router` for routing structures
    - `reactjs-popup` for lightweight popup dialogs
