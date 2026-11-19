import React, { useState } from 'react'
import { bookApp } from '../services/appService.js'
import { useParams } from 'react-router-dom'


const Book = () => {
    const{id} = useParams();

    const[patient, setPatient] = useState("");
    const[illness, setIllness] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            patient: patient,
            illness: illness
        };

        const result = await bookApp(id, data);

        if (result.data) {
            alert("Appointment booked successfully");
            
        } else {
            alert(result.message || "Booking failed");
        }

        setPatient("");
        setIllness("");
    }
  return (
    <div className="container mt-4">
                <h2>Book Appointment</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Patient ID</label>
                        <input
                            type="text"
                            className="form-control"
                            value={patient}
                            onChange={(e) => setPatient(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Illness</label>
                        <input
                            type="text"
                            className="form-control"
                            value={illness}
                            onChange={(e) => setIllness(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-success">
                        Book Appointment
                    </button>
                </form>
            </div>
  )
}

export default Book