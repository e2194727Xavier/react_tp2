import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajouter cette ligne pour importer le style Bootstrap

const About = () => {
    return (
        <div className="container">
            <div className="py-5">
                <h4 className="text-primary">About Our E-commerce Store</h4>
                <p className="lead">
                    Welcome to our e-commerce store. We have been in the business for over 10 years, offering a wide range of products across different categories.
                </p>
                <p className="lead">
                    Our aim is to provide our customers with a seamless online shopping experience. We ensure high quality products and excellent customer service.
                </p>
                <p className="lead">
                    We continually expand our product range and offer great deals. We hope you enjoy your shopping experience with us.
                </p>
                <Link to="/home" className="btn btn-secondary">Go back</Link>
            </div>
        </div>
    );
}

export default About;

