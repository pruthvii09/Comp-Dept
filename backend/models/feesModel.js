const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feesSchema = new Schema(
  {
    examNo: {
      type: String,
      required: true,
    },
    examPrn: {
      type: String,
      required: true,
    },
    fees: {
      type: String,
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

module.exports = mongoose.model("Fees", feesSchema);
