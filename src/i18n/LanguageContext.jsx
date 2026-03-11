import { createContext, useState, useContext } from 'react'
import en from './locales/en.js'
import uk from './locales/uk.js'

const LOCALES = { en, uk }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  const switchLang = (next) => {
    localStorage.setItem('lang', next)
    setLang(next)
  }

  return (
    <LanguageContext.Provider value={{ lang, t: LOCALES[lang], switchLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
