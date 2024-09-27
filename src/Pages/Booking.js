import '../Styles/Booking.css'
import BookingForm from "./Reservation"

export default function Booking ({
    resDate,
    setResDate,
    resTime,
    setResTime,
    guests,
    setGuests,
    occasion,
    setOccasion,
    availableTimes,
    changeTimes,
    submitForm
}) {
    return (
        <section className="container" id="booking">
            <BookingForm
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
        </section>
    )
}