import {
    FiCompass,
    FiBookOpen,
    FiFileText,
    FiMapPin,
    FiAward,
} from 'react-icons/fi'
import './Journey.css'

const steps = [
    {
        icon: <FiCompass />,
        title: 'Discover',
        subtitle: 'Explore your options',
    },
    {
        icon: <FiBookOpen />,
        title: 'Learn',
        subtitle: 'Master Russian language',
    },
    {
        icon: <FiFileText />,
        title: 'Prepare',
        subtitle: 'Documents & visa ready',
    },
    {
        icon: <FiMapPin />,
        title: 'Arrive',
        subtitle: "We'll welcome you",
    },
    {
        icon: <FiAward />,
        title: 'Achieve',
        subtitle: 'Build your future',
    },
]

// Renders as one column's worth of content — no outer <section>/container,
// it's meant to sit inside the InfoRow 3-column grid alongside FreeTools
// and WhyRussia.
function Journey() {
    return (
        <div className="journey-card">
            <h2 className="journey-card-title">Your Journey to Russia</h2>

            <div className="journey-steps">
                <div className="journey-line" />
                {steps.map((step) => (
                    <div className="journey-step" key={step.title}>
                        <span className="journey-icon">{step.icon}</span>
                        <div className="journey-step-text">
                            <h4>{step.title}</h4>
                            <p>{step.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="journey-cta">Start Your Journey Today</button>
        </div>
    )
}

export default Journey