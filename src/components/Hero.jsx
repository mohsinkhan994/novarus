import { useState } from 'react'
import {
  FiUser,
  FiPhone,
  FiTag,
  FiGlobe,
  FiChevronDown,
  FiArrowRight,
  FiStar,
  FiUsers,
  FiHeadphones,
} from 'react-icons/fi'
import { HERO_IMAGE } from '../config/heroConfig'
import './Hero.css'

const trustItems = [
  { icon: <FiUser />, title: 'Native', subtitle: 'Russian Teachers' },
  { icon: <FiGlobe />, title: 'International', subtitle: 'Student Support' },
  { icon: <FiUsers />, title: 'Trusted by', subtitle: '5000+ Students' },
  { icon: <FiHeadphones />, title: '24/7 Support', subtitle: 'Every Step' },
]

const interestOptions = [
  'Learning Russian',
  'Study in Russia',
  'Travel Russia',
  'Life in Russia',
]

// Pass a `backgroundImage` prop to override HERO_IMAGE per-use,
// otherwise it falls back to the value set in src/config/heroConfig.js
function Hero({ backgroundImage = HERO_IMAGE }) {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    interest: '',
    country: '',
  })

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Consultation request submitted:', form)
  }

  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="hero-scrim" />

      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-eyebrow">Your Journey Starts Here</span>

          <h1 className="hero-title">
            Your Gateway
            <br />
            to <span className="text-red">Russia</span>
          </h1>

          <p className="hero-subtext">
            Learn the language. Study at top universities.
            <br />
            Experience Russia. Build your future.
          </p>

          <div className="hero-ctas">
            <button className="btn-primary">
              Start Learning Russian <FiArrowRight />
            </button>
            <button className="btn-secondary">Explore Opportunities</button>
          </div>

          <div className="hero-trust">
            {trustItems.map((item) => (
              <div className="trust-item" key={item.title + item.subtitle}>
                <span className="trust-icon">{item.icon}</span>
                <span className="trust-text">
                  <strong>{item.title}</strong>
                  <span>{item.subtitle}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <form className="hero-form" onSubmit={handleSubmit}>
          <h3>
            Book <span className="text-red">Free</span> Consultation
          </h3>
          <p>Get expert guidance for your Russia journey.</p>

          <label className="form-field">
            <FiUser />
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange('name')}
              required
            />
          </label>

          <label className="form-field">
            <FiPhone />
            <input
              type="tel"
              placeholder="WhatsApp Number"
              value={form.whatsapp}
              onChange={handleChange('whatsapp')}
              required
            />
          </label>

          <label className="form-field select-field">
            <FiTag />
            <select value={form.interest} onChange={handleChange('interest')}>
              <option value="" disabled>
                I am interested in
              </option>
              {interestOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <FiChevronDown className="select-chevron" />
          </label>

          <label className="form-field select-field">
            <FiGlobe />
            <select value={form.country} onChange={handleChange('country')}>
              <option value="" disabled>
                Your Country
              </option>
              <option value="india">India</option>
              <option value="nepal">Nepal</option>
              <option value="nigeria">Nigeria</option>
              <option value="other">Other</option>
            </select>
            <FiChevronDown className="select-chevron" />
          </label>

          <button type="submit" className="btn-book-call">
            Book My Free Call
          </button>

          <div className="hero-form-social">
            <div className="avatar-stack">
              <span className="avatar" />
              <span className="avatar" />
              <span className="avatar" />
              <span className="avatar" />
            </div>
            <div className="rating">
              <span className="stars">
                <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
              </span>
              <span className="rating-text">4.9/5 from 500+ students</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Hero
