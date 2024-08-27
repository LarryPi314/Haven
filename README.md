# Haven 

Haven is a mobile platform designed to connect displaced refugees with willing hosts. Users can create accounts, create stay listings, book stay listings, and receive notifications when listings are filled or opened. The backend is powered by Express.js, while the frontend is built using React Native, Expo, and Firebase.

In a world where refugees face uncertainty at every step of their road, we wanted to design Haven as a low-latency, efficient solution to help refugees get up on their feet and to their destinations. 

We coded Haven in a 24 hour session at the 5CHack 2024, taking home the first place prize.🥇

- Larry Wang, [Rohan Desai](https://github.com/rohan335), [Sofi Zaozerska](https://github.com/sofigoldfoxhmc), [Andy Xu](https://github.com/andaero)

For more information on our project, visit
https://devpost.com/software/haven-ez2rys or checkout 

[![kentro-video](https://img.youtube.com/vi/R5dImxBZCo0/0.jpg)](https://www.youtube.com/watch?v=R5dImxBZCo0)

## Features
- User Authentication
- Create Stay Listings
- Book Stay Listings
- Notifications for Listings

## Tech Stack
- **Frontend:** React Native, Expo
- **Backend:** Express.js
- **Database & Authentication:** Firebase

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn
- Expo CLI (`npm install -g expo-cli`)
- Firebase account and project setup

### Backend Setup
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/haven.git
    cd haven/backend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure environment variables:**
    Create a `.env` file in the `backend` directory and add the following variables:
    ```env
    PORT=5000
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    FIREBASE_PROJECT_ID=your_firebase_project_id
    FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    FIREBASE_APP_ID=your_firebase_app_id
    ```

4. **Start the backend server:**
    ```bash
    npm start
    ```

### Frontend Setup
1. **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure Firebase:**
    Open `firebaseConfig.js` and replace the placeholder values with your Firebase project details:
    ```javascript
    export const firebaseConfig = {
      apiKey: "your_firebase_api_key",
      authDomain: "your_firebase_auth_domain",
      projectId: "your_firebase_project_id",
      storageBucket: "your_firebase_storage_bucket",
      messagingSenderId: "your_firebase_messaging_sender_id",
      appId: "your_firebase_app_id",
    };
    ```

4. **Start the Expo server:**
    ```bash
    expo start
    ```

### Running the Application
- Ensure the backend server is running (`npm start` in the `backend` directory).
- Ensure the Expo server is running (`expo start` in the `frontend` directory).
- Open the Expo app on your mobile device and scan the QR code displayed in the terminal.

