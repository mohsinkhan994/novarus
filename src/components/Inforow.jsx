import Journey from './Journey'
import FreeTools from './Freetools'
import './Inforow.css'

// Purely a layout wrapper: arranges Journey, FreeTools, and (next) WhyRussia
// as 3 equal-width columns. Each of those components is a fully independent
// card — this file owns none of their visual styling, just the grid.
function InfoRow() {
    return (
        <section className="info-row">
            <div className="container info-row-grid">
                <Journey />
                <FreeTools />
                <div className="why-russia-placeholder">
                    <h2>Why Russia?</h2>
                    <p>Coming next</p>
                </div>
            </div>
        </section>
    )
}

export default InfoRow