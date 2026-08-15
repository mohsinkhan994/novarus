import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import InfoRow from '../components/Inforow'
import CommunityRow from '../components/CommunityRow'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <InfoRow />
            <CommunityRow />
            {/* Footer (Join Community / Newsletter) comes next */}
        </>
    )
}

export default Home