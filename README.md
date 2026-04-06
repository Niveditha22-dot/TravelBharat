# 🇮🇳 TravelBharat – Explore India State by State

> A centralized digital travel encyclopedia for Indian tourism — discover destinations state-wise, city-wise, and category-wise.

![TravelBharat Banner](https://img.shields.io/badge/TravelBharat-Explore%20India-FF6B2B?style=for-the-badge&logo=globe&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

---

## 🌐 Live Demo

🔗 **[https://animated-empanada-ddec49.netlify.app](https://animated-empanada-ddec49.netlify.app)**

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Author](#author)

---

## 📖 About the Project

**TravelBharat** is a full-stack web application that solves the problem of scattered Indian tourism information. It provides a single, structured platform where users can:

- Browse tourist places **state-wise and city-wise**
- Filter by **category** (Heritage, Nature, Religious, Adventure)
- View **detailed information** about each destination
- **Search** for places by name, state, or category
- Admins can **manage content** via a secure dashboard

> Built as part of the **Full Stack Web Development Internship** at **Unified Mentors Private Limited**

---

## ✨ Features

### 👤 User Features
- 🏠 Beautiful homepage with animated India map
- 🗺️ Browse all 28+ Indian states
- 📍 500+ tourist destinations organized state & city wise
- 🏷️ 4 categories — Heritage, Nature, Religious, Adventure
- 🔍 Search and filter functionality
- 📱 Fully responsive — mobile, tablet & desktop
- 🖼️ Image gallery for each destination
- 💡 Travel tips, best time to visit, entry fees & timings
- 📍 Nearby attractions for each place

### 🔐 Admin Features
- Secure login with JWT authentication
- Dashboard with statistics and charts
- Add, edit, delete tourist places
- Manage states and cities
- Content moderation

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Fonts | Google Fonts (Playfair Display, DM Sans) |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs |
| Deployment | Netlify (Frontend) |
| Version Control | Git, GitHub |

---

## 📁 Project Structure

```
incredible india project/
│
├── frontend/
│   ├── index.html              # Homepage
│   ├── state-detail.html       # State page with places
│   ├── place-detail.html       # Tourist place details
│   ├── search.html             # Search & filter page
│   ├── admin-login.html        # Admin login
│   └── admin/
│       └── dashboard.html      # Admin dashboard
│
└── backend/
    ├── server.js               # Entry point
    ├── package.json
    ├── .env                    # Environment variables
    ├── config/
    │   └── db.js               # MongoDB connection
    ├── models/
    │   ├── State.js
    │   ├── City.js
    │   ├── Place.js
    │   └── Admin.js
    ├── controllers/
    │   ├── stateController.js
    │   ├── cityController.js
    │   ├── placeController.js
    │   └── adminController.js
    ├── routes/
    │   ├── stateRoutes.js
    │   ├── cityRoutes.js
    │   ├── placeRoutes.js
    │   └── adminRoutes.js
    └── middleware/
        └── authMiddleware.js
```

---

## 📄 Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage with hero section, state grid, categories & search |
| `state-detail.html` | State page with city tabs, place cards & sidebar info |
| `place-detail.html` | Place details with gallery, highlights, tips & nearby places |
| `search.html` | Search results with filters by state, city & category |
| `admin-login.html` | Secure admin authentication page |
| `admin/dashboard.html` | Content management dashboard |

---

## 🔌 API Endpoints

### States
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/states` | Get all states |
| GET | `/api/states/:id` | Get single state |
| POST | `/api/states` | Create state (Admin) |
| PUT | `/api/states/:id` | Update state (Admin) |
| DELETE | `/api/states/:id` | Delete state (Admin) |

### Places
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/places` | Get all places |
| GET | `/api/places?search=fort` | Search places |
| GET | `/api/places?category=Heritage` | Filter by category |
| GET | `/api/places?state=:id` | Filter by state |
| POST | `/api/places` | Add new place (Admin) |
| PUT | `/api/places/:id` | Update place (Admin) |
| DELETE | `/api/places/:id` | Delete place (Admin) |

### Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/register` | Register admin |
| POST | `/api/admin/login` | Admin login |
| GET | `/api/admin/me` | Get admin profile |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or above)
- MongoDB (local or Atlas)
- Git

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Niveditha22-dot/TravelBharat.git
cd TravelBharat
```

**2. Setup Backend**
```bash
cd backend
npm install
```

**3. Create `.env` file in backend folder**
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/travelbharat
JWT_SECRET=travelbharat_secret_key_2025
```

**4. Start the backend server**
```bash
npm run dev
```

Server runs at: `http://localhost:5000`

**5. Open Frontend**

Open `frontend/index.html` in your browser using Live Server in VS Code or simply double click the file.

---

## 🔐 Admin Access

```
Email: admin@travelbharat.in
Password: admin123
```

---

## 🔮 Future Enhancements

- 🗺️ Google Maps API integration
- 🌏 Multilingual support (Hindi & regional languages)
- 📅 Travel itinerary planner
- 🏨 Hotel & transport booking
- ⭐ User reviews and ratings
- 🌤️ Real-time weather information
- 📱 React Native mobile app
- 🤖 AI-powered travel recommendations

---

## 👩‍💻 Author

**Niveditha R** - nivedithar483@gmail.com

- 🎓 Full Stack Web Development Intern
- 🏢 Unified Mentors Private Limited
- 🔗 GitHub: [@Niveditha22-dot](https://github.com/Niveditha22-dot)

---

## 📄 License

This project was built as part of an internship program at **Unified Mentors Private Limited**.

---

<div align="center">

Made with ❤️ for Incredible India 🇮🇳

**[⬆ Back to Top](#-travelbharat--explore-india-state-by-state)**

</div>
