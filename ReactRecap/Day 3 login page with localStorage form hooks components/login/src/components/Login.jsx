import React, { useState ,useEffect} from 'react'

import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [formdata,setFormData]=useState({
        username:"",
        password:""
    })



    const [data,setData]=useState(null);


    useEffect(()=>{
        if(data){
            localStorage.setItem("user",JSON.stringify(data));
        }
    },[data]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formdata.username && formdata.password){
            setData(formdata);
            setFormData({
                username:'',
                password:''
            });
            navigate('/home');
        }        
    };
    const handleChange=(e)=>{
        setFormData({
            ...formdata,
            [e.target.name]:e.target.value,
        });
    };

  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter user name</label>
        <input
            type='text'
             name='username'
            onChange={handleChange}
            placeholder='Enter Username'
            value={formdata.username}
            >
        </input>
        <label>Enter Password</label>
        <input
            type='password'
            name='password'
            onChange={handleChange}
            placeholder='password'
            value={formdata.password}
            >
         </input>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Login
