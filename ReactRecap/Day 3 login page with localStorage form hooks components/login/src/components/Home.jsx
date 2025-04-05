import React, { useEffect, useState } from 'react'

const Home = () => {

   const [userData,setUserData]=useState(null);
   const [isUser,setIsUser]=useState(null);
   const [msg,setMsg]=useState('');
  
   const actualUser = {
    username: 'tan@moy',
    password: '1234',
  };
    useEffect(()=>{
        const savedUser=JSON.parse(localStorage.getItem("user"));
        if(savedUser){
            if(savedUser.username=== actualUser.username && savedUser.password===actualUser.password){
                setUserData(savedUser);
                setMsg("Login Successful")
                setIsUser(true);            
            }else{
                setIsUser(false);
                setMsg('Credentials do not match')
            }
        }else{
            setMsg('No user data found');
        }
        
    },[]);
  return (
    <div className='show-data'>
        {isUser ?(
            <div>
          <h2>Welcome, {userData.username}</h2>
          <p>Password: {userData.password}</p>
        </div>                            

            ):(
                <p>{msg}</p>
            )
        }             
    </div>
  )
}

export default Home
