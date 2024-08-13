const mongoose = require("mongoose");
const { Schema } = mongoose;

const TestCategory = {
  RANGE: "RANGE",
  BOOLEAN: "BOOLEAN",
};

const testSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  unit: {
    type: String,
    required: true,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 0,
  },
  posibleValues: {
    type: [String],
    default: [],
  },
  normalValue: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  category: {
    type: String,
    enum: Object.values(TestCategory),
    default: TestCategory.RANGE,
    required: true,
  },
});

const Test = mongoose.model("Test", testSchema);

module.exports = {
  Test,
  TestCategory,
};
