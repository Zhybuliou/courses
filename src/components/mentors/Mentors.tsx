import './mentors.scss';
import ImageTeacher from '../../assets/mentors/team-1.jpeg';
import ImageTeacher2 from '../../assets/mentors/team-2.jpeg';
import ImageTeacher3 from '../../assets/mentors/team-3.jpeg';
import ImageTeacher4 from '../../assets/mentors/team-4.jpeg';

export default function Mentors() {
  return (
    <section className="mentors-wrapper">
      <div className="teachers">
        <div className="teachers-header">
          <h3>Обучение Проводят</h3>
        </div>
        <div className="teachers-cards">
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher})` }}
            />
            <h5>
              Lena
              <br /> Adams
            </h5>
            <p>Enrolled Agent</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher3})` }}
            />
            <h5>
              Leo
              <br /> Gordon
            </h5>
            <p>Enrolled Agent</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher4})` }}
            />
            <h5>Dmytro Arshynov</h5>
            <p>Enrolled Agent</p>
            <p>Tax Resolution Specialist</p>
            <p>Certified Tax Coach</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher2})` }}
            />
            <h5>Alexander Kandelaki</h5>
            <p>Financial Advisor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
