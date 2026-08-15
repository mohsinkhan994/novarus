import Journey from './Journey'
import FreeTools from './FreeTools'
import WhyRussia from './WhyRussia'
import './Inforow.css'

// Purely a layout wrapper: arranges Journey, FreeTools, and WhyRussia as
// 3 equal-width columns. Each of those components is a fully independent
// card — this file owns none of their visual styling, just the grid.
function InfoRow() {
    return (
        <section className="info-row">
            <div className="container info-row-grid">
                <Journey />
                <FreeTools />
                <WhyRussia />
            </div>
        </section>
    )
}

export default InfoRow