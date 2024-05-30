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
          <h3>Ведущие вебинара</h3>
        </div>
        <div className="teachers-cards">
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher})` }}
            />
            <h5>
              Лена
              <br /> Адамс
            </h5>
            <p>Зарегистрированный Агент</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher2})` }}
            />
            <h5>Александр Канделаки</h5>
            <p>Финансовый Консультант</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher3})` }}
            />
            <h5>
              Лео
              <br /> Гордон
            </h5>
            <p>Зарегистрированный Агент</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher4})` }}
            />
            <h5>Дмитрий Аршинов</h5>
            <p>Зарегистрированный Агент</p>
            <p>Cпециалист по Налоговому Разрешению</p>
            <p>Cертифицированный налоговый тренер</p>
          </div>
        </div>
      </div>
    </section>
  );
}
