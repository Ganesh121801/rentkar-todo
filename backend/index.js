const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Todo = require('./model/Todo');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;


const app = express();
app.use(cors({
    origin: ["https://deploy-mern-1whq.ve cel.app"],
    methods: ["POST", "GET"],
    credentials: true
}
));
app.use(express.json());

const connectDB = async () => {
    try {
      const db = await mongoose.connect("mongodb://127.0.0.1:27017/reg", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`mongodb connected ${db.connection.host}`);
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  };
  connectDB();
  
  const ItemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  });
  const Item = mongoose.model("Item", ItemSchema);

app.get('/', async (req, res) => {
    try {
        const data = await Todo.find()
        res.json(data);
    } catch (error) {
        console.log(error);
    }
})

app.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const up = await Todo.findByIdAndUpdate({ _id: id }, { complete: true })
        res.json(up)
    } catch (error) {
        console.log(error);
    }
})

app.post("/add", async (req, res) => {
    try {
        const { title, description } = req.body;
        const data = await Todo.create({
            title: title,
            description: description
        })
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})

app.delete('/delete/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const del = await Todo.findOneAndDelete({_id: id})
        res.json(del)
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})
