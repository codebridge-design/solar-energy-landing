import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ClipboardList, Wrench, Zap, Settings, CheckCircle } from 'lucide-react'
import styles from './InstallationTimeline.module.css'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    icon: ClipboardList,
    phase: 'Phase 1',
    title: 'Site Survey & Design',
    duration: '3 weeks',
    description:
      'Structural analysis, shading studies, energy consumption audit, and custom system design using PVsyst simulation software.',
  },
  {
    icon: Wrench,
    phase: 'Phase 2',
    title: 'Permitting & Procurement',
    duration: '6 weeks',
    description:
      'Grid connection agreement, building permits, equipment ordering. SunPower panels and SMA inverters shipped from EU warehouses.',
  },
  {
    icon: Settings,
    phase: 'Phase 3',
    title: 'Structural & Electrical Install',
    duration: '4 weeks',
    description:
      '24 installation engineers mounted 2,400 panels across three rooftops. DC cabling, combiner boxes, and inverter rooms fitted.',
  },
  {
    icon: Zap,
    phase: 'Phase 4',
    title: 'Grid Connection & Testing',
    duration: '1 week',
    description:
      'DNO inspection, protection relay settings, battery commissioning, and full-load system test at 100% output.',
  },
  {
    icon: CheckCircle,
    phase: 'Phase 5',
    title: 'Handover & Monitoring',
    duration: 'Ongoing',
    description:
      'Client training, live monitoring dashboard, 25-year O&M contract activated. System operating at 102% of projected yield in Year 1.',
  },
]

export default function InstallationTimeline() {
  const sectionRef = useRef(null)

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
          <p className={styles.eyebrow}>Project Delivery</p>
          <h2 className={styles.title}>From Contract to Clean Power</h2>
          <p className={styles.subtitle}>
            The Sunridge installation completed in 14 weeks — from first site
            visit to live grid export.
          </p>
        </div>

        <div className={`timeline-list ${styles.list}`}>
          <div className={`timeline-line ${styles.line}`} />
          {STEPS.map(({ icon: Icon, phase, title, duration, description }) => (
            <div key={title} className={`timeline-step ${styles.step}`}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
