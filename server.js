// Dependencies //
// ========================== //

const express = require("express");
const path = require("path");
const colors = require("colors");

// Express Steup //
// ========================== //

const app = express();
const PORT = 3003;

// Middleware //
// ========================== //

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server Start //
// ========================== //

app.listen(PORT, function() {
    console.log("");
    console.log("PORT Portal: ".yellow + "http://localhost:".blue + PORT);
});