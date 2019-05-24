"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAction = createAction;
exports.getAction = getAction;
exports.getOneAction = getOneAction;
exports.deleteAction = deleteAction;
exports.updateAction = updateAction;
exports.getActionByProject = getActionByProject;

var _Action = _interopRequireDefault(require("../models/Action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createAction(_x, _x2) {
  return _createAction.apply(this, arguments);
}

function _createAction() {
  _createAction = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, done, projectid, newAction;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectid = _req$body.projectid;
            _context.prev = 1;

            if (!req.body) {
              _context.next = 7;
              break;
            }

            _context.next = 5;
            return _Action["default"].create({
              name: name,
              done: done,
              projectid: projectid
            }, {
              fields: ['name', 'done', 'projectid']
            });

          case 5:
            newAction = _context.sent;

            if (newAction) {
              res.status(200).json({
                message: 'action has been created',
                data: newAction
              });
            }

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              message: 'the action can not be created',
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _createAction.apply(this, arguments);
}

function getAction(_x3, _x4) {
  return _getAction.apply(this, arguments);
}

function _getAction() {
  _getAction = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var action;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Action["default"].findAll({
              attributes: ['id', 'name', 'done', 'projectid'],
              order: [['id', 'ASC']]
            });

          case 3:
            action = _context2.sent;

            if (action) {
              res.json({
                message: 'all actions sent successfully',
                data: action
              });
            }

            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'error when sending the actions',
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getAction.apply(this, arguments);
}

function getOneAction(_x5, _x6) {
  return _getOneAction.apply(this, arguments);
}

function _getOneAction() {
  _getOneAction = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, action;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;

            if (!id) {
              _context3.next = 7;
              break;
            }

            _context3.next = 5;
            return _Action["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'name', 'done', 'projectid']
            });

          case 5:
            action = _context3.sent;
            res.status(200).json({
              message: 'data sent successfully',
              data: action
            });

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'Error send data',
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _getOneAction.apply(this, arguments);
}

function deleteAction(_x7, _x8) {
  return _deleteAction.apply(this, arguments);
}

function _deleteAction() {
  _deleteAction = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;

            if (!id) {
              _context4.next = 6;
              break;
            }

            _context4.next = 5;
            return _Action["default"].destroy({
              where: {
                id: id
              }
            });

          case 5:
            res.status(200).json({
              message: 'the action was eliminated'
            });

          case 6:
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'the action was not eliminated'
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _deleteAction.apply(this, arguments);
}

function updateAction(_x9, _x10) {
  return _updateAction.apply(this, arguments);
}

function _updateAction() {
  _updateAction = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, name, done, projectid, action, _updateAction2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, done = _req$body2.done, projectid = _req$body2.projectid;
            _context5.prev = 2;

            if (!(id && req.body)) {
              _context5.next = 11;
              break;
            }

            _context5.next = 6;
            return _Action["default"].findOne({
              attributes: ['id', 'name', 'done', 'projectid'],
              where: {
                id: id
              }
            });

          case 6:
            action = _context5.sent;
            _context5.next = 9;
            return _Action["default"].update({
              name: name,
              done: done,
              projectid: projectid
            }, {
              where: {
                id: id
              }
            });

          case 9:
            _updateAction2 = _context5.sent;
            res.status(200).json({
              message: 'the action was successfully updated',
              data: _updateAction2
            });

          case 11:
            _context5.next = 17;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(500).json({
              message: 'the action was successfully updated',
              data: {}
            });

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 13]]);
  }));
  return _updateAction.apply(this, arguments);
}

;

function getActionByProject(_x11, _x12) {
  return _getActionByProject.apply(this, arguments);
}

function _getActionByProject() {
  _getActionByProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var projectid, action;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            projectid = req.params.projectid;
            _context6.prev = 1;

            if (!projectid) {
              _context6.next = 7;
              break;
            }

            _context6.next = 5;
            return _Action["default"].findAll({
              attributes: ['id', 'name', 'done', 'projectid'],
              where: {
                projectid: projectid
              }
            });

          case 5:
            action = _context6.sent;
            res.status(200).json({
              message: 'this is the actions per project',
              data: action
            });

          case 7:
            _context6.next = 13;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(500).json({
              message: 'no actions were found by projects',
              data: {}
            });

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 9]]);
  }));
  return _getActionByProject.apply(this, arguments);
}

;