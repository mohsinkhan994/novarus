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
            <Route
                path="/free-tools"
                element={
                    <ServicePage
                        title="Free Tools"
                        description="This is a placeholder page for Free Tools."
                    />
                }
            />
            <Route
                path="/blog"
                element={
                    <ServicePage
                        title="Blog"
                        description="This is a placeholder page for the Blog."
                    />
                }
            />
            <Route
                path="/community"
                element={
                    <ServicePage
                        title="Community"
                        description="This is a placeholder page for the Community."
                    />
                }
            />
            <Route
                path="/success-stories"
                element={
                    <ServicePage
                        title="Success Stories"
                        description="This is a placeholder page for Success Stories."
                    />
                }
            />
            <Route
                path="/life-in-russia"
                element={
                    <ServicePage
                        title="Life in Russia"
                        description="This is a placeholder page for Life in Russia."
                    />
                }
            />
            <Route
                path="/about-us"
                element={
                    <ServicePage
                        title="About Us"
                        description="This is a placeholder page for About Us."
                    />
                }
            />
            <Route
                path="/russian-level-test"
                element={
                    <ServicePage
                        title="Russian Level Test"
                        description="This is a placeholder page for the Russian Level Test."
                    />
                }
            />
            <Route
                path="/study-cost-calculator"
                element={
                    <ServicePage
                        title="Study Cost Calculator"
                        description="This is a placeholder page for the Study Cost Calculator."
                    />
                }
            />
            <Route
                path="/find-your-city"
                element={
                    <ServicePage
                        title="Find Your City"
                        description="This is a placeholder page for Find Your City."
                    />
                }
            />
        </Routes>
    )
}

export default App