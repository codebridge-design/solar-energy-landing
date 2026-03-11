import { Leaf, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}><Leaf size={18} /></span>
            <span className={styles.logoText}>{t.footer.logoText}</span>
          </div>
          <p className={styles.tagline}>{t.footer.tagline}</p>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <Phone size={15} className={styles.contactIcon} />
              <a href="tel:+380441234567" className={styles.contactLink}>{t.footer.contact.phone}</a>
            </li>
            <li className={styles.contactItem}>
              <Mail size={15} className={styles.contactIcon} />
              <a href="mailto:info@ecoenergy.ua" className={styles.contactLink}>{t.footer.contact.email}</a>
            </li>
            <li className={styles.contactItem}>
              <MapPin size={15} className={styles.contactIcon} />
              <span className={styles.contactLink}>{t.footer.contact.address}</span>
            </li>
          </ul>
        </div>

        {t.footer.linkGroups.map(({ title, items }, i) => (
          <div key={i} className={styles.col}>
            <p className={styles.colTitle}>{title}</p>
            <ul className={styles.list}>
              {items.map((item, j) => (
                <li key={j}>
                  <a href="#" className={styles.link}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.col}>
          <p className={styles.colTitle}>{t.footer.caseStudyCol.title}</p>
          <p className={styles.colDesc}>{t.footer.caseStudyCol.desc}</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>{t.footer.copyright(new Date().getFullYear())}</p>
      </div>
    </footer>
  )
}
