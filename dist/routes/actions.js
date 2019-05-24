"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _action = require("../controllers/action.controller");

var router = (0, _express.Router)(); // /api/actions/

router.post('/', _action.createAction);
router.get('/', _action.getAction); // /api/actions/:id

router.get('/:id', _action.getOneAction);
router["delete"]('/:id', _action.deleteAction);
router.put('/:id', _action.updateAction); // /api/actions/project/:projectId

router.get('/project/:projectid', _action.getActionByProject);
var _default = router;
exports["default"] = _default;