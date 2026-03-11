import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './TestimonialsSection.module.css'

const TESTIMONIALS = [
  {
    name: 'Olena Kovalenko',
    role: 'Facility Manager, Sunridge Complex',
    stars: 5,
    text: 'The installation team were exceptional — zero disruption to tenants during a 4-week install. We were live and exporting to the grid 2 days ahead of schedule.',
  },
  {
    name: 'Dmytro Petrenko',
    role: 'CFO, Sunridge Holdings',
    stars: 5,
    text: 'The financial model was exactly as projected. In Month 1 we saved €98,000 compared to the same period last year. The payback calculation we agreed on at signature is tracking perfectly.',
  },
  {
    name: 'Iryna Savchenko',
    role: 'Head of Sustainability, Sunridge Group',
    stars: 5,
    text: "We've gone from being a major carbon emitter to a net-positive energy producer. Our ESG report this year will show an 847-tonne CO₂ reduction — a milestone I didn't think we'd reach until 2027.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Client Voices</p>
          <h2 className={styles.title}>What the Client Said</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
          className={styles.slider}
        >
          {TESTIMONIALS.map(({ name, role, stars, text }) => (
            <SwiperSlide key={name}>
              <div className={styles.card}>
                <div className={styles.rating}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < stars ? styles.star : styles.starMuted}
                      fill={i < stars ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className={styles.text}>"{text}"</p>
                <div>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.role}>{role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
