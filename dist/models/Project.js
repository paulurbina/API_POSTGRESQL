"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Action = _interopRequireDefault(require("./Action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// IMPORT TABLE ACTION ---- 
var Project = _database.sequelize.define('projects', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  priority: {
    type: _sequelize["default"].TEXT
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  deliverydate: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

Project.hasMany(_Action["default"], {
  foreingKey: 'projectid',
  sourceKey: 'id'
});

_Action["default"].belongsTo(Project, {
  foreingKey: 'projectid',
  sourceKey: 'id'
});

var _default = Project;
exports["default"] = _default;