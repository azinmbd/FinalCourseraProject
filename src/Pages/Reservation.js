import { useState } from 'react'

export default function Reservation() {
    const [resDate, setResDate] = useState('')
    const [resTime, setResTime] = useState('')
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState('')
    const [availableTimes, setAvailableTimes] = useState(['18:00', '19:00', '20:00'])

    const [invalidDate, setInvalidDate] = useState(false)
    const [invalidTime, setInvalidTime] = useState(false)
    const [invalidGuests, setInvalidGuests] = useState(false)

    function validateDate () {
        if (!resDate.match(/2024-[0-1][1-9]-[0-3][1-9]/)) {
            setInvalidDate(true)
            return false
        }
        return true
    }

    function validateTime () {
        if (!resTime) {
            setInvalidTime(true)
            return false
        }
        return true
    }

    function validateGuests () {
        if (guests > 10 || guests < 1) {
            setInvalidGuests(true)
            return false
        }
        return true
    }

    function handleDateChange (e) {
        setInvalidDate(false)
        changeTimes({ date: e.target.value })
        setResDate(e.target.value)
    }

    function handleTimeChange (e) {
        setInvalidTime(false)
        setResTime(e.target.value)
    }

    function handleGuestsChange (e) {
        setInvalidGuests(false)
        setGuests(e.target.value)
    }

    function changeTimes({ date }) {
        // Simulate fetching new available times based on date
        if (date === '2024-12-25') {
            setAvailableTimes(['17:00', '18:00', '19:00'])
        } else {
            setAvailableTimes(['18:00', '19:00', '20:00'])
        }
    }

    function handleSubmit (e) {
        e.preventDefault()

        if (!validateDate() || !validateTime() || !validateGuests()) {
            return
        }

        const reservationData = {
            resDate,
            resTime,
            guests,
            occasion
        }

        console.log('Reservation Submitted:', reservationData)
        // Logic for submitting the form (e.g., API call) can be added here
    }

    return (
        <div className="reservation-page">
            <h1 className="display-title">Make a Reservation</h1>
            <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor="res-date">Date</label>
                    <input
                        type="date"
                        id="res-date"
                        className={invalidDate ? "invalid" : ""}
                        onBlur={validateDate}
                        value={resDate}
                        onChange={handleDateChange}
                    />
                    {invalidDate && (
                        <span className="message">
                            Please select a valid date.
                        </span>
                    )}
                </div>

                <div className="form-item">
                    <label htmlFor="res-time">Time</label>
                    <select
                        id="res-time"
                        className={invalidTime ? "invalid" : ""}
                        value={resTime}
                        onBlur={validateTime}
                        onChange={handleTimeChange}
                    >
                        <option value="">Select a time</option>
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    {invalidTime && (
                        <span className="message">
                            Please select a time.
                        </span>
                    )}
                </div>

                <div className="form-item">
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        className={invalidGuests ? "invalid" : ""}
                        onBlur={validateGuests}
                        value={guests}
                        onChange={handleGuestsChange}
                    />
                    {invalidGuests && (
                        <span className="message">Please enter between 1 and 10 guests.</span>
                    )}
                </div>

                <div className="form-item">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={e => setOccasion(e.target.value)}
                    >
                        <option value="">Select an occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={invalidDate || invalidTime || invalidGuests}
                >
                    Make your reservation
                </button>
            </form>
        </div>
    )
}
