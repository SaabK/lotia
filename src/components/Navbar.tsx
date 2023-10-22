import logo from "../assets/wordmark.svg";
import dropdown from "../assets/dropdown.png";

function Navbar() {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" className="wordmark" />

        <nav>
          <ul role="list" className="navigation">
            <li>
              <a href="#">Features</a>
              <img src={dropdown} alt="" className="dropdown" />
            </li>
            <li>
              <a href="#">Examples</a>
              <img src={dropdown} alt="" className="dropdown" />
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Demo</a>
              <img src={dropdown} alt="" className="dropdown" />
            </li>
            <li>
              <a href="#">Resources</a>
              <img src={dropdown} alt="" className="dropdown" />
            </li>
          </ul>
        </nav>

        <div className="registeration">
          <button className="btn btn-secondary">Login</button>
          <button className="btn btn-primary">Sign up free</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
