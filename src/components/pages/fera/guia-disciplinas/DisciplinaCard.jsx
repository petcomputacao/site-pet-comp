const DisciplinaCard = ({ 
  titulo, 
  creditos, 
  horas, 
  preRequisito, 
  descricao, 
  topicos, 
  dicas,
  showDividers = true 
}) => (
  <div className="disciplina-card">
    <div className="disciplina-info">
      <h1 className="disciplina-titulo">{titulo}</h1>
      <div className="disciplina-metadata">
        <div className="disciplina-metadata__creditos">
            <p><strong>{creditos}</strong> - {horas}</p>
        </div>
        <p><strong>Pré-req:</strong> {preRequisito}</p>
      </div>
      <p className="disciplina-descricao">{descricao}</p>
    </div>

    <div className="disciplina-principais-topicos">
      <h2 className="topicos-titulo">Principais Tópicos</h2>
      <ul className="topicos-lista">
        {topicos.map((topico, index) => (
          <li key={index}>{topico}</li>
        ))}
      </ul>
    </div>

    <div className='disciplina-dicas-veterano'>
      <h2 className="dicas-titulo">Dicas de Veterano</h2>
      <ul className="dicas-lista">
        {dicas.map((dica, index) => (
          <li key={index}>{dica}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default DisciplinaCard;