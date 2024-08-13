const mongoose = require("mongoose");
const { Schema } = mongoose;

const comboSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tests: [
    {
      type: Schema.Types.ObjectId,
      ref: "Test",
    },
  ],
});

const Combo = mongoose.model("Combo", comboSchema);

module.exports = { Combo };
