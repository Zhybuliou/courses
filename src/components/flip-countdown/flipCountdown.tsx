import './flip.scss';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

export default function FlipCountdown() {
  return (
    <div className="flip-clock-wrapper">
      <h3>До Начала Курса Осталось</h3>
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
