import Hero from '../Comps/Hero'
import Specials from '../Specials'
import Testimonials from './Testimonials'
import About from './About'

export default function Home () {
    return (
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </main>
    )
}