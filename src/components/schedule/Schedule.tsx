import courses from '../../data/course';
import IScheduleCard from '../../interface/interface';
import CallButton from '../call-button/CallButton';
import './schedule.scss';
import ScheduleCard from './ScheduleCard';

export default function Schedule() {
  return (
    <section className="schedule-wrapper">
      <h3>Расписание Курса</h3>
      <div className="calendar-cards">
        {courses.map((day: IScheduleCard) => (
          <ScheduleCard
            key={day.id}
            date={day.date}
            id={day.id}
            description={day.description}
            timeStart={day.timeStart}
            speaker={day.speaker}
          />
        ))}
      </div>
      <CallButton />
      <p className="text-payment">
        Payment for the provider service is non-refundable. If you cancel service more than 21
        business day before course start , the payment will be fully refunded.
      </p>
    </section>
  );
}
