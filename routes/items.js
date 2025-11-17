const express = require("express")
const crlitems = require("../controller/items")

const routes = express.Router()

routes.get("/items", crlitems.login)

module.exports = routes