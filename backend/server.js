const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const Transaction = require('./TransactionSchema');
const port = 5000

// Middleware for parsing JSON data in requests
app.use(cors())
app.use(express.json())

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ExpenseTracker');
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log("Failed to connect to MongoDB", e);
  }
};



// Call the database connection function
connectDB();

async function getdata() {
  let data=await Transaction.find()
  return data
}



app.get('/data', async (req, res) => {

  let data =await  getdata()
  // console.log('====================================================================================================');
  
  // console.log(data[0]);
  
  // console.log('====================================================================================================');
  
  res.json(data)
})

app.get('/get', (req, res) => {
  res.send('jaa re bhik mangya2')
})

app.post('/trans', async (req, res) => {

  console.log(req.body)
  res.send("Recieved Done!!!")
  try {
    // const date = req.body
;
    // Create a new transaction
    const trans = await Transaction.create(req.body);
    console.log(trans);
  } catch (err) {
    console.error(err);
    res.send('Error creating transaction');
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// mongoose.Query("")