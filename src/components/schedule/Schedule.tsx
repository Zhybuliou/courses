import { motion } from 'framer-motion';
import courses from '../../data/course';
import IScheduleCard from '../../interface/interface';
import CallButton from '../call-button/CallButton';
import './schedule.scss';
import ScheduleCard from './ScheduleCard';

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

export default function Schedule() {
  return (
    <section className="schedule-wrapper">
      <motion.h3
        custom={1}
        variants={buttonAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        Расписание Курса
      </motion.h3>
      <div className="calendar-cards">
        {courses.map((day: IScheduleCard) => (
          <motion.div
            custom={1}
            variants={blockAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={day.id}
            className="calendar-card"
          >
            <ScheduleCard
              date={day.date}
              id={day.id}
              description={day.description}
              timeStart={day.timeStart}
              speaker={day.speaker}
            />
          </motion.div>
        ))}
      </div>
      <CallButton />
      <p className="text-payment">
        Payment for the provider service is non-refundable. If you cancel service more than 21 days
        before course start , the payment will be fully refunded.
      </p>
    </section>
  );
}
