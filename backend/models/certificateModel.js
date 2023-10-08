const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const certificateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    prn: {
      type: String,
      required: true,
    },
    recieved: {
      type: Boolean,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Certificate", certificateSchema);
