import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ClipboardList, Wrench, Zap, Settings, CheckCircle } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './InstallationTimeline.module.css'

gsap.registerPlugin(ScrollTrigger)

const PHASE_ICONS = [ClipboardList, Wrench, Settings, Zap, CheckCircle]

export default function InstallationTimeline() {
  const sectionRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Stagger-reveal each step card on scroll
      gsap.from('.timeline-step', {
        opacity: 0,
        x: -60,
        duration: 0.7,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.timeline-list',
          start: 'top 75%',
        },
      })

      // Animate the vertical progress line
      gsap.from('.timeline-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.timeline-list',
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="timeline" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`timeline-header ${styles.header}`}>
          <p className={styles.eyebrow}>{t.timeline.eyebrow}</p>
          <h2 className={styles.title}>{t.timeline.title}</h2>
          <p className={styles.subtitle}>{t.timeline.subtitle}</p>
        </div>

        <div className={`timeline-list ${styles.list}`}>
          <div className={`timeline-line ${styles.line}`} />
          {t.timeline.phases.map(({ phase, title, duration, description }, i) => {
            const Icon = PHASE_ICONS[i]
            return (
              <div key={i} className={`timeline-step ${styles.step}`}>
                <div className={styles.dot}>
                  <Icon size={18} />
                </div>
                <div className={styles.card}>
                  <div className={styles.cardMeta}>
                    <span className={styles.phase}>{phase}</span>
                    <span className={styles.duration}>{duration}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardDesc}>{description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
