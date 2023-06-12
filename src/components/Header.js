import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ title }) => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/home" className="navbar-brand">{title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            {location.pathname !== '/add-product' && (
              <li className="nav-item">
                <Link to="/add-product" className="nav-link">Add</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  title: 'Product Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
