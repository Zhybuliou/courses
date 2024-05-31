import React from 'react';
import {
  FcGraduationCap,
  FcPlanner,
  FcConferenceCall,
  FcMoneyTransfer,
  FcSportsMode,
} from 'react-icons/fc';
import ImageWomen from '../assets/women.png';
import CallButton from './call-button/CallButton';

export default function Main() {
  return (
    <div className="main-wrapper">
      <div className="main-content">
        <div className="main-text">
          <h1>Обучение по программе: «Налоговый специалист в США».</h1>
          <p>
            Чтобы попасть на курс, кроме оплаты, необходимо пройти бесплатное 15 минутное
            собеседование с Lena Adams, через Zoom платформу, где вы получите ответы на все свои
            вопросы касательно курса, а также условия дальнейшего сотрудничества.
          </p>
          <div className="main-wrapper-blocks">
            <div className="main-blocks-section">
              <div className="main-blocks">
                <div className="main-block">
                  <FcGraduationCap size="180px" />
                  <div className="main-block-content">
                    <p>
                      Спикерами курса будут 3 (Три) Лицензированных специалиста от IRS, а также
                      Лицензированный Финансовый консультант.
                    </p>
                  </div>
                </div>
                <div className="main-block">
                  <FcPlanner size={80} />
                  <div className="main-block-content">
                    <p>Длительность курса 15 занятий. Начало с 1 июля по 16 августа.</p>
                  </div>
                </div>
                <div className="main-block">
                  <FcConferenceCall size="80px" />
                  <div className="main-block-content">
                    <p>Количество участников ограничено - 50 человек.</p>
                  </div>
                </div>
                <div className="main-block">
                  <FcMoneyTransfer size="140px" />
                  <div className="main-block-content">
                    <p>
                      Стоимость курса 1250$, при записи,прохождении интервью и оплате до 17 июня,
                      потом цена 1500$.
                    </p>
                  </div>
                </div>
                <div className="main-block">
                  <FcSportsMode size="80px" />
                  <div className="main-block-content">
                    <p>Начало обучения - 1 Июля 2024 года.</p>
                  </div>
                </div>
              </div>
              <CallButton />
            </div>
            <div className="main-image-block">
              <img src={ImageWomen} alt="women" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
