import express from "express";
import favicon from "serve-favicon";
import path from "path";

const app = express();

app.set('view engine', "pug");
app.set("views", __dirname + "/views");
app.use(favicon(path.join(__dirname, 'views', 'img', 'common', 'favicon.ico')));
app.use("/public", express.static(__dirname + "/public"))
app.use("/views", express.static(__dirname + "/views"))
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"))

const handleListen = () => console.log('Listening on http://localhost:3000');
app.listen(3000, handleListen);