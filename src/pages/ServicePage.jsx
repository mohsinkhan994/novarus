import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './ServicePage.css'

// Temporary placeholder used for each service route until we build out
// the full page for each one (content, pricing, testimonials, etc.)
function ServicePage({ title, description }) {
    return (
        <>
            <Navbar />
            <section className="service-page">
                <div className="container">
                    <p className="service-page-crumb">
                        <Link to="/">Home</Link> / {title}
                    </p>
                    <h1>{title}</h1>
                    <p className="service-page-desc">{description}</p>
                    <div className="service-page-placeholder">
                        This page is a placeholder — full content for "{title}" goes here next.
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicePage