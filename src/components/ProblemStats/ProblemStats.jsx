import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, Zap, AlertTriangle } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './ProblemStats.module.css'

gsap.registerPlugin(ScrollTrigger)

const STAT_DATA = [
  { icon: AlertTriangle, value: 68,   suffix: '%', color: 'var(--destructive)' },
  { icon: Zap,           value: 1200, suffix: 't', color: '#f59e0b' },
  { icon: TrendingUp,    value: 34,   suffix: '%', color: 'var(--primary)' },
]

export default function ProblemStats() {
  const sectionRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title fade in
      gsap.from('.problem-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Cards stagger
      gsap.from('.problem-card', {
        opacity: 0,
        y: 60,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.problem-cards',
          start: 'top 80%',
        },
      })

      // Count-up for each stat
      document.querySelectorAll('[data-counter]').forEach((el) => {
        const target = parseFloat(el.dataset.counter)
        const suffix = el.dataset.suffix || ''
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
          onUpdate() {
            el.textContent =
              target % 1 === 0
                ? Math.round(obj.val) + suffix
                : obj.val.toFixed(1) + suffix
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`problem-header ${styles.header}`}>
          <p className={styles.eyebrow}>{t.problem.eyebrow}</p>
          <h2 className={styles.title}>{t.problem.title}</h2>
          <p className={styles.subtitle}>{t.problem.subtitle}</p>
        </div>

        <ul className={`problem-cards ${styles.grid}`}>
          {STAT_DATA.map(({ icon: Icon, value, suffix, color }, i) => {
            const { label, description } = t.problem.stats[i]
            return (
              <li key={i} className={`problem-card ${styles.card}`}>
                <div className={styles.iconWrapper} style={{ '--icon-color': color }}>
                  <Icon size={28} />
                </div>
                <div
                  className={styles.counter}
                  data-counter={value}
                  data-suffix={suffix}
                  style={{ color }}
                >
                  0{suffix}
                </div>
                <p className={styles.cardLabel}>{label}</p>
                <p className={styles.cardDesc}>{description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
