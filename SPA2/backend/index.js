// import dotenv from "dotenv";
// import express from "express";

// import documents from "./Routes/documents.js";
// import authenticate from "./Routes/authenticate.js";

const express = require('express');
const dotenv = require('dotenv');
const documents = require('./Routes/documents');
const authenticate = require('./Routes/authenticate');
(async function () {
  dotenv.config();

  const { PORT } = process.env;
  const app = express();
  const server = app.listen(PORT, () =>
    console.log(`Backend started on port ${PORT}`)
  );

  app.use("/documents", documents);
})();
