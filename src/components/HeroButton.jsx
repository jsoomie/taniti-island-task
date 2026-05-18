import { Link } from "react-router-dom";

export default function HeroButton({ text, to }) {
  return (
    <Link to={to} className="hero-btn">
      {text}
    </Link>
  );
}
