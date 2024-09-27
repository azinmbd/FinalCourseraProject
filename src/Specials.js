import './Styles/Specials.css'
import { Link } from 'react-router-dom'
import DeliveryIcon from './icons/DeliveryIcon'

const specials = [{
    name: "Greek salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "/images/greeksalad.jpg"
}, {
    name: "Bruschetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    image: "/images/bruschetta.jpg"
}, {
    name: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "/images/lemondessert.jpg"
}]

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
                            <img src={special.image} alt="" />
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
                                    <DeliveryIcon className='delivery-icon' />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}