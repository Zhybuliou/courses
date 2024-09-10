import './social-link.scss';
import { CiFacebook, CiInstagram } from 'react-icons/ci';

export default function SocialLink() {
  return (
    <div className="social-link">
      <ul>
        <li>
          <a
            href="https://www.facebook.com/share/g/cKpndKssJuvoYVCX/?mibextid=K35XfP"
            target="_blank"
            rel="noreferrer"
          >
            <CiFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/lena_adams_ea?igsh=aTBoN21jOWxta3Zz"
            target="_blank"
            rel="noreferrer"
          >
            <CiInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}
