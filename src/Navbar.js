// Use <Link> instead of <a> to prevent requesting to the server
// By only looking the url will make the web respond faster
import {Link} from 'react-router-dom';

// Replace <a herf="/" >Home</a> with Link
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>I-Tai Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
export default Navbar;
