const router = require("express").Router();
const {
  createHoliday,
  getHolidays,
  getHoliday,
  updateHoliday,
  deleteHoliday,
} = require("../controllers/holidays");

router.post("/", createHoliday).get("/", getHolidays);
router.get("/:id", getHoliday).put("/:id", updateHoliday).delete("/:id", deleteHoliday);

