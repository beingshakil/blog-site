import './Navbar.css';
import navLogo from '/blog.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"> <img src={navLogo} alt="Logo" /> </Link>
        <Link to="/"> <h2>Home</h2> </Link>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <Link to="/">Post</Link>
          </li>
          <li>Trending</li>
        </ul>
        <input className="search-box" type="text" placeholder="Search" />
        <Link to="/login"> <button className="nav-login-btn">Login</button> </Link>
      </div>
    </nav>
  );
};

export default Navbar;
