const Certificate = require("../models/certificateModel");

const certificateRequest = async (req, res) => {
  const { name, month, year, prn, user } = req.body;

  try {
    const certificate = await Certificate.create({
      name,
      month,
      year,
      prn,
      user,
    });

    if (certificate) {
      return res
        .status(200)
        .json({ message: "Thank you for filling out your information!" });
    }

    res.status(400).json({ error: "Could not able to process request!" });
  } catch (error) {
    res.status(400).json({ errro: error.message });
  }

  res.status(200).json({ message: "Request Processed" });
};

module.exports = { certificateRequest };
