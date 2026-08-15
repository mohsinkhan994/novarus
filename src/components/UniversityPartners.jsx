import { Link } from 'react-router-dom'
import { FiArrowRight, FiBookOpen } from 'react-icons/fi'
import './UniversityPartners.css'

// Placeholder partner list — swap `name` for real university names, and
// add a `logo` field (image URL) per entry once you have real logos to
// show instead of the icon placeholder.
const partners = [
  { id: 1, name: 'Kazan Federal University' },
  { id: 2, name: 'RUDN University' },
  { id: 3, name: 'ITMO University' },
  { id: 4, name: 'Moscow State University' },
  { id: 5, name: 'Tomsk Polytechnic' },
  { id: 6, name: 'Ural Federal University' },
  { id: 7, name: 'Saint Petersburg State' },
  { id: 8, name: 'Siberian Federal University' },
]

function UniversityPartners() {
  return (
    <div className="partners-card">
      <div className="partners-header">
        <div>
          <h2>Our University Partners</h2>
          <p>We work with top government universities in Russia.</p>
        </div>
        <Link to="/study-in-russia" className="view-all-link">
          View All <FiArrowRight />
        </Link>
      </div>

      <div className="partners-grid">
        {partners.map((partner) => (
          <div className="partner-logo" key={partner.id} title={partner.name}>
            <FiBookOpen />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UniversityPartners
