import React, { useState } from 'react';
import './FAQForm.css';

function FAQForm() {
  const [email, setEmail] = useState('');
  const [matricula, setMatricula] = useState('');
  const [pergunta, setPergunta] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação do e-mail
    if (!email.includes('@ccc')) {
      setErro('O email de envio precisa ser o institucional (conter o @ccc)');
      return;
    }
    setErro('');

    // Envio para Google Sheets (troque pela URL do seu Web App)
    fetch('https://script.google.com/macros/s/AKfycbzYBa48_f69YQzQ1iUE2JNAxpcZfA28quGP3daFg6wEsAEpb4QxYDyjAukmSFYajcC4/exec', {
      method: 'POST',
      body: JSON.stringify({ email, matricula, pergunta }),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      if (res.ok) {
        alert('Pergunta enviada com sucesso!');
        setEmail('');
        setMatricula('');
        setPergunta('');
      } else {
        alert('Erro ao enviar pergunta.');
      }
    });
  };

  return (
    <form className="faq-form" onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Matrícula:</label>
      <input
        type="text"
        value={matricula}
        onChange={(e) => setMatricula(e.target.value)}
        required
      />

      <label>Pergunta/Dúvida:</label>
      <textarea
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
        required
      ></textarea>

      {erro && <p className="erro">{erro}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FAQForm;
