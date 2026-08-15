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

function Journey() {
    return (
        <section className="journey">
            <div className="container">
                <h2 className="journey-title">Your Journey to Russia</h2>

                <div className="journey-steps">
                    <div className="journey-line" />
                    {steps.map((step, index) => (
                        <div className="journey-step" key={step.title}>
                            <span className="journey-icon">{step.icon}</span>
                            <h4>{step.title}</h4>
                            <p>{step.subtitle}</p>
                        </div>
                    ))}
                </div>

                <div className="journey-cta-wrap">
                    <button className="journey-cta">Start Your Journey Today</button>
                </div>
            </div>
        </section>
    )
}

export default Journey