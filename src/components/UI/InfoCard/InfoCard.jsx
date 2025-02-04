import "./InfoCard.scss";

function InfoCard({ title, description, type }) {
  return (
    <div className={`info-card ${type}`}>
      {title && <h3 className={`subtitle info-card__title ${type}`}>{title}</h3>}

      <p className={`info-card__description ${type}`}>{description}</p>
    </div>
  );
}

export default InfoCard;
