import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DollarSign, Shield, Leaf, TrendingUp } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './BenefitsSection.module.css'

gsap.registerPlugin(ScrollTrigger)

const BENEFIT_ICONS = [DollarSign, Shield, Leaf, TrendingUp]

export default function BenefitsSection() {
  const sectionRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.benefits-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.benefit-card', {
        opacity: 0,
        y: 60,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`benefits-header ${styles.header}`}>
          <p className={styles.eyebrow}>{t.benefits.eyebrow}</p>
          <h2 className={styles.title}>{t.benefits.title}</h2>
          <p className={styles.subtitle}>{t.benefits.subtitle}</p>
        </div>

        <ul className={`benefits-grid ${styles.grid}`}>
          {t.benefits.items.map(({ title, description }, i) => {
            const Icon = BENEFIT_ICONS[i]
            return (
              <li key={i} className={`benefit-card ${styles.card}`}>
                <div className={styles.iconWrapper}>
                  <Icon size={30} />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
