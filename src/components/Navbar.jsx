import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-center">
            <Link to="/">
                <h1>YouTube <span style={{color: "red"}}>Clone</span></h1>
            </Link>
            <SearchForm />
            <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        </div>
    </nav>
  )
}
export default Navbar