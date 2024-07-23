import PropTypes from "prop-types";
import "./Button.css";

const Button = ({type}) => {
    return <button className={"btn " + type}>{type}</button>
}

Button.propTypes = {
    type: PropTypes.string.isRequired
}

export default Button;