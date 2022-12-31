// step2
const express = require("express");

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب", year: 1992, rating: 6.2 },
];

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("ok");
});
// step3
app.get("/test", (req, res) => {
  res.status(200).send({ status: 200, message: "ok" });
});
app.get("/time", (req, res) => {
  let time = new Date();
  res
    .status(200)
    .send({ status: 200, message: `${time.getHours()}:${time.getMinutes()}}` });
});
// step4
app.get("/hello/:userID", (req, res) => {
  res.status(200).send({ status: 200, message: `Hello ${req.params.userID}` });
});
app.get("/search", (req, res) => {
  if (req.query.s) {
    res.status(200).send({ status: 200, message: "ok", data: req.query.s });
  } else {
    res.status(500).send({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
  }
});
// step5

app.get("/movies/add", (req, res) => {
  res.send("movie add");
});

app.get("/movies/get", (req, res) => {
  res.status(200).send({ status: 200, data: movies });
});

app.get("/movies/edit", (req, res) => {
  res.send("movie edit");
});

app.get("/movies/delete", (req, res) => {
  res.send("movie delete");
});

// step6
app.get("/movies/get/:text", (req, res) => {
  if (req.params.text === "by-date") {
    res
      .status(200)
      .send({ status: 200, data: movies.sort((a, b) => a.year - b.year) });
  } else if (req.params.text === "by-rating") {
    res
      .status(200)
      .send({ status: 200, data: movies.sort((a, b) => b.rating - a.rating) });
  } else if (req.params.text === "by-title") {
    res.status(200).send({
      status: 200,
      data: movies.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else if (b.title > a.title) {
          return -1;
        } else {
          return 0;
        }
      }),
    });
  }
});
// step7
app.get("/movies/get/id/:ID", (req, res) => {
  if (req.params.ID >= 0 && req.params.ID < movies.length) {
    res.status(200).send({ status: 200, data: movies[req.params.ID] });
  } else {
    res.status(404).send({
      status: 404,
      error: true,
      message: `the movie ${req.params.ID} does not exist`,
    });
  }
});
// step 8
app.post("/movies/add/title/:title/&year/:year/&rating/:rating", (req, res) => {
  if (
    req.params.title != " " &&
    req.params.year >= 1000 &&
    req.params.rating != 0 &&
    req.params.rating > 0
  ) {
    if (req.params.rating == " ") {
      req.params.rating = 4;
      movies.push(req.params);
      res.send(movies);
    } else {
      movies.push(req.params);
      res.send(movies);
    }
  } else {
    res.status(403).send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year",
    });
  }
});
// step 9
app.delete("/movies/delete/id/:ID", (req, res) => {
  if (req.params.ID >= 0 && req.params.ID < movies.length) {
    movies.splice(req.params.ID, 1);
    res.send(movies);
  } else {
    res.status(404).send({
      status: 404,
      error: true,
      message: `The movie ${req.params.ID} does not exist`,
    });
  }
});
// step 10
app.put("/movies/edit/id/:id/title/:title", (req, res) => {
  if (req.params.id >= 0 && req.params.id < movies.length) {
    movies[req.params.id].title = req.params.title;
    res.send(movies);
  }
});

app.put("/movies/edit/id/:id/title/:title/rating/:rating", (req, res) => {
  if (req.params.id >= 0 && req.params.id < movies.length) {
    movies[req.params.id].title = req.params.title;
    movies[req.params.id].rating = req.params.rating;
    res.send(movies);
  }
});

app.put(
  "/movies/edit/id/:id/title/:title/rating/:rating/year/:year",
  (req, res) => {
    if (req.params.id >= 0 && req.params.id < movies.length) {
      movies[req.params.id].title = req.params.title;
      movies[req.params.id].rating = req.params.rating;
      movies[req.params.id].year = req.params.year;
      res.send(movies);
    }
  }
);
app.get('/movies/edit/id/:id/')

app.listen(PORT, () => console.log(`server in now listening on port ${PORT}`));
