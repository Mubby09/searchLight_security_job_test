const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const Movie = require("../server/schemaFolder/Movies");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Mubby09:searchlight12345@jobtestcluster.bcl3k.mongodb.net/jobtest?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.post("/postMovie", async (req, res) => {
  const movieTitle = req.body.movieTitle;
  const releaseDate = req.body.releaseDate;
  const movieGenre = req.body.movieGenre;

  const movie = new Movie({
    movieTitle: movieTitle,
    releaseDate: releaseDate,
    movieGenre: movieGenre
  });
  try {
    await movie.save();
    res.send("update");
  } catch (err) {
    console.log(err);
  }
});

app.get("/readMovie", async (req, res) => {
  Movie.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.delete("/deleteMovie/:id", async (req, res) => {
  const id = req.params.id;

  await Movie.findByIdAndDelete(id).exec();
});

app.listen(PORT, () => {
  console.log("server running");
});
