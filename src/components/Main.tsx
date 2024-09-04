import { motion } from 'framer-motion';
import {
  FcGraduationCap,
  FcPlanner,
  FcMoneyTransfer,
  FcClock,
  FcSalesPerformance,
  FcCamcorderPro,
} from 'react-icons/fc';
import CallButton from './call-button/CallButton';
import ImageCard from './image-card/ImageCard';
import CarouselFeedback from './carousel/carouselFeedback';
import FlipCountdown from './flip-countdown/flipCountdown';
import CountUsers from './count-users/countUsers';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};
const blockAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};
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

export default function Main() {
  return (
    <div className="main-wrapper">
      <div className="main-content">
        <div className="main-text">
          <div className="main-wrapper-blocks">
            <div className="main-blocks-section">
              <motion.h1
                custom={1}
                variants={textAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Обучение по программе: «Налоговый специалист в США».
              </motion.h1>
              <div className="main-blocks">
                <motion.div
                  custom={1}
                  variants={blockAnimation}
                  initial="hidden"
                  whileInView="visible"
                  className="main-block"
                  viewport={{ once: true }}
                >
                  <FcGraduationCap size="80px" />
                  <div className="main-block-content">
                    <p>Спикеры курса - 5 лицензированных cпециалистов.</p>
                  </div>
                </motion.div>
                <motion.div
                  custom={1.5}
                  variants={blockAnimation}
                  initial="hidden"
                  whileInView="visible"
                  className="main-block"
                  viewport={{ once: true }}
                >
                  <FcPlanner size={80} />
                  <div className="main-block-content">
                    <p>
                      Длительность - 18 занятий. Начало 29 октября в 12.00 EST(Нью-Йорк, Майами).
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  custom={2}
                  variants={blockAnimation}
                  initial="hidden"
                  whileInView="visible"
                  className="main-block"
                  viewport={{ once: true }}
                >
                  <FcSalesPerformance size="60px" />
                  <div className="main-block-content">
                    <p>Скидки при раннем бронировании.</p>
                  </div>
                </motion.div>
                <motion.div
                  custom={2.5}
                  variants={blockAnimation}
                  initial="hidden"
                  whileInView="visible"
                  className="main-block"
                  viewport={{ once: true }}
                >
                  <FcClock size="80px" />
                  <div className="main-block-content">
                    <p>Длительность каждого урока 3-3,5 часа (с перерывом)</p>
                  </div>
                </motion.div>
                <motion.div
                  custom={3}
                  variants={blockAnimation}
                  initial="hidden"
                  whileInView="visible"
                  className="main-block"
                  viewport={{ once: true }}
                >
                  <FcMoneyTransfer size="50px" />
                  <div className="main-block-content">
                    <p>Стоимость курса 1700$.</p>
                  </div>
                </motion.div>
                <motion.div
                  custom={3.5}
                  variants={blockAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="main-block"
                >
                  <FcCamcorderPro size="60px" />
                  <div className="main-block-content">
                    <p>Запись каждого урока остается для просмотра.</p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                custom={4}
                variants={buttonAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <CallButton />
                <p className="text-payment">
                  Payment for the provider service is non-refundable. If you cancel service more
                  than 21 days before course start , the payment will be fully refunded.
                </p>
              </motion.div>
            </div>
            <div className="main-image-block">
              <ImageCard />
            </div>
          </div>
        </div>
        <FlipCountdown />
        <CountUsers />
        <CarouselFeedback />
      </div>
    </div>
  );
}
