
const express = require("express");
const mongoose = require('mongoose');

const app = express();

const blogRoutes = require("./routes/blog");
const newsRoutes = require("./routes/news");
const userRoutes = require("./routes/user");

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://doppelyouz:daneka18@cluster0.tt7avdq.mongodb.net/RitmStyle?retryWrites=true&w=majority', () => {
  console.log('mongo connected');
}, (err) => {
  console.log(err);
})
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(`/blog`, blogRoutes);
app.use(`/news`, newsRoutes);
app.use(`/user`, userRoutes);

app.listen(8080, () => {
    console.log("Server is on 8080");
});
  