import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Phone } from 'lucide-react'
import Button from '../Button/Button.jsx'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './CTASection.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-inner', {
        opacity: 0,
        scale: 0.94,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="cta" ref={sectionRef} className={styles.section}>
      <div className={`cta-inner ${styles.inner}`}>
        <p className={styles.eyebrow}>{t.cta.eyebrow}</p>
        <h2 className={styles.title}>{t.cta.title}</h2>
        <p className={styles.subtitle}>{t.cta.subtitle}</p>
        <div className={styles.actions}>
          <Button size="lg">
            {t.cta.btnPrimary}
            <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline">
            <Phone size={18} />
            {t.cta.btnSecondary}
          </Button>
        </div>
        <p className={styles.note}>{t.cta.note}</p>
      </div>
    </section>
  )
}
