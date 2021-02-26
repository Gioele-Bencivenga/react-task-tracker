/**
 * Base initially created by rafce (reactArrowFunctionExportComponent) in ES7 React Snippets extension.
 */
// import React from 'react' // was needed but is not anymore
import PropTypes from 'prop-types' // impt snippet
import Button from './Button' // https://stackoverflow.com/a/53328466/5847641

const Header = ({ title }) => {
    return (
        <header className='header' /*style={headerStyle}*/>
            <h1>Task Tracker: {title}</h1>
            <Button color='orangered' text='Add' />
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

/**
 * If you need to style the component here just 
 * do `style={headerStyle}` in the `<header>`.
 */
/*const headerStyle = {
    color: 'red',
    backgroundColor: 'black',
}*/

export default Header
