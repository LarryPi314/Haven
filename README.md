# Kentro

Kentro is a mobile platform designed to host various community crowd-sourcing initiatives such as parks 🏞️, playgrounds 🛝, green spaces 🌱, library renovations📕, and more. Users can create accounts, start initiatives, and contribute payments through Stripe payment integrations. The backend is powered by Express.js and Firebase, while the frontend is built using React Native and Expo.

Amid a growingly isolated world with modern technologies at our fingertips, Kentro was designed with the philosophy "local is the future" to incentivize community engagement by allowing residents of a community to win badges and keep track of their community's progress. 

We coded Kentro in a 24 hour session at Hacktech by Caltech 2024, taking home the first place prize.🥇

- Larry Wang, [Rohan Desai](https://github.com/rohan335), [Sofi Zaozerska](https://github.com/sofigoldfoxhmc), [Andy Xu](https://github.com/andaero)

For more information on our software, visit
https://devpost.com/software/kentro or checkout 

[![kentro-video](https://img.youtube.com/vi/pju4RQyYSng/0.jpg)](https://www.youtube.com/watch?v=pju4RQyYSng)


## Features
- User Authentication
- Create Crowd-Sourcing Initiatives
- Contribute to Initiatives via Stripe Integrations

## Tech Stack
- **Frontend:** React Native, Expo
- **Backend:** Express.js
- **Database & Authentication:** Firebase
- **Payment Integration:** Stripe

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn
- Expo CLI (`npm install -g expo-cli`)
- Firebase account and project setup
- Stripe account and API keys

### Backend Setup
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/kentro.git
    cd kentro/backend
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
    STRIPE_SECRET_KEY=your_stripe_secret_key
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

### Stripe Integration
1. **Set up Stripe Webhooks:**
    - Go to your Stripe dashboard.
    - Navigate to Developers > Webhooks.
    - Add an endpoint URL: `http://localhost:5000/webhook`.
    - Select events you want to listen to (e.g., `checkout.session.completed`).

### Running the Application
- Ensure the backend server is running (`npm start` in the `backend` directory).
- Ensure the Expo server is running (`expo start` in the `frontend` directory).
- Open the Expo app on your mobile device and scan the QR code displayed in the terminal.

