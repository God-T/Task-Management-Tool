import PropTypes from 'prop-types';

const Button = ({ BGcolor, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: BGcolor }}
            className='btn'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    BGcolor: 'black'
}

Button.protoTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
