import { useEffect, useState } from 'react';
import './count-users.scss';
import axios from 'axios';
import Loading from '../../assets/loading-dots.gif';

export default function CountUsers() {
  const [csvData, setCsvData] = useState('');
  const sheetUrl =
    'https://docs.google.com/spreadsheets/d/19ATsywnBjcpNoHXC3dnByNTy6p91bISD6-RVzl8jKN8/pub?output=csv';

  useEffect(() => {
    async function fetchData() {
      await setCsvData('');
      axios
        .get(sheetUrl)
        .then((response) => {
          const res = response.data.split(',');
          setCsvData(res[1]);
        })
        .catch((error) => {
          console.error('Error fetching CSV data:', error);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="count-wrapper">
      <h3 className="neonText">Осталось Мест:</h3>
      <div className="text-wrapper">
        <p>
          {csvData || (
            <img
              src={Loading}
              alt="Logo"
              width="50px"
              height="60px"
              title="logo usa taxes"
              loading="lazy"
            />
          )}
        </p>
      </div>
    </div>
  );
}
