"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _project = require("../controllers/project.controller");

var router = (0, _express.Router)(); // /api/projects/

router.post('/', _project.createProject);
router.get('/', _project.getProjects); // /api/projects/:id

router.get('/:id', _project.getOneProjects);
router["delete"]('/:id', _project.deleteProjects);
router.put('/:id', _project.updateProjects);
var _default = router;
exports["default"] = _default;