import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import InfoRow from '../components/InfoRow'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <InfoRow />
            {/* More sections (Why Russia detail, Success Stories, etc.) come next */}
        </>
    )
}

export default Home