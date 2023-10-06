const Score = require("../models/scoreModel");
const User = require("../models/userModel");

const getScoreByCategory = async (req, res) => {
  const { category } = req.params;

  const scores = await Score.findOne({ category: category });

  if (scores.attende.length > 0) {
    // const sortByTime = scores.attende.sort(
    //   (a, b) => a.submittedAt - b.submittedAt
    // );

    // console.log(scores.attende);

    const tempScores = [];
    scores.attende.map((atten) => {
      tempScores.push({
        id: atten.id,
        name: atten.name,
        score: atten.score,
        year: atten.year,
        time: atten.submittedAt - atten.startedAt,
        email: atten.email,
      });
    });

    // console.log(tempScores);

    const sortByTime = tempScores.sort((a, b) => a.time - b.time);

    const sortedByScore = sortByTime.sort((a, b) => b.score - a.score);

    return res.status(200).json(sortedByScore);
  }
  res.status(400).json({ error: "Could not find score!" });
};

// Add score
const addScoreByCategory = async (req, res) => {
  const { category } = req.params;
  const { id, name, score, startedAt, submittedAt, year, email } = req.body;

  const addScore = await Score.updateOne(
    { category: category },
    {
      $push: {
        attende: {
          id,
          name,
          score,
          submittedAt,
          startedAt,
          year,
          email,
        },
      },
    }
  );

  if (addScore) {
    return res.status(200).json({
      message: `added`,
    });
  }

  res.status(400).json({ error: "error occured" });
};

const checkExamAlreadyGive = async (req, res) => {
  const { category } = req.query;
  const { id } = req.params;

  const containCategory = await User.findOne({ _id: id });

  if (containCategory) {
    const user = await Score.findOne({ category: category }).select({
      attende: { $elemMatch: { id: id } },
    });

    if (user?.attende?.length <= 0) {
      return res.status(200).json({ message: "You can give exam" });
    }
  }
};

// check exam is live or not
const checkLive = async (req, res) => {
  const { category } = req.params;

  const check = await Score.findOne({ category: category, live: true });

  if (check) {
    return res.status(200).json({ message: "Quiz is live now!" });
  }

  res.status(400).json({
    error: "Quiz is not live yet!",
    p: "Please wait till quizzes goes live!",
  });
};

// Get password
const getPassword = async (req, res) => {
  const { category } = req.params;

  const password = await Score.findOne({ category: category }).select(
    "password"
  );

  if (password) {
    return res.status(200).json(password.password);
  }

  res.status(400).json({ error: "Could not find password" });
};

// add new category
const addCategory = async (req, res) => {
  const { category, live, password, attende } = req.body;

  const newCategory = await Score.create({
    category,
    live,
    password,
    attende,
  });

  if (newCategory) {
    return res.status(200).json({ message: "Category added!" });
  }

  res.status(400).send({ message: "Could not add category" });
};

module.exports = {
  getScoreByCategory,
  addScoreByCategory,
  checkExamAlreadyGive,
  checkLive,
  getPassword,
  addCategory,
};
