const express = require("express")
const app = express()

const port = 3000
const path = require("path")

app.use(express.static(path.join(__dirname, "public")))



app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.get("/profile/:username", (req, res) => {
  const { username } = req.params
  const profileData = require("./data.json")

  const data = profileData.accounts.find(
    acc => acc.username.toLowerCase() === username.toLowerCase()
  )

  if (data) {
    res.render("profile.ejs", { data })
  } else {
    res.send("No such account")
  }
})


app.listen(port, () => {
    console.log("listening on port", port)
})