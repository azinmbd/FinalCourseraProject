import '../Styles/Header.css'
import { Link } from 'react-router-dom'

export default function Header({children}) {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <img src="/images/Logo.svg" alt="" />
                </Link>
                {children}
            </div>
        </header>
    )
}