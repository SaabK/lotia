import { Logo } from "./Icons";

function Navbar() {
  return (
    <header>
      <Logo />

      <nav>
        <ul role="list">
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Examples</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Demo</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </ul>
      </nav>

      <div className="registeration">
        <button className="btn btn-secondary">Login</button>
        <button className="btn btn-primary">Sign up free</button>
      </div>
    </header>
  );
}

export default Navbar;
