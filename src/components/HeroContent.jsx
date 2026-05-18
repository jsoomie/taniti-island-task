import { HeroButton } from "../components/";

export default function HeroContent({ title, subtitle, buttonText, to }) {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline>
        <source src="/ocean-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <HeroButton to={to} text={buttonText} />
      </div>
    </div>
  );
}
