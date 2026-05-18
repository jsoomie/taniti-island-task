export default function Card({ image, header, content, footer }) {
  return (
    <div className="card">
      <img src={image.src} alt={image.alt} />
      <div className="card-body">
        <h3 className="card-header">{header}</h3>
        <p className="card-content">{content}</p>
        <div className="card-footer">{footer}</div>
      </div>
    </div>
  );
}
