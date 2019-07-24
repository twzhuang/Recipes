const mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      ingredients = require('../controllers/ingredients.js'),
      path = require('path');
      users = require('../controllers/users.js');
;
module.exports = function(app){
    app.get("/ingredients", function(req, res) {
        ingredients.allIngredients(req,res);
    });
    app.post("/ingredients", function(req, res) {
        ingredients.addIngredient(req, res);
    });
    // app.get("/ingredients/:id", function(req, res) {
    //     ingredients.showIngredient(req, res);
    // })
    // app.put("/ingredients/:id", function(req, res) {
    //     ingredients.editIngredient(req,res);
    // });
    // app.post("/ingredients", function(req, res) {
    //     ingredients.createIngredient(req, res);
    // });
    // app.delete("/ingredients/:id", function(req, res) {
    //     ingredients.deleteIngredient(req, res);
    // });
    // app.get("/", function(req, res) {
    //     User.find({}, function(err, users) {
    //         console.log("users", users);
    //     })
    //     res.render("index");
    //     users.home(req, res) {
    //
    //     }
    // });

    app.post("/register", function(req, res) {
        users.register(req, res);
    });
    //
    // app.get("/success", function(req, res) {
    //     users.success(req, res);
    // })

    app.post("/login", function(req, res) {
        users.login(req, res);
    })

    // app.get("/logout", function(req, res) {
    //     delete req.session.userId;
    //     delete req.session.fname;
    //     res.redirect("/");
    // })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
