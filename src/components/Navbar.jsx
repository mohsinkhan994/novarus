import { useState } from 'react'
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiChevronDown,
  FiMenu,
  FiX,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Learn Russian', href: '/learn-russian', hasDropdown: true },
  { label: 'Study in Russia', href: '/study-in-russia', hasDropdown: true },
  { label: 'Travel Russia', href: '/travel-russia', hasDropdown: true },
  { label: 'Life in Russia', href: '/life-in-russia', hasDropdown: true },
  { label: 'Community', href: '/community' },
  { label: 'About Us', href: '/about-us' },
]

function Navbar() {
  const [activeLink, setActiveLink] = useState('Home')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="navbar-wrapper">
      {/* Top utility bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span className="topbar-item">
              <FiMapPin />
              Based in Russia | Helping students &amp; travelers from 25+ countries
            </span>
          </div>
          <div className="topbar-right">
            <a href="tel:+79951234567" className="topbar-item">
              <FiPhone />
              +7 995 123 4567
            </a>
            <a href="mailto:hello@novarus.com" className="topbar-item">
              <FiMail />
              hello@novarus.com
            </a>
            <a
              href="https://wa.me/79951234567"
              target="_blank"
              rel="noreferrer"
              className="topbar-item"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="main-nav">
        <div className="container main-nav-inner">
          <Link to="/" className="logo">
            <span className="logo-mark">N</span>
            <span className="logo-text">
              <span className="logo-title">NOVARUS</span>
              <span className="logo-subtitle">YOUR GATEWAY TO RUSSIA</span>
            </span>
          </Link>

          <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`nav-link ${
                      activeLink === link.label ? 'active' : ''
                    }`}
                    onClick={() => {
                      setActiveLink(link.label)
                      setMobileOpen(false)
                    }}
                  >
                    {link.label}
                    {link.hasDropdown && <FiChevronDown className="chevron" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="main-nav-actions">
            <button className="btn-consultation">Free Consultation</button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar