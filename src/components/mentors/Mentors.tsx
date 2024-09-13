import './mentors.scss';
import { Link } from 'react-router-dom';
import ImageTeacher from '../../assets/mentors/team-1.webp';
import ImageTeacher2 from '../../assets/mentors/team-2.webp';
import ImageTeacher3 from '../../assets/mentors/team-3.webp';
import ImageTeacher4 from '../../assets/mentors/team-4.webp';
import ImageTeacher5 from '../../assets/mentors/team-5.webp';

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
            <h4>
              Lena
              <br /> Adams
            </h4>
            <p>Enrolled Agent</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher3})` }}
            />
            <h4>
              Leo
              <br /> Gordon
            </h4>
            <p>Enrolled Agent</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher4})` }}
            />
            <h4>Dmytro Arshynov</h4>
            <p>Enrolled Agent</p>
            <p>Tax Resolution Specialist</p>
            <p>Certified Tax Coach</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher2})` }}
            />
            <h4>Alexander Kandelaki</h4>
            <p>Guest speaker</p>
            <p>Financial Advisor</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher5})` }}
            />
            <h4>Oleksandra Palmer</h4>
            <p>Guest speaker</p>
            <p>Mortgage Loan Officer NMLS1561169</p>
            <p>Lending Capital Group Inc NMLS1680087</p>
            <a href="http://www.lcgloans.com/opalmer" target="_blank" rel="noreferrer">
              http://www.lcgloans.com/opalmer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
