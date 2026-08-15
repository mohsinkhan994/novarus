import { FiCheck } from 'react-icons/fi'
import './WhyRussia.css'

// Swap this the same way as the Hero/Services images — replace the URL,
// or point it at a local file in src/assets and import it instead.
const WHY_RUSSIA_IMAGE =
  'https://images.unsplash.com/photo-1518288774672-b94e808873ff?q=80&w=600&auto=format&fit=crop'

const reasons = [
  'World-class education at affordable cost',
  'Safe and student-friendly environment',
  'Rich culture & unforgettable experiences',
  'Great career opportunities',
]

function WhyRussia({ image = WHY_RUSSIA_IMAGE }) {
  return (
    <div className="why-russia-card">
      <h2 className="why-russia-card-title">Why Russia?</h2>

      <div className="why-russia-body">
        <ul className="why-russia-list">
          {reasons.map((reason) => (
            <li key={reason}>
              <FiCheck className="why-russia-check" />
              {reason}
            </li>
          ))}
        </ul>

        <div
          className="why-russia-image"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    </div>
  )
}

export default WhyRussia
