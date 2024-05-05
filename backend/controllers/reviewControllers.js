const Review = require("../models/reviewModel");
const mongoose = require("mongoose");

// GET ALL
const getReviews = async (req, res) => {
  const reviews = await Review.find({}).sort({ createdAt: 1 });
  res.status(200).json(reviews);
};

//  GET SINGLE
const getReview = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such review." });
  }

  const review = await Review.findById(id);

  if (!review) {
    return res.status(404).json({ error: "No such review." });
  }
  res.status(200).json(review);
};

//  CREATE NEW
const createReview = async (req, res) => {
  const { title, body, author } = req.body;
  // add doc to db
  try {
    const review = await Review.create({ title, body, author });
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  DELETE SINGLE
const deleteReview = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such review." });
  }

  const review = await Review.findOneAndDelete({ _id: id });

  if (!review) {
    return res.status(400).json({ error: "No such review." });
  }
  res.status(200).json(review);
};

//  UPDATE SINGLE
const updateReview = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such review." });
  }
  const review = await Review.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!review) {
    return res.status(400).json({ error: "No such review." });
  }
  res.status(200).json(review);
};

module.exports = {
  createReview,
  getReviews,
  getReview,
  deleteReview,
  updateReview,
};
