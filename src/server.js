const express = require("express");
const server = express();
server.use(express.json());

server.post("/register", (req, res) => {});

server.post("/login", (req, res) => {});

server.listen(5050);

exports.server = server;
