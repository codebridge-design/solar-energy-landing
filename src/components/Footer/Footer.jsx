import { Leaf, Mail, Phone, MapPin } from 'lucide-react'
import styles from './Footer.module.css'

const LINKS = {
  Solutions: ['Solar PV Systems', 'Battery Storage', 'Wind Energy', 'Hybrid Systems'],
  Company: ['About EcoEnergy', 'Case Studies', 'Partners', 'Careers'],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}><Leaf size={18} /></span>
            <span className={styles.logoText}>EcoEnergy</span>
          </div>
          <p className={styles.tagline}>
            Engineering the clean energy transition — one project at a time.
          </p>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <Phone size={15} className={styles.contactIcon} />
              <a href="tel:+380441234567" className={styles.contactLink}>+38 (044) 123-45-67</a>
            </li>
            <li className={styles.contactItem}>
              <Mail size={15} className={styles.contactIcon} />
              <a href="mailto:info@ecoenergy.ua" className={styles.contactLink}>info@ecoenergy.ua</a>
            </li>
            <li className={styles.contactItem}>
              <MapPin size={15} className={styles.contactIcon} />
              <span className={styles.contactLink}>Kyiv, Ukraine</span>
            </li>
          </ul>
        </div>

        {Object.entries(LINKS).map(([group, items]) => (
          <div key={group} className={styles.col}>
            <p className={styles.colTitle}>{group}</p>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className={styles.link}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.col}>
          <p className={styles.colTitle}>Case Study</p>
          <p className={styles.colDesc}>
            Sunridge Solar Park demonstrates what's achievable when commercial
            real estate commits to clean energy. Let us show you yours.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} EcoEnergy. All rights reserved.</p>
      </div>
    </footer>
  )
}
