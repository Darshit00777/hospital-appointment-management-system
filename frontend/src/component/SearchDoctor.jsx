import React from 'react'
import { useState } from 'react'
import { searchdoctor } from '../services/userService.js';

const SearchDoctor = () => {

    const[name, setName] = useState("");
    const[doctors, setDoctors] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const result = await searchdoctor(name);

        setDoctors(result.data);
    };

    return (
        <div className='container mt-4'>
            <h2>Search Doctor</h2>

            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label>Doctor Name</label>
                    <input
                        type='text'
                        className='form-control'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <button className='btn btn-primary'>
                    Search
                </button>
            </form>

            <hr />

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
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

export default SearchDoctor;