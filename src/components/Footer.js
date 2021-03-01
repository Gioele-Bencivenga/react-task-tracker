import { Link } from 'react-router-dom' // needed to have Links that don't reload the page as soon as you switch

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2021, Powered by ReactJS</p>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
        </footer>
    )
}

export default Footer
