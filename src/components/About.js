import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <h5>Simple to-do list created to learn some React.</h5>
            <h6>By <a href="http://gioele-bencivenga.github.io">Gioele Bencivenga</a></h6>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
