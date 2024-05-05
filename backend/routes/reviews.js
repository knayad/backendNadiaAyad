const express = require("express");
const {
  createReview,
  getReviews,
  getReview,
  deleteReview,
  updateReview,
} = require("../controllers/reviewControllers");
const router = express.Router();

// GET ALL REVIEWS
// /api/reviews/ <-- includes last slash
router.get("/", getReviews);

// GET SINGLE REVIEW
// /api/reviews/:id
router.get("/:id", getReview);

// POST NEW REVIEW
// /api/reviews/
router.post("/", createReview);

// DELETE REVIEW
// /api/reviews/:id
router.delete("/:id", deleteReview);

// UPDATE REVIEW
// /api/reviews/:id
router.patch("/:id", updateReview);

module.exports = router;
