const users = require("../data/users.js");

module.exports = function(app) {

    app.get("/api/users", function(req, res) {
        
        res.json(users);

    });

    // Post Route //
    // ========================================= //

    app.post("/api/users", function(req, res) {
        
        var totalDifference = 0;

        var match = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var scores = userScores.map(function(item) {
            return parseInt(item, 10);
        });

        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: scores
        }

        console.log("");
        console.log("Name: " + userName);
        console.log("User Score: " + userScores);

        var sum = scores.reduce((a, b) => a + b, 0);

        console.log("Sum of users score: " + sum);
        console.log("Best match difference: " + match.friendDifference);
        console.log("");

        for (let i = 0; i < users.length; i++) {

            console.log(users[i].name);
            totalDifference = 0;
            console.log("Total Diff: " + totalDifference);
            console.log("Best match difference: " + match.friendDifference);

            var bestFriendScore = users[i].scores.reduce((a, b) => a + b, 0);

            console.log("Total friend score: " + bestFriendScore);
            totalDifference += Math.abs(sum - bestFriendScore);
            console.log("-------> --------> " + totalDifference);

            if (totalDifference <= match.friendDifference) {

                match.name = users[i].name;
                match.photo = users[i].photo;
                match.friendDifference = totalDifference;

            }
            
            console.log(totalDifference + " Total Difference");
        }

        console.log(match);
        users.push(userData);
        console.log("New User Added");
        console.log(userData);
        res.json(match);

    });
};