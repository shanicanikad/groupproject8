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

