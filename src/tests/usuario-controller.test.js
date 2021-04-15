const express = require('express');
const app = express();
const request = require("supertest");
const bd = require("../infra/database.db");
const usuarioController = require("../controllers/usuario-controller");

usuarioController(app, bd)


request()
    .get()