import { Link } from 'react-router-dom' // needed to have Links that don't reload the page as soon as you switch

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
