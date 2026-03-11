import { useState } from 'react'
import { Leaf, Menu, X } from 'lucide-react'
import Button from '../Button/Button.jsx'
import styles from './Header.module.css'

const NAV = [
  { label: 'Overview', href: '#hero' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#cta' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>
          <Leaf size={20} />
        </span>
        <span>EcoEnergy</span>
      </div>

      <nav className={styles.nav}>
        {NAV.map((item) => (
          <a key={item.label} href={item.href} onClick={(e) => { e.preventDefault(); handleNav(item.href) }}>
            {item.label}
          </a>
        ))}
      </nav>

      <Button className={styles.desktopBtn} variant="primary" size="sm" onClick={() => handleNav('#cta')}>
        Get a Quote
      </Button>

      <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={24} />
      </button>

      {open && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileTop}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}><Leaf size={20} /></span>
              <span>EcoEnergy</span>
            </div>
            <button className={styles.hamburger} onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className={styles.mobileNav}>
            {NAV.map((item) => (
              <a key={item.label} href={item.href} onClick={(e) => { e.preventDefault(); handleNav(item.href) }}>
                {item.label}
              </a>
            ))}
          </nav>
          <Button fullWidth size="md" onClick={() => handleNav('#cta')}>Get a Quote</Button>
        </div>
      )}
    </header>
  )
}
