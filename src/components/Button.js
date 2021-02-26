import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return <button onClick={onClick}
        style={{
            backgroundColor: color,
            border: '1px solid black',
        }}
        className='btn'>
        {text}
    </button>
}

Button.defaultProps = {
    text: 'Do Something',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
