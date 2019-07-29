const mongoose = require("mongoose"),
    uniqueValidator = require("mongoose-unique-validator")
;

var IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Ingredient name is a required field"],
        minlength: [2, "Ingredient name must be at least 2 characters long"]
    },
    category: {
        type: String
    },
}, {timestamps: true});

mongoose.model("Ingredient", IngredientSchema);
var Ingredient = mongoose.model('Ingredient');

var SavedRecipeSchema = new mongoose.Schema({
    id: Number,
    image: String,
    instructions: Object,
    title: String,
    made: Boolean,
    rating: Number,
    notes: String
});
mongoose.model("SavedRecipe", SavedRecipeSchema);
var SavedRecipe = mongoose.model('SavedRecipe');

var UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'First name cannot be left empty!']
    },
    lname: {
        type: String,
        required: [true, 'Last name cannot be left empty!']
    },
    username: {
        type: String,
        required: [true, 'Username cannot be left empty!'],
        minlength: [6, "Username must be at least 6 characters"],
        unique: true
    },
    pw: {
        type: String,
        required: [true, 'Password cannot be left empty!'],
        minlength: [6, 'Password must be at least 6 characters']
    },
    ingredientList: [IngredientSchema],
    savedRecipes: [SavedRecipeSchema]
});

mongoose.model("User", UserSchema);
var User = mongoose.model('User');
UserSchema.plugin(uniqueValidator, {message: "Username is already taken. Please use another one."});


mongoose.Promise = global.Promise;
