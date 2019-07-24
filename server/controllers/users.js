const mongoose = require('mongoose'),
      User = mongoose.model('User')
;

module.exports = {
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
                    res.json({success: "Successfully registered"})
                }
            });
        })
        .catch(error => {
            console.log(error);
            res.json(error);
        });
    },
    login: function(req, res) {
        User.findOne({email: req.body.loginEmail}, function(err, user) {
            if (user == null) {
                res.json({error: "Email could not be found"});
            }
            else {
                console.log("user:",user);
                bcrypt.compare(req.body.loginPassword, user.password, function(err, result) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        console.log(result);
                        if (!result) {
                            res.json({error: "Password incorrect"})
                        }
                        else {
                            res.json({success: "Successfully logged in"});
                        }
                    }
                })
            }
        })
    }
}
