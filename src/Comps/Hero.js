import '../Styles/Hero.css'
import { Link } from 'react-router-dom'

export default function Hero () {
    return (
        <section id="hero">
            <div className="container" id="hero-content">
                <article>
                    <h1 className="display-title">Little Lemon</h1>
                    <span className="sub-title">Chicago</span>
                    <p className="lead-text">We are a family owned restaurant, focused on traditional recipes with a modern twist.</p>
                    <Link to="/booking" className="button">Reserve a Table</Link>
                </article>
                <img src="/images/restaurantfood.jpg" alt="" />
            </div>
        </section>
    )
}