import React, { useEffect, useState } from "react";
import Notes from "./Notes";

const Todo = () => {
  const [DataList, setDataList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
  });

  useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem("notes"));
    if(savedNotes && Array.isArray(savedNotes)){
        setDataList(savedNotes);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(DataList));
  },[DataList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.content) {
      setDataList([...DataList, formData]);
      setFormData({
        title: "",
        description: "",
        content: "",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className='container'>
        <h1 className='heading'>TODO APP</h1>
        <div className='main-container'>
          <form onSubmit={handleSubmit}>
            <div className='form'>
              <div className='form-element'>
                <label>Title</label>
                <input
                  name="title"
                  onChange={handleChange}
                  placeholder='Enter Title'
                  value={formData.title}
                  type='text'
                />
              </div>
              <div className='form-element'>
                <label>Description</label>
                <input
                  name="description"
                  onChange={handleChange}
                  placeholder='Description'
                  value={formData.description}
                  type='text'
                />
              </div>
              <div className='form-element'>
                <label>Content</label>
                <textarea
                  name="content"
                  onChange={handleChange}
                  placeholder='Enter the content'
                  value={formData.content}
                  cols='30'
                  rows='10'
                ></textarea>
              </div>
              <div className='form-element'>
                <button type='submit'>Submit</button>
              </div>
            </div>
          </form>
          <Notes data={DataList} />
        </div>
      </div>
    </>
  );
};

export default Todo;
