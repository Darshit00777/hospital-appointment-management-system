import React from 'react'
import { getdoctors } from '../services/userService.js'
import { useState } from 'react'
import { useEffect } from 'react';

const DoctorList = () => {
    const[doctors, setDoctors] = useState([]);

    const loaddata = async() => {
        const result = await getdoctors();
        setDoctors(result.data);
        console.log(result);
    }

    useEffect(() => {
        loaddata()
    }, []);

  return (
    <div className='container mt-4'>
        <h2 className='text'>Detaile</h2>

        <table className='table table-bordered'>
            <thead>
                <tr>
                <th>Doctor Name</th>
                <th>Email</th>
                <th>Specialization</th>
            </tr>
            </thead>
            <tbody>
                {doctors.map((d) => (
                    <tr key={d._id}>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.specialization}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DoctorList