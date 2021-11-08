const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const Movie = require("../server/schemaFolder/Movies");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://Mubby09:Olamilekan1996@jobtestcluster.bcl3k.mongodb.net/jobtest?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.get("/", async (req, res) => {
  const movie = new Movie({
    movieTitle: "Gang",
    releaseDate: 1998,
    movieGenre: "horror"
  });
  try {
    await movie.save();
    res.send("update");
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log("server running");
});
