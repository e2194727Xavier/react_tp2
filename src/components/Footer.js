import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer bg-light mt-auto py-3">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 text-md-right">
            <small>&copy; {new Date().getFullYear()} - Mon Ecommerce</small>
          </div>
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus eget urna mollis tempor.
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
