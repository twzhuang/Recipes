const mongoose = require('mongoose'),
      Ingredient = mongoose.model('Ingredient'),
      User = mongoose.model('User')
;

module.exports = {
    allIngredients: function(req, res) {
        User.findOne({_id: req.params.id}, function(err, user) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                console.log(user);
                res.json(user.ingredientList);
            }
        });
    },
    addIngredients: function(req, res) {
        console.log(req.body, req.params.id);
        Ingredient.create(req.body, function(err, ingredient) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                console.log(ingredient);
                User.findOneAndUpdate({_id: req.params.id}, {$push: {ingredientList: ingredient}}, {new: true}, function(err, user) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        console.log(user);
                        res.json(user);
                    }
                });
            }
        });
    },
    allUsers: function(req, res) {
        User.find({}, function(err, users) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(users);
            }
        });
    },
    // showIngredient: function(req, res) {
    //     console.log("Showing player", req.params.id)
    //     Ingredient.findOne({_id: req.params.id}, function(err, player) {
    //         if (err) {
    //             res.json({message: "Error", error: err});
    //         }
    //         else {
    //             res.json(player);
    //         }
    //     });
    // },
    // editIngredient: function(req, res) {
    //     Ingredient.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, new: true}, function(error, player) {
    //         if (error) {
    //             res.json({message: "Error", error: error.errors});
    //         }
    //         else {
    //             res.json(player);
    //         }
    //     });
    // },
    // createIngredient: function(req, res) {
    //     console.log("in the player post route", req.body);
    //     Ingredient.create(req.body, function(err, player) {
    //         if (err) {
    //             res.json({message: "Error", error: err.errors});
    //         }
    //         else {
    //             res.json({message: "Ingredient created successfully", player: player});
    //         }
    //     })
    // },
    // deleteIngredient: function(req, res) {
    //     Ingredient.remove({_id: req.params.id}, function(err) {
    //         if (err) {
    //             res.json({message: "Error", error: err});
    //         }
    //         else {
    //             console.log("Ingredient deleted successfully");
    //             res.json({message: "Ingredient deleted successfully"});
    //         }
    //     });
    // }
};
