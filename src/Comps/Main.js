import Home from '../Pages/Home'
import Booking from '../Pages/Booking'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useReducer } from 'react'
import { fetchAPI, submitAPI } from './API'
import ConfirmedBooking from '../Pages/ConfirmedBooking'

export function updateTimes (_prevState, { date }) {
    return fetchAPI(new Date(date))
}

export function initializeTimes () {
    return fetchAPI(new Date())
}

const today = new Date()
/**
 * Turn today's date object into a string that works as
 * the date input's value, i.e. "2024-09-26"
 */
const todayFormatted = today.getFullYear() + '-'
    + ('0' + (today.getMonth()+1)).slice(-2) + '-'
    + ('0' + today.getDate()).slice(-2)

export default function Main() {
    const [availableTimes, changeTimes] = useReducer(
        updateTimes,
        initializeTimes()
    )

    const [resDate, setResDate] = useState(todayFormatted)
    const [resTime, setResTime] = useState()
    const [guests, setGuests] = useState('1')
    const [occasion, setOccasion] = useState('')
    const navigate = useNavigate();

    function submitForm (formData) {
        const submitted = submitAPI(formData)

        if (submitted) {
            navigate("/confirmed")
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/booking" element={
                    <Booking
                        resDate={resDate}
                        setResDate={setResDate}
                        resTime={resTime}
                        setResTime={setResTime}
                        guests={guests}
                        setGuests={setGuests}
                        occasion={occasion}
                        setOccasion={setOccasion}
                        availableTimes={availableTimes}
                        changeTimes={changeTimes}
                        submitForm={submitForm}
                    />
                }></Route>
                <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    )
}