const path = require("path");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("Bienvenido a la pagina principal!")
});

app.get("/index", (req, res) => {
    res.render("index")
});

// Registrar como publica la carpeta public
app.use(express.static("public"))
app.use("/prefijo", express.static("publica"))

app.listen(3000, () => console.log("Proyecto en el puerto 3000"))
