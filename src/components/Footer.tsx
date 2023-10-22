import { links } from "../data";

function Footer() {
  return (
    <footer>
      <div className="container">
        <ul role="list" className="link-type">
          {links.map((link, index) => (
            <li key={index}>
              <span className="title">{link.name}</span>
              <ul className="links">
                {link.links.map((link, index) => (
                  <li key={index} className="link">
                    {link}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="copyright">
          <span>Lotia Labs, Inc. ©️ 2023</span>
          <span className="link">Terms</span>
          <span className="link">Privacy</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
