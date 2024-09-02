import ReactGA from 'react-ga4';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Page404 from './pages/404';

export default function App() {
  ReactGA.initialize('G-YE91DTF7N0');
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}
