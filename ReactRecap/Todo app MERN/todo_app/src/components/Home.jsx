import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { FaTrash,FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { FiSearch } from "react-icons/fi";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [updateFormData, setUpdateFormData] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then((res) => {
        setTodos(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos((prev) => prev.filter((item) => item._id !== id));
      toast.success('Todo removed!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete todo');
    }
  }

  const handleUpdate = (id) => {
    const selectedTodo = todos.find(todo => todo._id === id);
    if (selectedTodo) {
      setUpdateId(id);
      setUpdateFormData({
        title: selectedTodo.title,
        description: selectedTodo.description
      });
      setShowPopup(true);
    }
  };

  const handlePopupChange = (e) => {
    setUpdateFormData({
      ...updateFormData,
      [e.target.name]: e.target.value
    });
  };

  const submitUpdatedTodo = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/api/todos/${updateId}`, updateFormData);
      const updated = todos.map(todo => todo._id === updateId ? res.data : todo);
      setTodos(updated);
      setShowPopup(false);
      setUpdateFormData({ title: '', description: '' });
      setUpdateId(null);
      toast.success('Todo updated!');
    } catch (err) {
      console.error("Error updating todo:", err);
      toast.error('Failed to update todo');
    }
  };

  // ✅ Filtered Todos List Based on Search Term
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">📋 Your Todo List</h2>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search todos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg" />
        </div>
      </div>

      {/* ✅ Show Filtered Todos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTodos.length > 0 ? filteredTodos.map((todo) => (
          <div key={todo._id} className="bg-white shadow-lg rounded-2xl p-4 border border-blue-200 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{todo.title}</h3>
            <p className="text-gray-700">{todo.description}</p>
            <p className="text-sm text-gray-400 mt-2">Created at: {new Date(todo.createdAt).toLocaleString()}</p>
            <div className="flex gap-2 mt-3">
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg transition duration-200 flex items-center justify-center"
                onClick={() => handleRemove(todo._id)}
              >
                <FaTrash size={16} />
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg transition duration-200 flex items-center justify-center"
                onClick={() => handleUpdate(todo._id)}
              >
                <FaEdit size={16} />
              </button>
            </div>
          </div>
        )) : (
          <p className="text-center text-gray-500 col-span-full">No todos found 💤</p>
        )}
      </div>

      {/* ✏️ Popup for Editing */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Update Todo</h2>
            <form onSubmit={submitUpdatedTodo} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={updateFormData.title}
                  onChange={handlePopupChange}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Description</label>
                <input
                  type="text"
                  name="description"
                  value={updateFormData.description}
                  onChange={handlePopupChange}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
