import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, DollarSign, Leaf, Building2 } from 'lucide-react'
import styles from './CaseStudyResults.module.css'

gsap.registerPlugin(ScrollTrigger)

const RESULTS = [
  {
    icon: Zap,
    value: 2.4,
    suffix: ' MW',
    label: 'Installed Capacity',
    detail: 'The largest commercial solar installation in the Kyiv region as of 2024.',
  },
  {
    icon: DollarSign,
    value: 1.2,
    suffix: 'M €',
    label: 'Annual Savings',
    detail: 'Net savings in Year 1, after accounting for O&M, insurance, and financing costs.',
  },
  {
    icon: Leaf,
    value: 847,
    suffix: 't',
    label: 'CO₂ Avoided / Year',
    detail: 'Equivalent to removing 184 diesel cars from the road permanently.',
  },
  {
    icon: Building2,
    value: 312,
    suffix: '',
    label: 'Buildings Powered',
    detail: 'Offices, retail, and logistics units across the entire Sunridge commercial district.',
  },
]

export default function CaseStudyResults() {
  const sectionRef = useRef(null)

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
          <p className={styles.eyebrow}>Measured Outcomes</p>
          <h2 className={styles.title}>Year 1 Results</h2>
          <p className={styles.subtitle}>
            Independently verified performance data from the first 12 months of operation.
          </p>
        </div>

        <ul className={`results-grid ${styles.grid}`}>
          {RESULTS.map(({ icon: Icon, value, suffix, label, detail }) => (
            <li key={label} className={`result-card ${styles.card}`}>
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
          ))}
        </ul>
      </div>
    </section>
  )
}
