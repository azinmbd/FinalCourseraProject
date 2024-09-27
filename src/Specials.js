import './Styles/Specials.css'
import { Link } from 'react-router-dom'

import margheritaPizza from './assets/margheritapizza.jpg';
import cheesecake from './assets/cheesecake.jpg';
import beefBurger from './assets/beefburger.jpg';

const specials = [{
    name: "Margherita Pizza",
    price: "$15.99",
    description: "Classic Margherita pizza with fresh tomatoes, mozzarella cheese, basil, and a drizzle of olive oil.",
    image: margheritaPizza
}, {
    name: "New York Cheesecake",
    price: "$8.99",
    description: "Creamy New York-style cheesecake with a graham cracker crust, topped with fresh berries.",
    image: cheesecake
}, {
    name: "Classic Beef Burger",
    price: "$10.99",
    description: "Juicy beef patty with lettuce, tomato, pickles, cheddar cheese, and our house special sauce in a toasted bun.",
    image: beefBurger
}];

export default function Specials () {
    return (
        <section id="specials">
            <div className="container">
                <div className="heading">
                    <h2 className="display-title">Specials</h2>
                    <Link to="/menu" className="button">Online Menu</Link>
                </div>
                <div className="cards-container">
                    {specials.map((special) => (
                        <article className="card" key={special.name}>
                            <img src={special.image} alt={special.name} />
                            <div className="card-body">
                                <div className="card-header">
                                    <h3>{special.name}</h3>
                                    <span className="highlight">{special.price}</span>
                                </div>
                                <div className="card-details paragraph">
                                    {special.description}
                                </div>
                                <div className="card-footer">
                                    Order a delivery
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
