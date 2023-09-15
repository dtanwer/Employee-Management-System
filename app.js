const express = require("express");
const announcementRouter = require("./routes/announcement");
const authRouter = require("./routes/auth");
const feedbackRouter = require("./routes/feedback");
const issueRouter = require("./routes/issue");
const leaveRouter = require("./routes/leave");
const projectIdeasRouter = require("./routes/projectIdea");
const userRouter = require("./routes/user");
const teamRouter = require("./routes/team");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/announcement", announcementRouter);
app.use("/feedback", feedbackRouter);
app.use("/issue", issueRouter);
app.use("/leave", leaveRouter);
app.use("/team", teamRouter);
app.use("/projectIdea", projectIdeasRouter);

module.exports = app;
