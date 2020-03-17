// Displays all Users //
// ========================================= //

app.get("/api/users", function(req, res) {

    return res.json(users);

});

// Post Route //
// ========================================= //

app.post("/api/users", function(req, res) {
    
    var newUser = req.body;
  
    console.log(newUser);
  
    users.push(newUser);
  
    res.json(newUser);

});