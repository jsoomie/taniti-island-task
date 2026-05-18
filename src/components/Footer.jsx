import { Logo } from "../components/";
import { Link } from "react-router-dom";

const socials = [
  {
    to: "https://www.instagram.com/",
    img: { src: "./instagram.png", alt: "instagram icon" },
  },
  {
    to: "https://www.facebook.com/",
    img: { src: "./facebook.png", alt: "facebook icon" },
  },
  {
    to: "https://www.toktok.com/",
    img: { src: "./tiktok.png", alt: "tiktok icon" },
  },
];

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Accommodations",
    to: "/accommodations",
  },
  {
    label: "Transportation",
    to: "/transportation",
  },
  {
    label: "Attractions",
    to: "/attractions",
  },
  {
    label: "FAQs",
    to: "FAQ",
  },
  {
    label: "Visit Taniti Island",
    to: "/visit",
  },
];

const elinks = [
  {
    label: "About Us",
    to: "https://en.wikipedia.org/wiki/About_us",
  },
  {
    label: "Business Directory",
    to: "https://en.wikipedia.org/wiki/Business_directory",
  },
  {
    label: "Meetings",
    to: "https://en.wikipedia.org/wiki/Meeting",
  },
  {
    label: "Sitemap",
    to: "/visit",
  },
  {
    label: "Privacy Policy",
    to: "https://en.wikipedia.org/wiki/Privacy_policy",
  },
  {
    label: "Terms & Conditions",
    to: "https://en.wikipedia.org/wiki/Contractual_term",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <Logo />
          <p>1200 Azure Horizon Way</p>
          <p>Cove of Whispering Palms</p>
          <p>Serenity Archipelgo, 00120</p>

          <br />

          <ul className="social-list">
            {socials.map((social, index) => (
              <li key={index}>
                <Link to={social.to} target="_blank" rel="noopener noreferrer">
                  <img src={social.img.src} alt={social.img.alt} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <br />

        <div className="link-list-container">
          <ul className="link-list">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="link-list">
            {elinks.map((elink, index) => (
              <li key={index}>
                <Link to={elink.to} target="_blank" rel="noopener noreferrer">
                  {elink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <br />

      <div className="container">
        <p>© 2026 The Island of Taniti. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
