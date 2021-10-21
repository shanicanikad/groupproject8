const menswear = require("../models/menswear");
const menswearList = require("./menswear.json");
console.log(menswearList)

menswear.deleteMany({}).then(() => {
  // Mongoose Model creating data
  menswear.create(menswearList).then((output) => {
    console.log(output);
    process.exit();
  });
});