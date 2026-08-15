import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import './BlogPreview.css'

// Swap thumbnails/content per post below — same pattern as everywhere
// else in this project (replace the URL, or import a local asset).
const posts = [
  {
    id: 'top-10-universities',
    title: 'Top 10 Universities in Russia for International Students',
    date: 'May 20, 2025',
    thumbnail:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'cost-of-living',
    title: 'Cost of Living in Russia for Students in 2025',
    date: 'May 15, 2025',
    thumbnail:
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'learn-russian-faster',
    title: 'How to Learn Russian Faster: 7 Proven Tips',
    date: 'May 10, 2025',
    thumbnail:
      'https://images.unsplash.com/photo-1548407260-da850faa41e3?q=80&w=200&auto=format&fit=crop',
  },
]

function BlogPreview() {
  return (
    <div className="blog-card">
      <div className="blog-header">
        <div>
          <h2>Latest from Our Blog</h2>
          <p>Tips, guides &amp; updates about Russia.</p>
        </div>
        <Link to="/blog" className="view-all-link">
          View All <FiArrowRight />
        </Link>
      </div>

      <div className="blog-list">
        {posts.map((post) => (
          <Link to={`/blog/${post.id}`} className="blog-row" key={post.id}>
            <div
              className="blog-thumbnail"
              style={{ backgroundImage: `url(${post.thumbnail})` }}
            />
            <div className="blog-row-text">
              <h4>{post.title}</h4>
              <p>{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogPreview
