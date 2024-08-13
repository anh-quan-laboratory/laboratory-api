const _ = require("lodash");
const { User, UserRole } = require("../models/user");
const AppError = require("../utils/appError");
const wrapper = require("../utils/wrapper");
const sendResponse = require("../utils/sendResponse");

const userController = {
  getUserById: async (req, res) => {
    const user = await User.findById(req.params.id);

    sendResponse(res, { user }, 200);
  },

  getUsers: async (req, res) => {
    const { keyword, role } = req.query;
    const query = {};

    if (keyword) {
      query.$or = [{ name: { $regex: keyword, $options: "i" } }, { phone: { $regex: keyword, $options: "i" } }];
    }

    if (role && Object.values(UserRole).includes(role.toUpperCase())) {
      query.role = role.toUpperCase();
    }

    const users = await User.find(query);

    sendResponse(res, { users }, 200);
  },

  createUser: async (req, res) => {
    const user = await User.create(req.body);

    sendResponse(res, { user }, 201);
  },

  updateUserById: async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!user) {
      return sendResponse(res, { message: "User not found" }, 404);
    }

    sendResponse(res, { user }, 200);
  },
};

module.exports = wrapper(userController);
