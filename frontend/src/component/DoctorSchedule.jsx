import React from 'react'
import { getschedule } from '../services/appService.js'
import { useState } from 'react'


const DoctorSchedule = () => {
    const[doctor, setDoctor] = useState("");
    const[date, setDate] = useState("");
    const[schedule, setSchedule] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const result = await getschedule(doctor,date);
        console.log(result);

        setSchedule(result.data);
    }

  return (
    <div className='container mt-4'>
        <h2>Add details</h2>

        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-label'>Doctor Id</label>
                <input type='text' className='forn-control' value={doctor} onChange={(e) => setDoctor(e.target.value)} />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Date</label>
                <input type='date' className='forn-control' value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <button type='submit' className='btn btn-primary'>Get data</button>
        </form>

        <h2 className='mt-4 md-2 text'>
            Details
        </h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {schedule.map((s) => (
                    <tr key={s._id}>
                        <td>{s.date}</td>
                        <td>{s.time}</td>
                        <td>{s.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DoctorSchedule