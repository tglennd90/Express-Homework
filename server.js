// Dependencies //
// ========================== //

const express = require("express");
const colors = require("colors");

// Express Setup //
// ========================== //

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware //
// ========================== //

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routers //
// ========================== //
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Server Start //
// ========================== //

app.listen(PORT, function() {
    console.log("======================================================".america);
    console.log("");
    console.log("PORT Portal:".bgRed.white + "       " + "http://localhost:".brightGreen + PORT);
    console.log("");
    console.log("======================================================".america);
});
