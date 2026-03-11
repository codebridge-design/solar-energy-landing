import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DollarSign, Shield, Leaf, TrendingUp } from 'lucide-react'
import styles from './BenefitsSection.module.css'

gsap.registerPlugin(ScrollTrigger)

const BENEFITS = [
  {
    icon: DollarSign,
    title: '30-Year ROI',
    description:
      'With zero fuel costs and a 25-year performance warranty, the system pays back its investment in under 6 years, then generates pure profit.',
  },
  {
    icon: Shield,
    title: 'Energy Independence',
    description:
      'Shielded from utility price volatility. The district now generates 94% of its own electricity, eliminating exposure to market swings.',
  },
  {
    icon: Leaf,
    title: 'Carbon Neutral Operations',
    description:
      'Offsetting 847 tons of CO₂ per year is equivalent to planting 38,500 trees annually — a tangible commitment to the Paris Agreement.',
  },
  {
    icon: TrendingUp,
    title: 'Property Value Uplift',
    description:
      'Commercial properties with on-site solar generation command 8–12% higher valuations and attract premium tenants focused on ESG goals.',
  },
]

export default function BenefitsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.benefits-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.benefit-card', {
        opacity: 0,
        y: 60,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`benefits-header ${styles.header}`}>
          <p className={styles.eyebrow}>Why Solar</p>
          <h2 className={styles.title}>The Benefits That Matter</h2>
          <p className={styles.subtitle}>
            Beyond the numbers — how commercial solar transforms a business's
            relationship with energy, cost, and responsibility.
          </p>
        </div>

        <ul className={`benefits-grid ${styles.grid}`}>
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <li key={title} className={`benefit-card ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <Icon size={30} />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
