const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200);
  const mahasiswa = [
    {
      nama: "Asep",
      email: "asep@gmail.com",
    },

    {
      nama: "Usro",
      email: "usro@gmail.com",
    },
  ];

  res.render("index", {
    nama: "Rihap Firdaus",
    title: "Halaman Index",
    mahasiswa: mahasiswa,
  });

  // res.sendFile('./index.html',{root: __dirname})
});

app.get("/about", (req, res) => {
  res.status(200);
  res.render("about");
  // res.sendFile('./about.html',{root: __dirname})
});

app.get("/contact", (req, res) => {
  res.status(200);
  res.render("contact");
  // res.sendFile('./contact.html',{root: __dirname})
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID: ${req.params.id} and Label Product: ${req.query.label}`
  );
});

app.get("/product/:id/category/:idCat", (req, res) => {
  res.send(`Product ID: ${req.params.id} and Category ID: ${req.params.idCat}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>Halaman tidak ditemukan!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});