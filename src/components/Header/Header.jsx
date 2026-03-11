import { useState } from 'react'
import { Leaf, Menu, X } from 'lucide-react'
import Button from '../Button/Button.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

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
        <span>{t.header.logoText}</span>
      </div>

      <nav className={styles.nav}>
        {t.header.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={(e) => { e.preventDefault(); handleNav(item.href) }}>
            {item.label}
          </a>
        ))}
      </nav>

      <LanguageSwitcher />

      <Button className={styles.desktopBtn} variant="primary" size="sm" onClick={() => handleNav('#cta')}>
        {t.header.cta}
      </Button>

      <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={24} />
      </button>

      {open && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileTop}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}><Leaf size={20} /></span>
              <span>{t.header.logoText}</span>
            </div>
            <button className={styles.hamburger} onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className={styles.mobileNav}>
            {t.header.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => { e.preventDefault(); handleNav(item.href) }}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className={styles.mobileLangSwitcher}>
            <LanguageSwitcher />
          </div>
          <Button fullWidth size="md" onClick={() => handleNav('#cta')}>{t.header.cta}</Button>
        </div>
      )}
    </header>
  )
}
