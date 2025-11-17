const express = require("express")
const app = express()
const routeItems = require("./routes/items")

app.get("/", (req, res) => {
  res.send("hallo")
})

app.use("/items", routeItems)

app.listen(3000, () => console.log("server gestart op poort 3000"))