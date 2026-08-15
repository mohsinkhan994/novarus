import { Link } from 'react-router-dom'
import { FiPlay, FiArrowRight } from 'react-icons/fi'
import './SuccessStories.css'

// Swap thumbnails the same way as other images in this project — replace
// the URL, or point at a local file in src/assets.
const stories = [
  {
    id: 'rahul',
    name: 'Rahul, India',
    role: 'MBBS Student in Kazan',
    thumbnail:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: 'ananya',
    name: 'Ananya, India',
    role: 'Engineering Student in Moscow',
    thumbnail:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: 'vikram',
    name: 'Vikram, Nepal',
    role: 'Language Student in St. Petersburg',
    thumbnail:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop',
  },
]

// Self-contained card, same pattern as Journey/FreeTools/WhyRussia —
// meant to sit inside a 3-column row wrapper (see BottomRow.jsx).
function SuccessStories() {
  return (
    <div className="success-stories-card">
      <div className="success-stories-header">
        <div>
          <h2>Student Success Stories</h2>
          <p>Real stories from our students</p>
        </div>
        <Link to="/success-stories" className="view-all-link">
          View All <FiArrowRight />
        </Link>
      </div>

      <div className="success-stories-grid">
        {stories.map((story) => (
          <button className="story-card" key={story.id} type="button">
            <div
              className="story-thumbnail"
              style={{ backgroundImage: `url(${story.thumbnail})` }}
            >
              <span className="play-icon">
                <FiPlay />
              </span>
            </div>
            <h4>{story.name}</h4>
            <p>{story.role}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SuccessStories
