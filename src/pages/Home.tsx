import ReactGA from 'react-ga4';
import Main from '../components/Main';
import Mentors from '../components/mentors/Mentors';
import Schedule from '../components/schedule/Schedule';
import MetaTags from '../components/meta-tag/metaTag';
import Logo from '../assets/logo-solo.png';

export default function Home() {
  ReactGA.send({
    hitType: 'pageview',
    page: '/',
    title: 'Обучение по программе: «Налоговый специалист в США».',
  });
  return (
    <>
      <MetaTags
        title="Обучение по программе: «Налоговый специалист в США»."
        description="👨‍🎓 Спикеры курса - 5 лицензированных cпециалистов. 🤑 Запись каждого урока остается для просмотра.  Длительность - 18 занятий. 💰 Стоимость курса 1700$."
        image={Logo}
        name="Налоги в сша"
      />
      <Main />
      <Mentors />
      <Schedule />
    </>
  );
}
