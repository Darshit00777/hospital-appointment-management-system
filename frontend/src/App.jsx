import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import DoctorList from './component/DoctorList';
import AddSlot from './component/AddSlot';
import DoctorSchedule from './component/DoctorSchedule';
import SearchDoctor from './component/SearchDoctor';
import SlotAppointment from "./component/SlotAppointment";
import Book from './component/Book';
import PatientHistory from './component/PatientService';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<h2>Admin Dashboard</h2>} />
          <Route path="/doctor" element={<h2>Doctor Dashboard</h2>} />
          <Route path="/patient" element={<h2>Patient Dashboard</h2>} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path='/addslot' element={<AddSlot />} />
          <Route path='/schedule' element={<DoctorSchedule />} />
          <Route path='/searchdoctor' element={<SearchDoctor />} />
          <Route path='/slotbook' element={<SlotAppointment />} />
          <Route path='/book/:id' element={<Book />} />
          <Route path='/history' element={<PatientHistory />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
