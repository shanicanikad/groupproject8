const express = require("express");
const app = express();
const WomenFashion = require("./models/WomenFashion");
const menswear = require("./models/menswear");
const parser = require("body-parser");
const cors = require("cors");

app.use(parser.json());
app.use(cors());

// app.get("/", (req, res)=> {
//     res.redirect("/WomenFashion")
// })

app.get("/WomenFashion", (req, res) => {
  WomenFashion.find({}).then((WomenFashion) => {
    res.json(WomenFashion);
  });
});

app.get("/WomenFashion/:brand_name", (req, res) => {
  WomenFashion.findOne({ brand_name: decodeURI(req.params.brand_name) }).then(
    (WomenFashion) => {
      res.json(WomenFashion);
    }
  );
});

app.post("/WomenFashion", (req, res) => {
  WomenFashion.create(req.body).then((WomenFashion) => {
    res.json(WomenFashion);
  });
});

app.put("/WomenFashion/brand_name/:brand_name", (req, res) => {
  WomenFashion.findOneAndUpdate(
    { brand_name: req.params.brand_name },
    req.body
  ).then((WomenFashion) => {
    res.json(WomenFashion);
  });
});

app.delete("/WomenFashion/:brand_name", (req, res) => {
  WomenFashion.findOneAndDelete(
    { brand_name: req.params.brand_name },
    req.body
  ).then((WomenFashion) => {
    res.json(WomenFashion);
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
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
// app.delete("/WomenFashion/:id", (req, res) => {
//   WomenFashion.findByIdAndDelete({ id: req.params.id }, req.body).then(
//     (WomenFashion) => {
//       res.json(WomenFashion);
//     }
//   );
// });
