import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './TechnicalSpecs.module.css'

gsap.registerPlugin(ScrollTrigger)

const SPECS = [
  { value: 22.8, max: 30,   unit: '%',       color: 'var(--primary)' },
  { value: 98.6, max: 100,  unit: '%',       color: '#0ea5e9' },
  { value: 99.2, max: 100,  unit: '%',       color: '#8b5cf6' },
  { value: 3200, max: 4000, unit: ' kWh/kWp', color: '#f59e0b' },
  { value: 847,  max: 1200, unit: ' tons/yr', color: '#10b981' },
  { value: 94,   max: 100,  unit: '%',       color: 'var(--primary)' },
]

const PANEL_VALUES = [
  '2,400 units',
  'SunPower SPR-M440',
  'SMA Sunny Tripower 25000TL',
  '480 kWh (LFP)',
  'SolarEdge Energy Hub',
  '25 years performance',
]

export default function TechnicalSpecs() {
  const sectionRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.specs-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.specs-col', {
        opacity: 0,
        x: (i) => (i === 0 ? -50 : 50),
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.specs-columns',
          start: 'top 80%',
        },
      })

      // Animate progress bar fills
      document.querySelectorAll('[data-bar-pct]').forEach((bar) => {
        const pct = bar.dataset.barPct
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: pct + '%',
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
              once: true,
            },
          }
        )
      })

      // Count-up for spec values next to bars
      document.querySelectorAll('[data-spec-val]').forEach((el) => {
        const target = parseFloat(el.dataset.specVal)
        const suffix = el.dataset.specSuffix || ''
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
          onUpdate() {
            el.textContent = (target % 1 === 0 ? Math.round(obj.val) : obj.val.toFixed(1)) + suffix
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`specs-header ${styles.header}`}>
          <p className={styles.eyebrow}>{t.specs.eyebrow}</p>
          <h2 className={styles.title}>{t.specs.title}</h2>
          <p className={styles.subtitle}>{t.specs.subtitle}</p>
        </div>

        <div className={`specs-columns ${styles.columns}`}>
          {/* Performance bars */}
          <div className={`specs-col ${styles.barsCol}`}>
            <h3 className={styles.colTitle}>{t.specs.colPerformance}</h3>
            <ul className={styles.barList}>
              {SPECS.map(({ value, max, unit, color }, i) => {
                const pct = Math.round((value / max) * 100)
                return (
                  <li key={i} className={styles.barItem}>
                    <div className={styles.barMeta}>
                      <span className={styles.barLabel}>{t.specs.specLabels[i]}</span>
                      <span
                        className={styles.barValue}
                        data-spec-val={value}
                        data-spec-suffix={unit}
                        style={{ color }}
                      >
                        0{unit}
                      </span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        data-bar-pct={pct}
                        style={{ background: color }}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Panel specs table */}
          <div className={`specs-col ${styles.tableCol}`}>
            <h3 className={styles.colTitle}>{t.specs.colComponents}</h3>
            <ul className={styles.specList}>
              {PANEL_VALUES.map((value, i) => (
                <li key={i} className={styles.specItem}>
                  <span className={styles.specLabel}>{t.specs.panelLabels[i]}</span>
                  <span className={styles.specValue}>{value}</span>
                </li>
              ))}
            </ul>
            <div className={styles.certBadge}>{t.specs.certBadge}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
