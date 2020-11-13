const express = require("express");
const app = express();
const WomenFashion = require("./models/WomenFashion");
const parser = require("body-parser");
const cors = require("cors");

app.use(parser.json());
app.use(cors());

app.get("/", (req, res)=> {
    res.redirect("/WomenFashion")
})

app.get("/WomenFashion", (req, res) => {
    WomenFashion.find({}).then((WomenFashion)=> {
        res.json(WomenFashion);
    })
})

app.get("/WomenFashion/:brand_name", (req, res)=> {
    WomenFashion.findOne ({brand_name: decodeURI (req.params.brand_name) }).then(WomenFashion => {
        res.json(WomenFashion)
    })

})

app.post("/WomenFashion", (req, res)=> {
    WomenFashion.create(req.body).then(WomenFashion => {
        res.json(WomenFashion)
    })
})

app.put("/WomenFashion/brand_name/:brand_name", (req,res)=> {
    WomenFashion.findOneAndUpdate({brand_name: req.params.brand_name}, req.body)
    .then(WomenFashion=> {
      res.json(WomenFashion)
    })
})

app.delete("/WomenFashion/:brand_name", (req,res)=> {
    WomenFashion.findOneAndDelete({brand_name: req.params.brand_name}, req.body)
    .then(WomenFashion => {
      res.json(WomenFashion)
    })
})

app.delete("/WomenFashion/:id", (req,res)=> {
    WomenFashion.findByIdAndDelete({id: req.params.id}, req.body)
    .then(WomenFashion => {
      res.json(WomenFashion)
    })
})
app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});