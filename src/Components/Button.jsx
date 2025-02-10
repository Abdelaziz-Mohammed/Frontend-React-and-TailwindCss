
import PropTypes from 'prop-types'

function Button({ text, to }) {
  return (
    <a href={to}
       className="btn center-content h-[50px] w-[250px] text-white">
        {text}
    </a>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default Button


