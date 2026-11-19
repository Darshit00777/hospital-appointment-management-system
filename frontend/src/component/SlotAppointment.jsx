import React, { useState } from 'react'
import { getSlot } from '../services/appService.js'
import { useNavigate } from 'react-router-dom';

const BookAppointment = () => {
    const[doctor, setDoctor] = useState("");
    const[date, setDate] = useState("");
    const[slot, setSlot] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const result = await getSlot(doctor, date);

        console.log(result);

        setSlot(result.data);

        console.log("Doctor:", doctor);
console.log("Date:", date);
    }

    const navigate = useNavigate();

  return (
    <div className='container mt-4'>
        <h2 className='text'>Add details</h2>

        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-label'>Doctor Id</label>
                <input type='text' className='form-control' value={doctor} onChange={(e) => setDoctor(e.target.value)} />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Date</label>
                <input type='date' className='form-control' value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <button type='submit' className='btn btn-primary'>Search</button>
        </form>

        <h2 className='mt-4'>Deatils</h2>

        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {slot.map((s) => (
                    <tr key={s._id}>
                        <td>{s.date}</td>
                        <td>{s.time}</td>
                        <td>{s.status}</td>
                        <td>
                            <button className='btn btn-primary' onClick={() => navigate(`/book/${s._id}`)}>Book</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default BookAppointment