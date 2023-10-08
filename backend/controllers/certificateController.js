const Certificate = require("../models/certificateModel");

const certificateRequest = async (req, res) => {
  const { name, month, year, prn, user, recieved } = req.body;

  try {
    const certificate = await Certificate.create({
      name,
      month,
      year,
      prn,
      recieved,
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
const getAllCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.find();
    if (certificate.length === 0) {
      return res.status(400).json({ message: "No Certificates Found" });
    }
    res.status(200).json({ certificate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Error" });
  }
};
const updateCertificate = async (req, res) => {
  const { id } = req.params;
  const { recieved } = req.body;
  try {
    const updatedCertificate = await Certificate.findByIdAndUpdate(
      id,
      { recieved },
      { new: true } // Return the updated certificate
    );
    if (!updatedCertificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    res.status(200).json({ updatedCertificate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { certificateRequest, getAllCertificate, updateCertificate };
