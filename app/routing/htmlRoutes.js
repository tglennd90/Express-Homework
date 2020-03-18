var path = require("path");

module.exports = function(app) {

    // Survey Route //
    // =================================== //

    app.get("/survey.html", function(req, res) {

        res.sendFile(path.join(__dirname, "../public/survey.html"));

    });

    // User-List Route //
    // =================================== //
    app.get("/data/users.js", function(req, res) {

        res.sendFile(path.join(__dirname, "../data/users.js"));

    });

    // Default Route //
    // =================================== //

    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname, "../public/home.html"));
        
    });
}