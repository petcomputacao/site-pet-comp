// Componente reutilizável para cada iniciativa
function InitiativeCard({ image, title, description, children }) {
  return (
    <div className="initiative-card">

      <img
        src={image}
        alt={title}
        className="initiative-image"
      />

      <div className="initiative-content">
        <h3>{title}</h3>

        <p className="paragraph">
          {description}
        </p>

        <div className="initiative-links">
          {children}
        </div>
      </div>

    </div>
  );
}

export default InitiativeCard;