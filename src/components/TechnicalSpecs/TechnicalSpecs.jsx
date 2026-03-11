import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './TechnicalSpecs.module.css'

gsap.registerPlugin(ScrollTrigger)

const SPECS = [
  { label: 'Panel Efficiency', value: 22.8, max: 30, unit: '%', color: 'var(--primary)' },
  { label: 'Inverter Efficiency', value: 98.6, max: 100, unit: '%', color: '#0ea5e9' },
  { label: 'System Availability', value: 99.2, max: 100, unit: '%', color: '#8b5cf6' },
  { label: 'Annual Yield', value: 3200, max: 4000, unit: ' kWh/kWp', color: '#f59e0b' },
  { label: 'CO₂ Offset vs. Grid', value: 847, max: 1200, unit: ' tons/yr', color: '#10b981' },
  { label: 'Self-Consumption Rate', value: 94, max: 100, unit: '%', color: 'var(--primary)' },
]

const PANELS = [
  { label: 'Total panels installed', value: '2,400 units' },
  { label: 'Panel model', value: 'SunPower SPR-M440' },
  { label: 'Inverter model', value: 'SMA Sunny Tripower 25000TL' },
  { label: 'Battery storage', value: '480 kWh (LFP)' },
  { label: 'Monitoring system', value: 'SolarEdge Energy Hub' },
  { label: 'Warranty', value: '25 years performance' },
]

export default function TechnicalSpecs() {
  const sectionRef = useRef(null)

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
          <p className={styles.eyebrow}>Technical Data</p>
          <h2 className={styles.title}>System Specifications</h2>
          <p className={styles.subtitle}>
            Performance metrics and hardware specifications for the 2.4 MW Sunridge installation.
          </p>
        </div>

        <div className={`specs-columns ${styles.columns}`}>
          {/* Performance bars */}
          <div className={`specs-col ${styles.barsCol}`}>
            <h3 className={styles.colTitle}>Performance Metrics</h3>
            <ul className={styles.barList}>
              {SPECS.map(({ label, value, max, unit, color }) => {
                const pct = Math.round((value / max) * 100)
                return (
                  <li key={label} className={styles.barItem}>
                    <div className={styles.barMeta}>
                      <span className={styles.barLabel}>{label}</span>
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
            <h3 className={styles.colTitle}>System Components</h3>
            <ul className={styles.specList}>
              {PANELS.map(({ label, value }) => (
                <li key={label} className={styles.specItem}>
                  <span className={styles.specLabel}>{label}</span>
                  <span className={styles.specValue}>{value}</span>
                </li>
              ))}
            </ul>
            <div className={styles.certBadge}>
              IEC 61215 · IEC 61730 · MCS Certified · ISO 9001
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
