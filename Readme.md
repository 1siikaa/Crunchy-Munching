# MERN Stack Food Delivery Project -------------------------------------------------------------------------------------------------------


This is a food delivery project built using the MERN stack. It allows customers to browse restaurants and their menus, 
place orders, and make payments. It also allows restaurant owners to manage their menus, view orders.

Table of Contents----------------------------------------------------------------------
```yaml
Getting Started
Prerequisites
Installation
Usage
Built With
Contributing
```

Getting Started--------------------------------------------------------------------------

To get started with this project, you'll need to clone the repository and install the dependencies.

Prerequisites
You'll need to have Node.js and npm installed. You'll also need to create accounts with Stripe and MongoDB.

Installation-----------------------------------------------------------------------------
```yaml
Clone the repository:
cd mern-food-delivery
```

Install the dependencies:------------------------------------------------------------------

```yaml
npm install
cd client
npm install
cd ..
```
Create a .env file in the root directory with the following variables:
makefile
```yaml
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
STRIPE_API_KEY=<your-stripe-api-key>
Usage
```

To start the development server, run:--------------------------------------------------------
```yaml
npm run dev
The app will be available at http://localhost:3000.
```

To build the app for production, run:---------------------------------------------------------
```yaml
npm run build
To start the production server, run:
npm start
```
```yaml
Built With
MongoDB
Express
React
Node.js
```