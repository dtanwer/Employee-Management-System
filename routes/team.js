const express = require("express");
const {
  createTeam,
  updateTeam,
  deleteTeam,
  getTeam,
  getTeams,
  addTeamMember,
  removeTeamMember,
} = require("../controllers/team.js");
const router = express.Router();

router.route('/').get(getTeams).post(createTeam);
router.put("/add/:id", addTeamMember).put("/remove/:id", removeTeamMember);
router.get("/:id", getTeam).put("/:id", updateTeam).delete("/:id", deleteTeam);

module.exports = router;