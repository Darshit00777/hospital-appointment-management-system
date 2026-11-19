import React, { useState } from "react";
import { pHistory, cancelApp } from "../services/appService.js";

function PatientHistory() {
  const [patient, setPatient] = useState("");
  const [history, setHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await pHistory(patient);
    setHistory(result.data);
  };

  const deletehandle = async (id) => {
    await cancelApp(id);

    alert("appoint ment cancel");

  };

  return (
    <div className="container mt-4">
      <h2>Patient Appointment History</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Enter Patient ID"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          required
        />

        <button className="btn btn-primary">Search History</button>
      </form>

      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Illness</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {history.map((h) => (
            <tr key={h._id}>
              <td>{h.doctor.name}</td>
              <td>{h.date}</td>
              <td>{h.time}</td>
              <td>{h.illness}</td>
              <td>{h.status}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletehandle(h._id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientHistory;
