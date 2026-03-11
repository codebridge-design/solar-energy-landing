import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sun, Zap, Battery, Building2 } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './HowItWorks.module.css'

gsap.registerPlugin(ScrollTrigger)

const STEP_ICONS = [Sun, Zap, Battery, Building2]

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hiw-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Animate SVG connector line via stroke-dashoffset
      const path = lineRef.current
      if (path) {
        const length = path.getTotalLength()
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.hiw-steps',
            start: 'top 75%',
          },
        })
      }

      // Step cards stagger
      gsap.from('.hiw-step', {
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hiw-steps',
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`hiw-header ${styles.header}`}>
          <p className={styles.eyebrow}>{t.howItWorks.eyebrow}</p>
          <h2 className={styles.title}>{t.howItWorks.title}</h2>
          <p className={styles.subtitle}>{t.howItWorks.subtitle}</p>
        </div>

        <div className={styles.diagramWrapper}>
          {/* SVG connector line (visible on desktop) */}
          <svg
            className={styles.connector}
            viewBox="0 0 900 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              ref={lineRef}
              d="M 112 40 H 788"
              stroke="#16a34a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 6"
            />
            {/* Arrow markers */}
            <polygon points="780,33 793,40 780,47" fill="#16a34a" />
            <polygon points="290,33 303,40 290,47" fill="#16a34a" />
            <polygon points="535,33 548,40 535,47" fill="#16a34a" />
          </svg>

          <ul className={`hiw-steps ${styles.steps}`}>
            {t.howItWorks.steps.map(({ title, description }, i) => {
              const Icon = STEP_ICONS[i]
              return (
                <li key={i} className={`hiw-step ${styles.step}`}>
                  <div className={styles.stepNumber}>{i + 1}</div>
                  <div className={styles.stepIcon}>
                    <Icon size={32} />
                  </div>
                  <h3 className={styles.stepTitle}>{title}</h3>
                  <p className={styles.stepDesc}>{description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
