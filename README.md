# Energie Vin

This is my technical test for the company Ilek.

## Information

This project is made of a Backend running on Ruby on Rails and a frontend made with Next.JS (React).
The next.js app is located in the `frontend/` directory at the project's root.

I decided to put both Backend and Frontend in the same git repository for more convenience.

This project is just a basic demo coded quickly to be a support during the live interview. With more time, the app should include authentication, tests, code optimized for performances, linters, etc... 

## Setup

```bash
# 1. Pull down the app from version control
git clone git@github.com:davidBentoPereira/technical_test_ilek_energie_wine.git
cd technical_test_ilek_energie_wine

# 2. Create the database, run the migrations and seed the DB (make sure you have Postgres running)
rails db:setup

# 4. Run the Backend
rails server

# 5. Install the depedencies for the frontend
cd frontend
npm install

# 6. Run the Frontend
cd frontend
npm run dev
```