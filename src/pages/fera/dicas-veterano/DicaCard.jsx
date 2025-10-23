const DicaCard = ({ icon: Icon, title, text }) => (
  <div className="dica-card">
    <div className='dica-card__cabecalho'>
      <Icon className="dica-card__cabecalho--icon"/>
      <h3 className='dica-card__cabecalho--titulo'>{title}</h3>
    </div>
    <p className='dica-card__paragrafo'>{text}</p>
  </div>
);

export default DicaCard;