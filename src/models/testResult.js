const mongoose = require("mongoose");
const { Schema } = mongoose;

const TestResultStatus = {
  CREATED: "CREATED",
  PENDING: "PENDING",
  READY: "READY",
  COMPLETED: "COMPLETED",
  CANCELED: "CANCELED",
};

const testResultSchema = new Schema(
  {
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctor_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    combo_name: {
      type: String,
    },
    results: [
      {
        test_id: {
          type: Schema.Types.ObjectId,
          ref: "Test",
          required: true,
        },
        value: {
          type: Number || String,
          required: true,
        },
        order: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
    status: {
      type: String,
      enum: Object.values(TestResultStatus),
      required: true,
      default: TestResultStatus.CREATED,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    }, // price can be different from the sum of the test prices
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const TestResult = mongoose.model("TestResult", testResultSchema);

module.exports = {
  TestResult,
};
