const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieTitle: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Number,
    required: true
  },
  movieGenre: {
    type: String,
    required: true
  }
});

const Movie = mongoose.model("movies", movieSchema);
module.exports = Movie;
