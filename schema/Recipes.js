const mongoose = require('mongoose')

const RecipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  instructions: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

let RecipesModel = mongoose.model('Recipes', RecipeSchema); 
 
module.exports = {RecipesModel}