const { getOurPurpose, addOurPurpose, updateOurPurpose } = require("../controllers/ourPurposeController");

const router = require("express").Router();

router.get("/", getOurPurpose);
router.post("/add", addOurPurpose);
router.patch("/update/:id", updateOurPurpose);

module.exports = router;