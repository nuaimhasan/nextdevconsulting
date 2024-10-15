const express = require("express");
const {
  add,
  get,
  update,
} = require("../controllers/peopleSectionController");

const router = express.Router();

router.get("/", get);

router.post("/add", add);

router.patch("/update/:id", update);

module.exports = router;
