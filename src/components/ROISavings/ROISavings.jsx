import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './ROISavings.module.css'

gsap.registerPlugin(ScrollTrigger)

const YEARS = [
  { year: 'Y1', savings: 1200, pct: 100 },
  { year: 'Y2', savings: 1236, pct: 103 },
  { year: 'Y3', savings: 1273, pct: 106 },
  { year: 'Y5', savings: 1350, pct: 112 },
  { year: 'Y10', savings: 1580, pct: 132 },
  { year: 'Y20', savings: 2100, pct: 175 },
  { year: 'Y30', savings: 2800, pct: 233 },
]

const SUMMARY = [
  { label: 'Total 30-yr savings', value: '€52M', color: 'var(--primary)' },
  { label: 'Simple payback period', value: '5.8 yrs', color: '#0ea5e9' },
  { label: 'IRR', value: '18.4%', color: '#8b5cf6' },
  { label: 'NPV (10% discount)', value: '€24.3M', color: '#f59e0b' },
]

export default function ROISavings() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.roi-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.roi-summary-item', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.roi-summary',
          start: 'top 85%',
        },
      })

      // Animate bar heights
      document.querySelectorAll('[data-bar-height]').forEach((bar) => {
        const pct = bar.dataset.barHeight
        gsap.fromTo(
          bar,
          { height: '0%', opacity: 0 },
          {
            height: pct + '%',
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.roi-chart',
              start: 'top 80%',
              once: true,
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`roi-header ${styles.header}`}>
          <p className={styles.eyebrow}>Financial Returns</p>
          <h2 className={styles.title}>ROI & Long-Term Savings</h2>
          <p className={styles.subtitle}>
            Annual savings grow as utility prices rise, while solar generation
            costs stay flat for 30 years.
          </p>
        </div>

        {/* Summary cards */}
        <ul className={`roi-summary ${styles.summary}`}>
          {SUMMARY.map(({ label, value, color }) => (
            <li key={label} className={`roi-summary-item ${styles.summaryCard}`}>
              <span className={styles.summaryValue} style={{ color }}>{value}</span>
              <span className={styles.summaryLabel}>{label}</span>
            </li>
          ))}
        </ul>

        {/* Bar chart */}
        <div className={`roi-chart ${styles.chart}`}>
          <div className={styles.chartBars}>
            {YEARS.map(({ year, savings, pct }) => (
              <div key={year} className={styles.barGroup}>
                <div className={styles.barWrap}>
                  <div
                    className={styles.bar}
                    data-bar-height={pct}
                    title={`€${savings.toLocaleString()}k`}
                  />
                </div>
                <span className={styles.barYear}>{year}</span>
              </div>
            ))}
          </div>
          <p className={styles.chartCaption}>Annual savings (€k) growing with utility inflation (3% per year assumption)</p>
        </div>
      </div>
    </section>
  )
}
