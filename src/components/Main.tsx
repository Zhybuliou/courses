import {
  FcGraduationCap,
  FcPlanner,
  FcMoneyTransfer,
  FcClock,
  FcSalesPerformance,
} from 'react-icons/fc';
import CallButton from './call-button/CallButton';
import ImageCard from './image-card/ImageCard';

export default function Main() {
  return (
    <div className="main-wrapper">
      <div className="main-content">
        <div className="main-text">
          <div className="main-wrapper-blocks">
            <div className="main-blocks-section">
              <h1>Обучение по программе: «Налоговый специалист в США».</h1>
              <div className="main-blocks">
                <div className="main-block">
                  <FcGraduationCap size="80px" />
                  <div className="main-block-content">
                    <p>Спикерами курса 5 Лицензированных специалиста.</p>
                  </div>
                </div>
                <div className="main-block">
                  <FcPlanner size={80} />
                  <div className="main-block-content">
                    <p>Длительность курса 18 занятий. Начало с 29 октября по 14 декабря.</p>
                  </div>
                </div>
                <div className="main-block">
                  <FcSalesPerformance size="60px" />
                  <div className="main-block-content">
                    <p>Скидки при раннем бронировании.</p>
                  </div>
                </div>
                <div className="main-block">
                  <FcClock size="80px" />
                  <div className="main-block-content">
                    <p>Длительность каждого урока 3-3,5 часа (с перерывом)</p>
                  </div>
                </div>
                <div className="main-block">
                  <FcMoneyTransfer size="60px" />
                  <div className="main-block-content">
                    <p>Стоимость курса 1700$.</p>
                  </div>
                </div>
              </div>
              <CallButton />
              <p>
                Payment for the provider service is non-refundable. If you cancel service more than
                5 days before course start , the payment will be fully refunded.
              </p>
            </div>
            <div className="main-image-block">
              <ImageCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
