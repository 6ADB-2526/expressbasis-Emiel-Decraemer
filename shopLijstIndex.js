const express = require("express")
const app = express()
const routeItems = require("./routes/items")

const items = [
  { id: 1, naam: "appel", omschrijving: "Lekker appels" },
  { id: 2, naam: "chips", omschrijving: "krokante chips" },
  { id: 1, naam: "klaaskoeken", omschrijving: "klaaskoeken verpakt per 2" },
  { id: 1, naam: "water", omschrijving: "Vers bronwater per 6 verpakt" },
];

app.get("/", (req, res) => {
  res.send("hallo")
})

app.use("/items", routeItems)

app.listen(3000, () => console.log("server gestart op poort 3000"))