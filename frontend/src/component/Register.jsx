import React from 'react'
import { createUser } from '../services/userService.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[role, setRole] = useState("");
    const[specialization, setSpecialization] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            name : name,
            email : email,
            password : password,
            role : role,
            specialization : specialization
        }

        const result = await createUser(data);

        console.log(result);

        if(result){
            alert("register successfully");
            navigate('/');
        }
        else{
            alert("register fail");
        }

        setName("");
        setEmail("");
        setPassword("");
        setRole("");
        setSpecialization("");
    }

  return (
    <div>
        <div className='container mt-4'>
            <h2 className='text'>Register</h2>

            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input type='text' value={name} className='form-control' onChange={(e) => setName(e.target.value)} required/>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input type='email' value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input type='password' value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} required/>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Role</label>
                    <select value={role} className='form-control' onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="doctor">Doctor</option>
                        <option value="patient">Patient</option>
                    </select>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Specialization</label>
                    <input type='text' value={specialization} className='form-control' onChange={(e) => setSpecialization(e.target.value)} required/>
                </div>

                <button className='btn btn-primary' type='submit'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register