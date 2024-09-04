import './imageCard.scss';
import ImageTeacher from '../../assets/mentors/team-1.webp';
import ImageTeacher2 from '../../assets/mentors/team-2.webp';
import ImageTeacher3 from '../../assets/mentors/team-3.webp';
import ImageTeacher4 from '../../assets/mentors/team-4.webp';
import ImageTeacher5 from '../../assets/mentors/team-5.webp';

export default function ImageCard() {
  return (
    <div className="image-card-wrapper">
      <div className="image-card" style={{ left: 30 }}>
        <div className="image-card-avatar" style={{ backgroundImage: `url(${ImageTeacher3})` }} />
      </div>
      <div className="image-card image-card-rotate-354" style={{ left: 230, top: -10 }}>
        <div className="image-card-avatar" style={{ backgroundImage: `url(${ImageTeacher4})` }} />
      </div>
      <div className="image-card image-card-rotate" style={{ top: 250, left: 30 }}>
        <div className="image-card-avatar" style={{ backgroundImage: `url(${ImageTeacher2})` }} />
      </div>
      <div className="image-card" style={{ top: 250, left: 230 }}>
        <div className="image-card-avatar" style={{ backgroundImage: `url(${ImageTeacher5})` }} />
      </div>
      <div className="image-card-circle" style={{ top: 130, left: 150 }}>
        <div
          className="image-card-circle-avatar"
          style={{ backgroundImage: `url(${ImageTeacher})` }}
        />
      </div>
    </div>
  );
}
