var path = require("path");

module.exports = function(app) {

    // Survey Route //
    // =================================== //

    app.get("/survey", function(req, res) {

        res.sendFile(path.join(__dirname, "survey.html"));

    });

    // Default Route //
    // =================================== //

    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname, "home.html"));
        
    });
}