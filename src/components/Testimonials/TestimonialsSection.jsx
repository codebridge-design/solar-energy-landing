import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './TestimonialsSection.module.css'

const STARS = 5

export default function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t.testimonials.eyebrow}</p>
          <h2 className={styles.title}>{t.testimonials.title}</h2>
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
          {t.testimonials.items.map(({ name, role, text }, i) => (
            <SwiperSlide key={i}>
              <div className={styles.card}>
                <div className={styles.rating}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={20}
                      className={j < STARS ? styles.star : styles.starMuted}
                      fill={j < STARS ? 'currentColor' : 'none'}
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
