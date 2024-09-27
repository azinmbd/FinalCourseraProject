import '../Styles/ConfirmedBooking.css';
import confirmationImage from '../assets/confirmation.jpg'; // Import the image

export default function ConfirmedBooking() {
    return (
        <div className="container" id="confirmation">
            <div className="confirmation-image">
                <img src={confirmationImage} alt="Confirmation" />
            </div>
            <span className="display-title">
                Your booking has been confirmed.
            </span>
        </div>
    );
}
