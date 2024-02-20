import React, { useState } from 'react'

function BookingForm(props) {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [guests, setGuest] = useState();
    const [occasion, setOccasion] = useState();

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleChange(e) {
        setDate(e);
    }
  return (
    <header className="header">
    <section>
        <div>
            <h2>Reservations</h2>
                <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" valu={date} onChange={e => handleChange(e.target.value)} required />
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
                        <option value=''>Select a Time</option>
                        {props.availableTimes.map((time, index) => <option key={index}>{time}</option>)}
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuest(e.target.value)} required />
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <input type="submit" value="Make Your reservation" onSubmit={handleSubmit} />
                </form>

        </div>
    </section>
    </header >
  )
}

export default  BookingForm;