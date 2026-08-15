import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/learn-russian"
                element={
                    <ServicePage
                        title="Learn Russian"
                        description="Online Russian language courses for every level — live classes, speaking practice, and real culture immersion."
                    />
                }
            />
            <Route
                path="/study-in-russia"
                element={
                    <ServicePage
                        title="Study in Russia"
                        description="Admissions support for top Russian universities, from document prep to arrival and accommodation."
                    />
                }
            />
            <Route
                path="/travel-russia"
                element={
                    <ServicePage
                        title="Explore Russia"
                        description="Tour packages, visa assistance, and local experiences for travelers exploring Russia."
                    />
                }
            />
        </Routes>
    )
}

export default App