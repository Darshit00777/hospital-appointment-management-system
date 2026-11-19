import React from 'react'
import { createSlot } from '../services/appService.js'
import { useState } from 'react'

const AddSlot = () => {
    const[doctor, setDoctor] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            doctor : doctor,
            date : date,
            time : time
        };

        const result = await createSlot(data);

        console.log(result);

        if(result){
            alert("added slot");
        }
        else{
            alert(result.message);
        }

        setDoctor("");
        setTime("");
        setDate("");
    }
  return (
    <div className='container mt-4'>
        <h2 className='text'>Add Slots</h2>
        
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-label'>Doctor Id</label>
                <input type='text' className='form-control' value={doctor} onChange={(e) => setDoctor(e.target.value)} />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Date</label>
                <input type='date' className='form-control' value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Time</label>
                <input type='time' className='form-control' value={time} onChange={(e) => setTime(e.target.value)} />
            </div>

            <button type='submit' className='btn btn-primary'>Add Slot</button>
        </form>
    </div>
  )
}

export default AddSlot