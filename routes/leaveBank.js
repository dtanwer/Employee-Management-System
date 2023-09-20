const router= require("express").Router();
const { getLeaveBank, updateLeaveBank} = require("../controllers/leaveBank");
router.get("/:id", getLeaveBank).put("/:id", updateLeaveBank);