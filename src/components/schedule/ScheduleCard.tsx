/* eslint-disable react/no-array-index-key */
import IScheduleCard from '../../interface/interface';

export default function ScheduleCard({ ...props }: IScheduleCard) {
  return (
    <div className="calendar-card">
      <p className="calendar-card-header">{props.date}</p>
      <p>{props.timeStart}</p>
      <div className="calendar-card-description">
        <ol>
          {props.description.map((description, i) => (
            <li key={i}>{description}</li>
          ))}
        </ol>
      </div>
      <div className="calendar-card-mentors">
        <p>Спикер:</p>
        <ul>
          {props.speaker.map((speaker, i) => (
            <li key={i}>{speaker}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
