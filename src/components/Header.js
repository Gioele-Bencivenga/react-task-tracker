/**
 * Base initially created by rafce (reactArrowFunctionExportComponent) in ES7 React Snippets extension.
 */
// import React from 'react' // was needed but is not anymore
import PropTypes from 'prop-types' // impt snippet

const Header = ({ title }) => {
    return (
        <header>
            <h1>Task Tracker: {title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Title: no title prop was passed in',
}

/**
 * Makes your code more robust and helps catch errors.
 * If you supply the wrong type it will still try to render it, 
 * but a warning will be displayed as well.
 */
Header.propTypes = {
    title: PropTypes.string, // you can use .isRequired if you want to display a warning when the prop is not supplied
}

export default Header
