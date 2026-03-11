import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './Header.module.css'

export default function LanguageSwitcher() {
  const { lang, switchLang } = useLanguage()
  return (
    <div className={styles.langSwitcher} role="group" aria-label="Language">
      <button
        className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
        onClick={() => switchLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span className={styles.langDivider} aria-hidden="true">|</span>
      <button
        className={`${styles.langBtn} ${lang === 'uk' ? styles.langActive : ''}`}
        onClick={() => switchLang('uk')}
        aria-pressed={lang === 'uk'}
      >
        UA
      </button>
    </div>
  )
}
