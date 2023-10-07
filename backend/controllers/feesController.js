const Contact = require("../models/feesModel");

const Fees = async (req, res) => {
  const { examNo, examPrn, fees, user } = req.body;

  try {
    const contact = await Contact.create({ examNo, examPrn, fees, user });

    if (contact) {
      return res.status(200).json({ message: "Thank you!" });
    }

    res.status(400).json({ error: "Could not able to do Payment!" });
  } catch (error) {
    res.status(400).json({ errro: error.message });
  }

  res.status(200).json({ message: "Contact Us!" });
};

module.exports = { Fees };
