import '../Styles/Booking.css';
import BookingForm from './Reservation';
import bookingImage from '../assets/booking.jpg'; // Import the image

export default function Booking({
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
    submitForm,
}) {
    return (
        <section className="container" id="booking">
            <div className="booking-content">


                <div className="booking-form">
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
                </div>
                <div className="booking-image">
                    <img src={bookingImage} alt="Reservation" />
                </div>
            </div>
        </section>
    );
}
