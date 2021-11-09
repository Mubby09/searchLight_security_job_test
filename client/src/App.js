import React, { useState, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const App = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [movieGenre, setMovieGenre] = useState("");

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/readMovie").then((response) => {
      setMovieList(response.data);
    });
  }, []);

  const addMovie = () => {
    Axios.post("http://localhost:5000/postMovie", {
      movieTitle: movieTitle,
      releaseDate: releaseDate,
      movieGenre: movieGenre
    });
  };

  const deleteMovie = (id) => {
    window.location.reload();
    Axios.delete(`http://localhost:5000/deleteMovie/${id}`);
  };

  return (
    <div>
      <div>
        <h2>SEARCHLIGHT SECURITY FULLSTACK DEVELOPER TEST</h2>
        <form>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={(e) => {
                setMovieTitle(e.target.value);
              }}
              type="text"
              id="outlined-basic"
              label="Movie Title"
              variant="outlined"
            />
            <TextField
              onChange={(e) => {
                setReleaseDate(e.target.value);
              }}
              type="number"
              id="filled-basic"
              label="Release Date"
              variant="outlined"
            />
            <TextField
              onChange={(e) => {
                setMovieGenre(e.target.value);
              }}
              type="text"
              id="standard-basic"
              label="Movie Genre"
              variant="outlined"
            />
            <Stack spacing={2} direction="row">
              <Button type="submit" onClick={addMovie} variant="contained">
                ADD MOVIE
              </Button>
            </Stack>
          </Box>
        </form>
      </div>
      <h2>Movie List</h2>
      {movieList.map((movie) => {
        return (
          <div key={movie.movieTitle} className="movie_grid">
            <Card sx={{ minWidth: 300, minHeight: 100 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} variant="body2" gutterBottom>
                  <b>MOVIE TITLE:</b>
                  <br /> {movie.movieTitle}
                </Typography>
                <Typography sx={{ fontSize: 14 }} variant="body2">
                  <b>MOVIE GENRE:</b>
                  <br /> {movie.movieGenre}
                </Typography>
                <Typography sx={{ fontSize: 14 }} variant="body2">
                  <b>RELEASE DATE:</b>
                  <br /> {movie.releaseDate}
                </Typography>
                <button
                  onClick={() => {
                    deleteMovie(movie._id);
                  }}
                >
                  DELETE
                </button>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default App;
