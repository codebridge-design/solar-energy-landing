import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sun, Zap, Battery, Building2 } from 'lucide-react'
import styles from './HowItWorks.module.css'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    icon: Sun,
    title: 'Solar Capture',
    description:
      '2,400 monocrystalline panels convert sunlight into DC electricity with 22.8% efficiency.',
  },
  {
    icon: Zap,
    title: 'DC to AC Conversion',
    description:
      'String inverters convert DC power to grid-compatible 400V AC electricity at 98.6% efficiency.',
  },
  {
    icon: Battery,
    title: 'Storage & Grid Balance',
    description:
      '480 kWh battery storage absorbs excess generation and provides backup during outages.',
  },
  {
    icon: Building2,
    title: 'Distribution',
    description:
      'Clean energy flows directly to 312 buildings, with surplus sold back to the national grid.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

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
          <p className={styles.eyebrow}>The Technology</p>
          <h2 className={styles.title}>How Solar Power Works</h2>
          <p className={styles.subtitle}>
            From photon to kilowatt — four stages that turn sunlight into clean,
            affordable electricity for the entire district.
          </p>
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
            {STEPS.map(({ icon: Icon, title, description }, i) => (
              <li key={title} className={`hiw-step ${styles.step}`}>
                <div className={styles.stepNumber}>{i + 1}</div>
                <div className={styles.stepIcon}>
                  <Icon size={32} />
                </div>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepDesc}>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
