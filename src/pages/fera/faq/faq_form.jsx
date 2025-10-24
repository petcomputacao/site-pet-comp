import "./faq_form.css"
import { useState } from "react";


export default function FAQForm() {
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [pergunta, setPergunta] = useState("");
  const [erro, setErro] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [errosValidacao, setErrosValidacao] = useState({});

  // Regex para validação
  const regexEmail = /^[a-zA-Z0-9._%+-]+@(ccc|computacao)\.ufcg\.edu\.br$/;
  const regexMatricula = /^\d{9}$/;

  function validarFormulario() {
    const novosErros = {};

    // Validação do email
    if (!regexEmail.test(email)) {
      novosErros.email = "Email deve ser no formato: usuario@ccc.ufcg.edu.br ou usuario@computacao.ufcg.edu.br";
    }

    // Validação da matrícula
    if (!regexMatricula.test(matricula)) {
      novosErros.matricula = "Matrícula deve conter exatamente 9 dígitos numéricos";
    }

    // Validação da pergunta
    if (pergunta.trim().length === 0) {
      novosErros.pergunta = "Dúvida não pode ser vazia";
    }


    setErrosValidacao(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro(null);
    
    // Validação antes de enviar
    if (!validarFormulario()) {
      return;
    }

    setEnviando(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbwgbDWxq_b3Ap3KXmrFz8h9denay3WE-kYM99a--Mgdnavgn70m1NlaqgUJqEyoWuGn/exec";

    try {
      console.log("Enviando dados:", { email, matricula, pergunta });
      
      await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, matricula, pergunta }),
        mode: "no-cors"
      });
      
      setSucesso(true);
      setEmail("");
      setMatricula("");
      setPergunta("");
      setErrosValidacao({});

    } catch (err) {
      console.error("Erro no fetch:", err);
      setErro("Erro ao enviar. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errosValidacao.email) {
      setErrosValidacao(prev => ({...prev, email: ""}));
    }
  };

  const handleMatriculaChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // apenas caracteres numericos
    setMatricula(value);
    if (errosValidacao.matricula) {
      setErrosValidacao(prev => ({...prev, matricula: ""}));
    }
  };

  const handlePerguntaChange = (e) => {
    setPergunta(e.target.value);
    if (errosValidacao.pergunta) {
      setErrosValidacao(prev => ({...prev, pergunta: ""}));
    }
  };

  return (
    <form className="faq-form" onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        value={email}
        onChange={handleEmailChange}
        disabled={enviando}
        placeholder="usuario@ccc.ufcg.edu.br"
        className={errosValidacao.email ? "erro-input" : ""}
      />
      {errosValidacao.email && <span className="erro-validacao">{errosValidacao.email}</span>}

      <label>Matrícula:</label>
      <input
        value={matricula}
        onChange={handleMatriculaChange}
        disabled={enviando}
        maxLength={9}
        placeholder="9 dígitos (apenas números)"
        className={errosValidacao.matricula ? "erro-input" : ""}
      />
      {errosValidacao.matricula && <span className="erro-validacao">{errosValidacao.matricula}</span>}

      <label>Pergunta/Dúvida:</label>
      <textarea
        value={pergunta}
        onChange={handlePerguntaChange}
        disabled={enviando}
        placeholder="Descreva sua dúvida"
        className={errosValidacao.pergunta ? "erro-input" : ""}
      ></textarea>
      {errosValidacao.pergunta && <span className="erro-validacao">{errosValidacao.pergunta}</span>}

      {erro && <p className="erro">{erro}</p>}
      {sucesso && <p className="sucesso">✅ Pergunta enviada com sucesso!</p>}

      <button type="submit" disabled={enviando}>
        {enviando ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}