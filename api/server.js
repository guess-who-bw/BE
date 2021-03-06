const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../user/users-router.js");
const tweetsRouter = require("../tweets/tweets-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/tweets", tweetsRouter);

server.get("/", (req, res) => {
    res.json("It's working!!")
})

module.exports = server;
