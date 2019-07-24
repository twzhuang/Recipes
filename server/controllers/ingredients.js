const mongoose = require('mongoose'),
      Ingredient = mongoose.model('Ingredient')
;

module.exports = {
    allIngredients: function(req, res) {
        Ingredient.find({}, function(err, ingredients) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json(players);
            }
        });
    },
    addIngredient: function(req, res) {
        Ingredient.create(req.body, function(err, ingredient) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                // console.log(ingredient);
                res.json(ingredient);
            }
        });
    }
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
