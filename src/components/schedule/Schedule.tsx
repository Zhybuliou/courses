import CallButton from '../call-button/CallButton';
import './schedule.scss';

export default function Schedule() {
  return (
    <section className="schedule-wrapper">
      <h3>Расписание Курса</h3>
      <div className="calendar-cards">
        <div className="calendar-card">
          <h2>День 1 – 07.01.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Работа с данными клиента и ответственность бухгалтера. Основы кода этики.</li>
              <li>EFIN/ERO/PTIN.</li>
              <li>Базовые налоговые формы для подготовки декларации. Список документов.</li>
              <li>Сроки подачи и штрафы.</li>
              <li>
                В каких случаях обязательно подавать на продление. Нужно ли подавать отдельно штат.
              </li>
              <li>Штаты без налога.</li>
              <li>Структура налоговой декларации физ.лица.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Leo Gordon - Enrolled Agent</li>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 2 – 07.03.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Определение резидентства.</li>
              <li>Подавать или не подавать налоговую декларацию?</li>
              <li>Особенности декларации первого года.</li>
              <li>Декларация нерезидента. Форма 1040-NR и приложения к ней.</li>
              <li>Статус подачи декларации.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 3 – 07.08.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Ответы на вопросы. Разбор домашнего задания и тестов.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Leo Gordon - Enrolled Agent</li>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 4 – 07.10.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Зависимые (dependents).</li>
              <li>Налоговый кредит (refundable/non-refundable).</li>
              <li>Налоговый вычет (стандартный / детальный).</li>
              <li>Детальный вычет - Schedule A. Когда выгодно использовать.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 5 – 07.12.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Виды дохода. Что облагается налогом, а что нет.</li>
              <li>Подарки.</li>
              <li>Доход от инвестиций.</li>
              <li>Опционы (Stock option)</li>
              <li>Дивиденды (Qualified / non-qualified).</li>
              <li>Транзакции с криптовалютой. Майнинг. Стейкинг. Что делать, если нет форм?</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 6 – 07.15.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Ответы на вопросы. Разбор домашнего задания и тестов.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Leo Gordon - Enrolled Agent</li>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 7 – 07.17.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Доход от самозанятости – Schedule C.</li>
              <li>Отличие бизнеса от хобби.</li>
              <li>
                Какие расходы можно списать в зависимости от типа бизнеса. Рассмотрим самые
                популярные профессии.
              </li>
              <li>Активы бизнеса и правила амортизации. Определение базовой стоимости.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 8 – 07.19.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Schedule E – доход от партнерства или S Corp.</li>
              <li>Доход от аренды. Schedule E vs Schedule C.</li>
              <li>Продажа недвижимости. Определение базовой стоимости.</li>
              <li>Like-kind exchange</li>
              <li>Real-estate professional – особые правила.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 9 – 07.22.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Ответы на вопросы. Разбор домашнего задания и тестов.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Leo Gordon - Enrolled Agent</li>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 10 – 07.24.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Иностранный доход.</li>
              <li>Иностранные счета (FBAR vs 8938).</li>
              <li>Формы 1116 и 2555.</li>
              <li>Кому нужен ITIN. W-7.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 11 – 07.26.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Корректировка декларации. 1040-X.</li>
              <li>Транскрипты IRS.</li>
              <li>Авансовые платежи.</li>
              <li>Особенности деклараций штатов и сертификация налоговых специалистов.</li>
              <li>Электронная отправка декларации в IRS и в штат.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 12 – 08.05.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Ответы на вопросы. Разбор домашнего задания и тестов.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Leo Gordon - Enrolled Agent</li>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 13 – 08.07.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Пенсионные планы и страховки.</li>
              <li>Marketplace health insurance (Obamacare).</li>
              <li>HSA/FSA.</li>
              <li>Финансовое планирование.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Alexander Kandelaki - Financial Advisor</li>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 14 – 08.09.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Письма от IRS.</li>
              <li>Аудит.</li>
              <li>CAA для получения ITIN.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Leo Gordon - Enrolled Agent</li>
              <li>Lena Adams - Enrolled Agent</li>
              <li>
                Dmytro Arshynov - Enrolled Agent,
                <br />
                Tax Resolution Specialist,
                <br />
                Certified Tax Coach
              </li>
            </ul>
          </div>
        </div>
        <div className="calendar-card">
          <h2>День 15 – 08.16.2024</h2>
          <div className="calendar-card-description">
            <ol>
              <li>Ответы на вопросы. Разбор финального теста.</li>
            </ol>
          </div>
          <div className="calendar-card-mentors">
            <h5>Спикеры:</h5>
            <ul>
              <li>Leo Gordon - Enrolled Agent</li>
              <li>Lena Adams - Enrolled Agent</li>
            </ul>
          </div>
        </div>
      </div>
      <CallButton />
    </section>
  );
}
