import { motion, AnimatePresence } from 'framer-motion';
import './carousel.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import ImageFeedback from '../../assets/feedback.webp';

const buttonAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

export default function CarouselFeedback() {
  return (
    <AnimatePresence>
      <div className="carousel-section">
        <motion.h3
          custom={1}
          variants={buttonAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          Отзывы
        </motion.h3>
        <div className="carousel-wrapper">
          <div className="carousel-content">
            <Splide
              options={{
                type: 'loop', // Loop back to the beginning when reaching the end
                autoScroll: {
                  pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
                  pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                  rewind: true, // Rewind to start when the end is reached
                  speed: 0.5, // Scrolling speed
                },
                drag: true,
                arrows: false, // Hide navigation arrows
                pagination: false, // Hide pagination dots
                fixedWidth: '340px', // Fixed width for each slide
                gap: '12px', // Gap between slides
              }}
              extensions={{ AutoScroll }} // Use the AutoScroll extension
            >
              <SplideSlide>
                <div className="feedback-card" style={{ backgroundImage: `url(${ImageFeedback})` }}>
                  <p>
                    Просто самая необходимая информация,особенно для тех,кто недавно
                    приехал!Профессионализм Лео и Лены как всегда на высоте и они делятся с нами.
                  </p>
                  <h4>Lyudmyla Hentsar</h4>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="feedback-card" style={{ backgroundImage: `url(${ImageFeedback})` }}>
                  <p>
                    Огромная благодарность всем спикерам курса по налогам за обучение на таком
                    высоком уровне, где теория беспрекословно встречается с практикой и многолетним
                    опытом.
                  </p>
                  <h4>Karyna Moroz</h4>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="feedback-card" style={{ backgroundImage: `url(${ImageFeedback})` }}>
                  <p>
                    Спасибо Вам Лена и Лео! Знания и советы из личного опыты, которые вы нам
                    передали, однозначно, лучшее на что мы могли расчитывать! Вы лучшие спикеры!
                  </p>
                  <h4>Svetlana Bichenova</h4>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="feedback-card" style={{ backgroundImage: `url(${ImageFeedback})` }}>
                  <p>
                    Я рекомендую всем, кто только начинает свой путь в налогах в этой стране и кто
                    хочет восполнить знания. Эта команда даёт больше,чем Вы заплатите.
                  </p>
                  <h4>Лена Матвеева- Голодная</h4>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
