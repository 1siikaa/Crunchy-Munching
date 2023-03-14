global.foodData = require('./db')(function call(err, data, CatData) {

  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})

const express = require('express')
const app = express()
const port = 5000

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())



app.use('/', require('./Routes/route'));

app.listen(port, () => {
  console.log(`food-delivery app listening on http://localhost:${port}`)
})

