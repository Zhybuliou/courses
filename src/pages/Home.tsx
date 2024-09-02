import ReactGA from 'react-ga4';
import Main from '../components/Main';
import Mentors from '../components/mentors/Mentors';
import Schedule from '../components/schedule/Schedule';

export default function Home() {
  ReactGA.send({
    hitType: 'pageview',
    page: '/',
    title: 'Home',
  });
  return (
    <>
      <Main />
      <Mentors />
      <Schedule />
    </>
  );
}
