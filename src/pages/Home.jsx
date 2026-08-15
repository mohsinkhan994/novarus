import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Journey from '../components/Journey'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Journey />
            {/* More sections (Free Tools, Why Russia, Success Stories, etc.) come next */}
        </>
    )
}

export default Home