
# Auction Platform - MERN Stack

Project Overview

This Auction Platform is a full-stack web application designed to facilitate online auctions. It includes three distinct user roles:

    1. Auctioneer: Can create and manage auctions, set base prices, and view bids.

    2. Bidder: Can view ongoing auctions, place bids, and track their bidding history.


## Features

Auctioneer Features

- Create new auctions with relevant details (title, description, base price, auction duration).

- View and manage active, upcoming, and closed auctions.

- Monitor bids placed on their auctions.

Bidder Features

- Browse and view details of ongoing and upcoming auctions.

- Place bids on active auctions.

- Track personal bidding history and auction results.


## Tech Stack

**Client:** React, Redux, TailwindCSS, Axios for API requests

**Server:** Node, Express, JWT, RESTful API for communication between frontend and backend

**Database:** MongoDB


## Installation

Follow these steps to run the project locally:

1. Clone the repository:
```bash
    git clone <repository-url>
    cd auction-platform
```

2. Install dependencies for both frontend and backend:
```bash
    cd frontend
    npm install
    cd ../backend
    npm install
```
3. Configure environment variables:
- Create a .env file in the backend directory and add the     following variables:
```bash
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    PORT=5000
```

4. Start the development servers:
- Run the backend server:
```bash
    cd backend
    npm start
```
- Run the frontend server:
```bash
    cd frontend
    npm start
```

5. Open your browser and navigate to http://localhost:3000 to access the platform.


# Key Functionalities

- Authentication & Authorization: Role-based access control for Auctioneers, Bidders, and Superadmin.

- Auction Management: Create, update, and close auctions.

- Real-Time Bidding: Allow bidders to place bids and see updates in real-time.

- Dashboard: Personalized dashboards for Auctioneers and Bidders.

- Admin Panel: Manage users and moderate auctions.

# Future Enhancements

- Implement real-time notifications using WebSockets.

- Add auction categories and filters for better navigation.

- Integrate payment gateways for secure transactions.

- Enhance UI with animations and accessibility features.
