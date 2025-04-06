// todoRoutes.js
const express = require('express');
const router = express.Router();
const { createTodo, getAllTodos,deleteTodo, updateTodo } = require('../controllers/todoController');

// define routes
router.post('/', createTodo);
router.get('/', getAllTodos);
router.delete('/:id', deleteTodo);
router.put('/:id', updateTodo);
// export the router correctly
module.exports = router;
