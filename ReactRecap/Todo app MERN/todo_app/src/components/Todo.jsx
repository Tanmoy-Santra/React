import React, { useState } from 'react'

const Todo = () => {
    const [data,setData]=useState([]);
    const [formData,setFormdata]=useState({
        title:'',
        description:''
    });

    const handleChange=(e)=>{       
        setFormdata({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formData.title && formData.description){        
        setData(data);
        setFormdata({
            title:'',
            description:''
        });
    }

    }
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-fit max-w-md border-2 border-blue-400 rounded-xl shadow-md p-6 bg-white">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Todo App</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Title</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Enter title"
              value={formData.title}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Description</label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              placeholder="Enter description"
              value={formData.description}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>        
      </div>
    </div>
  )
}

export default Todo
