import { motion } from 'framer-motion';
import './flip.scss';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

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

export default function FlipCountdown() {
  return (
    <div className="flip-clock-wrapper">
      <motion.h2
        custom={1}
        variants={buttonAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        До Начала Курса Осталось
      </motion.h2>
      <FlipClockCountdown
        className="flip-clock"
        to={new Date('2024-10-29')}
        labels={['ДЕНЬ', 'ЧАС', 'МИНУТЫ', 'СЕКУНДЫ']}
        dividerStyle={{ color: '#012D5A', height: 1 }}
        separatorStyle={{ color: 'white', size: '6px' }}
        digitBlockStyle={{ fontWeight: 800 }}
        duration={0.5}
      >
        Курс уже идет
      </FlipClockCountdown>
    </div>
  );
}
