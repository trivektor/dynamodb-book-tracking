"use strict";
exports.__esModule = true;
var express_1 = require("express");
var PORT = 5000;
var app = express_1["default"]();
app.listen(PORT, function () {
    console.log("App is running on port " + PORT);
});
