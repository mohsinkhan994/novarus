import { Link } from 'react-router-dom'
import {
    FiBook,
    FiCheck,
    FiArrowRight,
} from 'react-icons/fi'
import { PiGraduationCap, PiAirplaneTilt } from 'react-icons/pi'
import './Services.css'

// Each card's image can be swapped by changing the `image` field below,
// same pattern as the hero image in src/config/heroConfig.js
const services = [
    {
        id: 'learn-russian',
        to: '/learn-russian',
        theme: 'blue',
        icon: <FiBook />,
        title: 'Learn Russian',
        subtitle: 'Online Language Courses',
        image:
            'https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=800&auto=format&fit=crop',
        features: [
            'Live interactive classes',
            'From Beginner to Advanced',
            'Speaking & Pronunciation',
            'Culture & Real-life Russian',
        ],
        cta: 'Explore Courses',
        variant: 'outline',
    },
    {
        id: 'study-in-russia',
        to: '/study-in-russia',
        theme: 'green',
        icon: <PiGraduationCap />,
        title: 'Study in Russia',
        subtitle: 'Education & Admission Support',
        image:
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
        features: [
            'Top Russian Universities',
            'Admission & Visa Support',
            'Document Assistance',
            'Arrival & Accommodation',
        ],
        cta: 'Study in Russia',
        variant: 'filled',
    },
    {
        id: 'explore-russia',
        to: '/travel-russia',
        theme: 'purple',
        icon: <PiAirplaneTilt />,
        title: 'Explore Russia',
        subtitle: 'Travel & Tourism Services',
        image:
            'https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=800&auto=format&fit=crop',
        features: [
            'Tour Packages & Itineraries',
            'Visa & Travel Assistance',
            'Local Experiences',
            'Group & Private Tours',
        ],
        cta: 'Plan Your Trip',
        variant: 'outline',
    },
]

function Services() {
    return (
        <section className="services" id="services">
            <div className="container services-grid">
                {services.map((service) => (
                    <article className={`service-card theme-${service.theme}`} key={service.id}>
                        <div className="service-card-top">
                            <span className="service-icon">{service.icon}</span>
                            <div>
                                <h3>{service.title}</h3>
                                <p className="service-subtitle">{service.subtitle}</p>
                            </div>
                        </div>

                        <ul className="service-features">
                            {service.features.map((feature) => (
                                <li key={feature}>
                                    <FiCheck className="feature-check" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div
                            className="service-image"
                            style={{ backgroundImage: `url(${service.image})` }}
                        />

                        <Link
                            to={service.to}
                            className={`service-cta ${
                                service.variant === 'filled' ? 'cta-filled' : 'cta-outline'
                            }`}
                        >
                            {service.cta} <FiArrowRight />
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Services