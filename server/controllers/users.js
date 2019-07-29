const mongoose = require('mongoose'),
      User = mongoose.model('User'),
      bcrypt = require('bcrypt')
;

module.exports = {
    getRecipes: function(req, res) {
        User.findOne({_id: req.params.id}, function(err, user){
            if (err) {
                res.json(err);
            }
            else {
                res.json(user.savedRecipes);
            }
         })
    },
    addRecipeSaved: function(req, res) {
        console.log(req.params.id);
        User.findOneAndUpdate({_id: req.params.id}, {$push: {savedRecipes: req.body}}, {new: true}, function(err, user) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({message: "Successfully added recipe to saved recipes", user: user});
            }
        });
    },
    // deleteRecipe: function(req, res) {
    //     console.log(req.body);
    //     User.findOneAndUpdate({_id: req.params.id}, {$pull: {savedRecipes: req.body}}, function(err) {
    //         if (err) {
    //             res.json({message: "Error", error: err});
    //         }
    //         else {
    //             res.json({message: "Recipe deleted successfully"});
    //         }
    //     });
    // },
    register: function(req, res) {
        var user = new User(req.body);
        bcrypt.hash(user.pw, 10)
        .then(hashed_password => {
            // console.log(hashed_password);
            user.pw = hashed_password;
            user.save(function(err, user) {
                if (err) {
                    res.json(err);
                }
                else {
                    // store user id in session
                    res.json({success: "Successfully registered", user: user})
                }
            });
        })
        .catch(error => {
            console.log(error);
            res.json(error);
        });
    },
    login: function(req, res) {
        User.findOne({username: req.body.username}, function(err, user) {
            if (user == null) {
                res.json({error: "User could not be found"});
            }
            else {
                console.log("user:",user);
                bcrypt.compare(req.body.pw, user.pw, function(err, result) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        console.log(result);
                        if (!result) {
                            res.json({error: "Password incorrect"})
                        }
                        else {
                            res.json({success: "Successfully logged in", user: user});
                        }
                    }
                })
            }
        })
    }
}
