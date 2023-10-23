import { links } from "../data";
import dropdown from "../assets/dropdown.png";
import { useState } from "react";

function Footer() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <footer>
      <div className="container">
        <ul role="list" className="link-type">
          {links.map((link, index) => (
            <li key={index} onClick={() => setActiveTab(index)}>
              <span className={`title ${activeTab === index ? "active" : ""}`}>
                {link.name}
                <img
                  src={dropdown}
                  alt=""
                  className={`dropdown ${
                    activeTab === index ? "inverted" : ""
                  }`}
                />
              </span>
              <ul className={`links ${activeTab === index ? "" : "none"}`}>
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
