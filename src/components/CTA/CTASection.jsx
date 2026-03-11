import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Phone } from 'lucide-react'
import Button from '../Button/Button.jsx'
import styles from './CTASection.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-inner', {
        opacity: 0,
        scale: 0.94,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="cta" ref={sectionRef} className={styles.section}>
      <div className={`cta-inner ${styles.inner}`}>
        <p className={styles.eyebrow}>Ready to Start?</p>
        <h2 className={styles.title}>
          Turn your rooftop into a revenue stream
        </h2>
        <p className={styles.subtitle}>
          Get a free feasibility study and financial model for your site.
          Our engineers will assess your energy profile within 48 hours.
        </p>
        <div className={styles.actions}>
          <Button size="lg">
            Request Free Assessment
            <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline">
            <Phone size={18} />
            Schedule a Call
          </Button>
        </div>
        <p className={styles.note}>
          No commitment. Results in 48 hours. Available across Ukraine & EU.
        </p>
      </div>
    </section>
  )
}
