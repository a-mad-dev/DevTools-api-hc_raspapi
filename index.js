// Import express and crypto and path
const express = require("express");
const crypto = require("crypto");
const path = require("path");
// Add RateLimiting
const rateLimit = require("express-rate-limit");


// Create the express app
const app = express();

// config express to auto-parse json inputs
app.use(express.json());
app.use(express.static("public"));

// Config rateLimit settings
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // max 30 requests per IP per minute
  message: {
    success: false,
    error: "Too many requests, slow down.",
  },
});

// Apply rateLimit to each API, to prevent /docs from being restricted
app.use("/random", limiter);
app.use("/uuid", limiter);
app.use("/hash", limiter);
app.use("/json/format", limiter);
app.use("/status", limiter);

// Home page redirect to docs
app.get("/", (req, res) => {
  res.redirect("/docs");
});

// Status page
app.get("/status", (req, res) => {
  res.json({
    name: "Devtools API",
    status: "Running...",
    version: "1.0.0",
    uptime: process.uptime(),
    endpoints: ["/random", "/uuid", "/hash", "/json/format", "/status"]
  });
});

// Random Number Generator
app.get("/random", (req, res) => {
  res.json({
    number: Math.floor(Math.random() * 100),
  });
});

// Random uuid generator
app.get("/uuid", (req, res) => {
  res.json({
    uuid: crypto.randomUUID(),
  });
});

// Hash finder
app.get("/hash", (req, res) => {
  // Get the text query
  const text = req.query.text || "";
  // Create the hash
  const hash = crypto.createHash("sha256").update(text).digest("hex");
  // Output
  res.json({
    text: text,
    hash: hash,
  });
});

// JSON Formatter
app.post("/json/format", (req, res) => {
  const data = req.body.data;

  // validate wrapper
  if (!data || Object.keys(data).length === 0) {
    return res.json({
      valid: false,
      error: "No data provided",
    });
  }

  res.json({
    valid: true,
    formatted_json: data,
  });
});

// Docs page
app.get("/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "docs.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});