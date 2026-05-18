import { routes } from "../routes.jsx";
import { NavLink } from "react-router-dom";
import { Logo } from "../components/";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className="links-container container">
        {routes.map((route) => (
          <NavLink key={route.id} to={route.path}>
            {route.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
