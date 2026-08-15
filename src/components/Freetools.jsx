import { FiArrowRight } from 'react-icons/fi'
import { PiGaugeBold, PiCalculatorBold, PiMapTrifoldBold } from 'react-icons/pi'
import './FreeTools.css'

const tools = [
    {
        id: 'level-test',
        theme: 'green',
        icon: <PiGaugeBold />,
        title: 'Russian Level Test',
        subtitle: 'Check your Russian level',
        cta: 'Start Test',
    },
    {
        id: 'cost-calculator',
        theme: 'blue',
        icon: <PiCalculatorBold />,
        title: 'Study Cost Calculator',
        subtitle: 'Estimate your expenses',
        cta: 'Calculate',
    },
    {
        id: 'find-city',
        theme: 'orange',
        icon: <PiMapTrifoldBold />,
        title: 'Find Your City',
        subtitle: 'Best cities for you in Russia',
        cta: 'Find Now',
    },
]

// Same pattern as Journey — one column's worth of content, no outer
// section/container. Sits inside the InfoRow 3-column grid.
function FreeTools() {
    return (
        <div className="free-tools-card">
            <h2 className="free-tools-card-title">Free Tools for You</h2>

            <div className="free-tools-list">
                {tools.map((tool) => (
                    <div className={`tool-row theme-${tool.theme}`} key={tool.id}>
                        <span className="tool-icon">{tool.icon}</span>
                        <div className="tool-row-text">
                            <h4>{tool.title}</h4>
                            <p>{tool.subtitle}</p>
                            <button className="tool-cta">
                                {tool.cta} <FiArrowRight />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FreeTools