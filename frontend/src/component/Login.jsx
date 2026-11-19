import React from 'react'
import { loginUser } from '../services/userService.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const navigate = useNavigate();
    
        const handleSubmit = async(e) => {
            e.preventDefault();
    
            const data = {
                email : email,
                password : password,
            }
    
            const result = await loginUser(data);
    
            console.log(result);
    
            if(result){
                alert("login successfully");
                
                if(result.data.role == "admin"){
                    navigate("/admin");
                }
                else if(result.data.role == "doctor"){
                    navigate("/doctor");
                }
                else if(result.data.role == "patient"){
                    navigate("/patient");
                }
            }
            else{
                alert(result.message);
            }
    
            setEmail("");
            setPassword("");
        }
    

  return (
    <div className='container mt-4'>
            <h2 className='text'>Register</h2>

            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input type='text' value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input type='text' value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} required/>
                </div>

                <button className='btn btn-primary' type='submit'>Login</button>

                <a href='/register' className='btn btn-warning ms-2'>Rgister</a>

           </form>
        </div>
  )
}

export default Login