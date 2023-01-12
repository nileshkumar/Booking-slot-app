import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import DatePicker from "react-datepicker"
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'



const Booking = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const [formField, setFormField] = useState({
    cargo_name: '',
    start: startDate,
    duration: ''
  })

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    createBooking(formField)
  }

  const createBooking = (data) => {
    fetch('api/v1/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data)=> {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.log('Error:', error)
    })
  }

  const handleFormFields = (event) => {
    setFormField({...formField, [event.target.name]: event.target.value })
  }
  
   return(
    <div>
     <form onSubmit={handleBookingSubmit}>
      <div className="form-group">
         <label className="form-label mt-3 mb-3">Cargo Name</label><br/>
         <input className="form-control" value={formField.cargoName} onChange={event => handleFormFields(event)} name="cargo_name" type="text" placeholder="Cargo Name"/>
      </div>

      <div className="form-group">
         <label className="form-label mt-3 mb-3">Date</label>
         <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            value={formField.start} name="start"/>
      </div>

      <div className="form-group">
         <label className="form-label mt-3 mb-3">Duration</label><br/>
         <input className="form-control" type="number" value={formField.duration} onChange={event => handleFormFields(event)} name="duration"  placeholder="Duration in minutes"/>
      </div>
      <br />
      <button type="submit" className="btn btn-primary">Book</button>
     </form>
    </div>
  )
}

export default Booking