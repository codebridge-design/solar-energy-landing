import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, Sun } from 'lucide-react'
import Button from '../Button/Button.jsx'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './HeroSection.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const contentRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on background image
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Staggered text entrance on load
      const tl = gsap.timeline({ delay: 0.2 })
      tl.from(contentRef.current.querySelectorAll('[data-anim]'), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={sectionRef} className={styles.section}>
      {/* Background image with parallax */}
      <div ref={bgRef} className={styles.bg} />
      <div className={styles.overlay} />

      <div ref={contentRef} className={styles.content}>
        <div data-anim className={styles.badge}>
          <Sun size={16} />
          {t.hero.badge}
        </div>
        <h1 data-anim className={styles.title}>
          {t.hero.titleLine1}<br />{t.hero.titleLine2}
        </h1>
        <p data-anim className={styles.subtitle}>
          {t.hero.subtitle}
        </p>
        <div data-anim className={styles.actions}>
          <Button size="lg" onClick={() => document.querySelector('#results')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.hero.btnPrimary}
          </Button>
          <Button
            size="lg"
            variant="outline"
            style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}
            onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.hero.btnSecondary}
          </Button>
        </div>
        <div data-anim className={styles.scroll} aria-hidden="true">
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  )
}
