"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _projects = _interopRequireDefault(require("./routes/projects"));

var _actions = _interopRequireDefault(require("./routes/actions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // Midlewares   

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json()); // routes

app.use('/api/projects', _projects["default"]);
app.use('/api/actions', _actions["default"]);
var _default = app;
exports["default"] = _default;