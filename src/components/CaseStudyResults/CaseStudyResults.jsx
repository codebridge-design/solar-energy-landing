import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, DollarSign, Leaf, Building2 } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './CaseStudyResults.module.css'

gsap.registerPlugin(ScrollTrigger)

const RESULT_DATA = [
  { icon: Zap,        value: 2.4, suffix: ' MW' },
  { icon: DollarSign, value: 1.2, suffix: 'M €' },
  { icon: Leaf,       value: 847, suffix: 't'   },
  { icon: Building2,  value: 312, suffix: ''    },
]

export default function CaseStudyResults() {
  const sectionRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.results-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.result-card', {
        opacity: 0,
        scale: 0.9,
        y: 40,
        duration: 0.6,
        stagger: 0.12,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: '.results-grid',
          start: 'top 80%',
        },
      })

      document.querySelectorAll('[data-result-val]').forEach((el) => {
        const target = parseFloat(el.dataset.resultVal)
        const suffix = el.dataset.resultSuffix || ''
        const isDecimal = target % 1 !== 0
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
            el.textContent = (isDecimal ? obj.val.toFixed(1) : Math.round(obj.val)) + suffix
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="results" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`results-header ${styles.header}`}>
          <p className={styles.eyebrow}>{t.results.eyebrow}</p>
          <h2 className={styles.title}>{t.results.title}</h2>
          <p className={styles.subtitle}>{t.results.subtitle}</p>
        </div>

        <ul className={`results-grid ${styles.grid}`}>
          {RESULT_DATA.map(({ icon: Icon, value, suffix }, i) => {
            const { label, detail } = t.results.cards[i]
            return (
              <li key={i} className={`result-card ${styles.card}`}>
                <div className={styles.iconWrapper}>
                  <Icon size={28} />
                </div>
                <div
                  className={styles.counter}
                  data-result-val={value}
                  data-result-suffix={suffix}
                >
                  0{suffix}
                </div>
                <p className={styles.cardLabel}>{label}</p>
                <p className={styles.cardDetail}>{detail}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
