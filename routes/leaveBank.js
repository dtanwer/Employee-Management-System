const router= require("express").Router();
const { getLeaveBank, updateLeaveBank,getLeaveBanks} = require("../controllers/leaveBank");
router.get("/", getLeaveBanks)
router.get("/:id", getLeaveBank).put("/:id", updateLeaveBank);

module.exports = router;