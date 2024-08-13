const _ = require("lodash");

function catchAsync(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}

function wrapper(controller) {
  return _.mapValues(controller, (handler) => catchAsync(handler));
}

module.exports = wrapper;
