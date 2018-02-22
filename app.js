'use strict';
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const catch404 = require("./core/catch404");
const errorsRender = require("./core/errorsRender");
const RouteManager = require("./core/Util/RouteManager");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

RouteManager(app);
catch404(app);
errorsRender(app);

module.exports = app;