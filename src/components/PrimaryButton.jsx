import { Link } from "react-router-dom";

export default function PrimaryButton({
  children,
  to,
  className,
  newtab = false,
}) {
  if (to) {
    if (newtab) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noreferrer"
          className={`primary-button ${className}`}
        >
          {" "}
          {children}{" "}
        </a>
      );
    }

    return (
      <Link to={to} className={`primary-button ${className}`}>
        {children}
      </Link>
    );
  }
  return <div className={`primary-button ${className}`}>{children}</div>;
}
