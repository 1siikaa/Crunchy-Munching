const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://1siikaa07:1siikaa07@cluster0.49vegdt.mongodb.net/food-delivery?retryWrites=true&w=majority"

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        
        if (err) console.log("---" + err)
        else {
       
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
            
                const categoryCollection = await mongoose.connection.db.collection("foodCategories");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
            
        }
    })
};
