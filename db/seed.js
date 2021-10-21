const WomenFashion = require("../models/WomenFashion");
const WomenFashionData = require("../db/womenFashion.json")

console.log(WomenFashionData)
WomenFashion.deleteMany({}).then(()=> {
    WomenFashion.create(WomenFashionData).then(()=>{
        WomenFashion.find({})
        .then((res) => 
            console.log(res))
        })
        .catch((err)=>{
            console.log(err)
        })
})
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
