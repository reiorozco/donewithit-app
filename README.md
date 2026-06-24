<h1 align="center">📦 DoneWithIt</h1>

<p align="center">
  A React Native (Expo) marketplace app to buy and sell items locally.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge"/>
</p>

## ✨ Features

- 🛍️ Browse, post and manage listings
- 🔐 Authentication with JWT
- 📷 Image upload and image picker
- 📍 Geolocation tagging for listings
- 🔔 Push notifications (Expo Notifications)
- 📶 Offline awareness (NetInfo) and secure storage
- 🎬 Loading/animations with Lottie & Reanimated

## 🛠️ Tech Stack

- **Core:** React Native · Expo (Expo Router) · TypeScript
- **Navigation:** Expo Router · React Navigation
- **Data:** TanStack Query · Axios
- **Forms:** React Hook Form · Zod
- **Native:** Expo Image/Location/Notifications/SecureStore · Reanimated · Gesture Handler

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- [Expo Go](https://expo.dev/go) app (iOS/Android) or an emulator
- A running backend exposing the API

### Installation
```bash
git clone https://github.com/reiorozco/donewithit-app.git
cd donewithit-app
npm install
```

### Environment variables
Create a `.env` file based on `.env.example`:
```env
EXPO_PUBLIC_API_URL=https://your-api-url.com
```

### Run
```bash
npm start        # start Expo dev server
npm run android  # open on Android
npm run ios      # open on iOS
npm run web      # open in browser
```

## 📸 Screenshots

> _Add screenshots or a screen-recording GIF of the app here._

## 📄 License

Released under the [MIT License](LICENSE).
