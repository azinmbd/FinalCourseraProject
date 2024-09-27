import '../Styles//Testimonials.css'

const testimonials = [{
    rating: "Lorem ipsum",
    name: "Kaylee",
    text: "Etiam ornare ultrices sapien ac venenatis.",
    image: "/images/kaylee.jpg"
}, {
    rating: "Lorem ipsum",
    name: "Wilfred",
    text: "Etiam ornare ultrices sapien ac venenatis.",
    image: "/images/wilfred.jpg"
}, {
    rating: "Lorem ipsum",
    name: "Nadia",
    text: "Etiam ornare ultrices sapien ac venenatis.",
    image: "/images/nadia.jpg"
}, {
    rating: "Lorem ipsum",
    name: "Mary",
    text: "Etiam ornare ultrices sapien ac venenatis.",
    image: "/images/mary.jpg"
}]

export default function Testimonials () {
    return (
        <section id="testimonials">
            <div className="container">
                <h2>Testimonials</h2>
                <div className="reviews">
                    {testimonials.map((review) => (
                        <article className="review" key={review.name}>
                            <h3>{review.rating}</h3>
                            <div className="reviewer">
                                <img src={review.image} alt={review.name} />
                                <span className="name">{review.name}</span>
                            </div>
                            <div className="review-text">
                                {review.text}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}