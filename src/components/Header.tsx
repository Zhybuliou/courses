import ImageLogo from '../assets/logo-solo.png';

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-content">
        <img src={ImageLogo} alt="Logo" width="100px" height="77px" />
      </div>
    </div>
  );
}
