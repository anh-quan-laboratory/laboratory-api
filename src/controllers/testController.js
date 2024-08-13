const { Test, TestCategory } = require("../models/test");
const wrapper = require("../utils/wrapper");
const sendResponse = require("../utils/sendResponse");

const testController = {
  createTest: async (req, res) => {
    const test = await Test.create(req.body);
    sendResponse(res, { test }, 201);
  },

  getTestById: async (req, res) => {
    const test = await Test.findById(req.params.id);
    if (!test) {
      return sendResponse(res, { message: "Test not found" }, 404);
    }
    sendResponse(res, { test }, 200);
  },

  getTests: async (req, res) => {
    const tests = await Test.find();
    sendResponse(res, { tests }, 200);
  },

  updateTestById: async (req, res) => {
    const test = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!test) {
      return sendResponse(res, { message: "Test not found" }, 404);
    }
    sendResponse(res, { test }, 200);
  },

  deleteTestById: async (req, res) => {
    const test = await Test.findByIdAndDelete(req.params.id);
    if (!test) {
      return sendResponse(res, { message: "Test not found" }, 404);
    }
    sendResponse(res, { message: "Test deleted successfully" }, 200);
  },
};

module.exports = wrapper(testController);
