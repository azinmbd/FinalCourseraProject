import '../Styles/Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/" className="card-title">Home</Link></li>
                <li><Link to="/" className="card-title">About</Link></li>
                <li><Link to="/" className="card-title">Menu</Link></li>
                <li><Link to="/booking" className="card-title">Reservations</Link></li>
                <li><Link to="/" className="card-title">Order Online</Link></li>
                <li><Link to="/" className="card-title">Login</Link></li>
            </ul>
        </nav>
    )
}