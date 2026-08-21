# Restaurant Management API

RESTful API to manage Restaurants, Menu Items, and User Authentication using Node.js, Express, JWT, Bcrypt, and MongoDB.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in your values:
   ```
   cp .env.example .env
   ```

3. Make sure MongoDB is running locally, or set `MONGO_URI` to a MongoDB Atlas connection string.

4. Run in development mode (auto-restarts on file changes):
   ```
   npm run dev
   ```

   Or run normally:
   ```
   npm start
   ```

Server starts on `http://localhost:5000` by default.

## Endpoints

| Method | Endpoint | Auth Required | Description |
|---|---|---|---|
| GET | / | No | Welcome route |
| POST | /register | No | Register a new user |
| POST | /login | No | Login, returns JWT |
| GET | /restaurants | No | List all restaurants |
| GET | /restaurants/top | No | Top 5 by rating |
| GET | /restaurants/:id | No | Get one restaurant |
| POST | /restaurants | Yes | Add restaurant |
| PUT | /restaurants/:id | Yes | Update restaurant |
| DELETE | /restaurants/:id | Yes | Delete restaurant |
| GET | /restaurants/:id/menu | No | List menu for a restaurant |
| POST | /restaurants/:id/menu | Yes | Add menu item |
| PUT | /menu/:id | Yes | Update menu item |
| DELETE | /menu/:id | Yes | Delete menu item |

For protected routes, add header: `Authorization: Bearer <token>` (token returned from /login).
