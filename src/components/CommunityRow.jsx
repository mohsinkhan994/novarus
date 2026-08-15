import SuccessStories from './SuccessStories'
import UniversityPartners from './UniversityPartners'
import BlogPreview from './BlogPreview'
import './CommunityRow.css'

// Same pattern as InfoRow — pure layout wrapper, arranges three
// independent cards as equal-width columns. No styling opinions here.
function CommunityRow() {
  return (
    <section className="community-row">
      <div className="container community-row-grid">
        <SuccessStories />
        <UniversityPartners />
        <BlogPreview />
      </div>
    </section>
  )
}

export default CommunityRow
