const express = require("express");
const app = express();
const menswear = require("./models/menswear");
const parser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(parser.json());

app.get("/", (req, res) => {
  menswear.find({}).then((menswear) => {
    res.json(menswear);
  });
});
app.get("/menswear", (req, res) => {
  menswear.find({}).then((menswear) => {
    res.json(menswear);
  });
});

app.post("/menswear", (req, res) => {
  console.log("you are submitting data to create a menswear", req.body);
  menswear.create(req.body).then((menswear) => {
    res.json(menswear);
  });
});
app.post("/menswear/:brand_name", (req, res) => {
  console.log("you are submitting data to create a brand_name", req.body);

  brand_name
    .findByIdAndUpdate(
      req.params.brand_name,
      { $push: { items: req.body } },
      { new: true }
    )
    .then((menswear) => {
      res.json(menswear);
    });
});
app.get("/menswear/:brand_name", (req, res) => {
  menswear
    .findOne({ brand_name: decodeURI(req.params.brand_name) })
    .then((menswear) => {
      res.json(menswear);
    });
});

app.put("/menswear/:brand_name", (req, res) => {
  menswear
    .findOneAndUpdate(
      { brand_name: decodeURI(req.params.brand_name) },
      req.body,
      { new: true }
    )
    .then((menswear) => {
      res.json(menswear);
    });
});
app.delete("/menswear/:brand_name", (req, res) => {
  menswear
    .findOneAndDelete({ brand_name: req.params.brand_name }, req.body)
    .then((menswear) => {
      res.json(menswear);
    });
});

app.set("port", process.env.PORT || 8080);

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });

// // app.listen(1717, () => {
// //   console.log("Listening on port 1717");
// // });
