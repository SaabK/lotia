import { links } from "../data";

function Footer() {
  return (
    <footer>
      <div className="container">
        <ul role="list">
          {links.map((link, index) => (
            <li key={index}>
              <span>{link.name}</span>
              <ul>
                {link.links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
