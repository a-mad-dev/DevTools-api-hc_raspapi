# 🧰 Devtools API

A lightweight developer utility API built with **Node.js + Express**, deployed on **Render**.

It provides simple but useful tools like random numbers, UUID generation, hashing, and JSON formatting — plus a built-in documentation UI.

---

## 🌐 Live API

`https://your-app-name.onrender.com`

---

## 📚 Documentation

Interactive docs:

`https://your-app-name.onrender.com/docs`

---

## 🚀 Features

- 🎲 Random number generator
- 🧬 UUID generator (crypto-based)
- 🔐 SHA256 hash generator
- 🧾 JSON formatter (POST endpoint)
- 📊 API status endpoint
- 📄 HTML documentation page
- 🌍 Fully deployed on Render

---

## 📌 Architecture Overview

All routes are served from a single Express server:

/ → redirects to /docs  
/docs → documentation UI  
/status → API health check  
/random → random number generator  
/uuid → UUID generator  
/hash → SHA256 hashing tool  
/json/format → JSON formatter (POST)

---

## 📡 API Endpoints

---

### 🏠 Home

GET /

Redirects to `/docs`.

---

### 📊 Status

GET /status

Returns API health information.

Response:

```json
{
  "name": "Devtools API",
  "status": "Running...",
  "version": "1.0.0",
  "endpoints": ["/random", "/uuid", "/hash", "/json/format", "/status"]
}
```

---

### 🎲 Random Number

GET /random

Response:

```json
{
  "number": 42
}
```

---

### 🧬 UUID Generator

GET /uuid

Response:

```json
{
  "uuid": "550e8400-e29b-41d4-a716-446655440000"
}
```

---

### 🔐 Hash Generator

GET /hash?text=hello

Query:

- text → string to hash

Response:

```json
{
  "text": "hello",
  "hash": "2cf24dba5fb0a..."
}
```

---

### 🧾 JSON Formatter

POST /json/format

Request:

```json
{
  "data": {
    "a": 1,
    "b": "hello"
  }
}
```

Response:

```json
{
  "valid": true,
  "formatted_json": {
    "a": 1,
    "b": "hello"
  }
}
```

---

## 🌍 Deployment (Render)

This API is deployed using **Render Web Services**.

### 🧱 Build settings:

- **Environment:** Node
- **Build Command:**
```bash
pnpm install
```
- **Start Command:**
```bash
pnpm start
```

OR fallback:

```bash
npm install && npm start
```

---

## ⚙️ Important Environment Notes

- The app automatically uses:
```javascript
process.env.PORT
```
- No hardcoded ports (required for Render)

---

## 📦 Project Structure

```
devtools-api/
├── index.js
├── package.json
└── public/
    ├── docs.html
    └── styles.css
```

---

## 🧠 Tech Stack

- Node.js
- Express.js
- Crypto (built-in Node module)
- HTML + CSS (docs UI)
- Render (deployment)

---

## 🔥 Design Philosophy

- Minimal dependencies
- Fast utility endpoints
- Clean API structure
- Human + machine readable design
- Easy deployable backend service

---

## 🚀 Future Improvements

- API key authentication
- Rate limiting
- More utility endpoints (base64, timestamp, encoding tools)
- Versioned API routes (`/v1/...`)
- Public domain deployment improvements

---

## 👤 Author

Built as a developer utility API project focused on learning backend systems, REST APIs, and deployment workflows.

---
