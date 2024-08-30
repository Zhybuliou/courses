import './carousel.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import ImageFeedback from '../../assets/feedback.webp';

export default function CarouselFeedback() {
  return (
    <div className="carousel-section">
      <h3>Отзывы</h3>
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
              fixedWidth: '330px', // Fixed width for each slide
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
                <h5>Lyudmyla Hentsar</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="feedback-card" style={{ backgroundImage: `url(${ImageFeedback})` }}>
                <p>
                  Огромная благодарность всем спикерам курса по налогам за обучение на таком высоком
                  уровне, где теория беспрекословно встречается с практикой и многолетним опытом.
                </p>
                <h5>Karyna Moroz</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="feedback-card" style={{ backgroundImage: `url(${ImageFeedback})` }}>
                <p>
                  Спасибо Вам Лена и Лео! Знания и советы из личного опыты, которые вы нам передали,
                  однозначно, лучшее на что мы могли расчитывать! Вы лучшие спикеры!
                </p>
                <h5>Svetlana Bichenova</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="feedback-card" style={{ backgroundImage: `url(${ImageFeedback})` }}>
                <p>
                  Я рекомендую всем, кто только начинает свой путь в налогах в этой стране и кто
                  хочет восполнить знания. Эта команда даёт больше,чем Вы заплатите.
                </p>
                <h5>Лена Матвеева- Голодная</h5>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
}
