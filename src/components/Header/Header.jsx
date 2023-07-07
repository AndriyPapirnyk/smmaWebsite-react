import './Header.css';
import Nav from './Nav/Nav';

function Header() {
  return (
    <header className='header'>
      <div className="header__container">
        <div className="header__logo">
          <h1><span>B</span>uzzify <span>SMM</span></h1>
        </div>
        <Nav/>
        <button className='header__call'>Call me back</button>
      </div>
    </header>
  );
}

export default Header;
