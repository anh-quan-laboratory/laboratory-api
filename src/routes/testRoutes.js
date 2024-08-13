const express = require("express");
const testController = require("../controllers/testController");

const router = express.Router();

// Create a new test
router.post("/", testController.createTest);

// Get a test by ID
router.get("/:id", testController.getTestById);

// Get all tests
router.get("/", testController.getTests);

// Update a test by ID
router.patch("/:id", testController.updateTestById);

// Delete a test by ID
router.delete("/:id", testController.deleteTestById);

module.exports = router;
