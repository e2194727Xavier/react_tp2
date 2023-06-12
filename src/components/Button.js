import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Button = ({text, color, onClick})=>{
    return(
        <button 
        onClick={onClick}
        className={`btn btn-${color}`}> 
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'success' 
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;
