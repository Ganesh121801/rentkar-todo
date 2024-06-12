const mongoose = require('mongoose');
const Todo = require('./model/Todo');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const todos = await Todo.find();
        res.status(200).json(todos);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;
    case 'PUT':
      try {
        const { id } = req.query;
        const updatedTodo = await Todo.findByIdAndUpdate(id, { complete: true });
        res.status(200).json(updatedTodo);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;
    case 'POST':
      try {
        const { title, description } = body;
        const newTodo = await Todo.create({ title, description });
        res.status(201).json(newTodo);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        await Todo.findByIdAndDelete(id);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
