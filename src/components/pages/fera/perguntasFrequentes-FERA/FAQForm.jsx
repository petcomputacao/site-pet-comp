import "./FAQForm.css"

import { useState } from "react";

export default function FAQForm() {
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [pergunta, setPergunta] = useState("");
  const [erro, setErro] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErro(null);
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

    } catch (err) {
      console.error("❌ Erro no fetch:", err);
      setErro("Erro ao enviar. Tente novamente.");
    } finally {
      setEnviando(false);
      setSucesso(false);
    }
  }

return (
  <form className="faq-form" onSubmit={handleSubmit}>
    <label>Email:</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      disabled={enviando}
    />

    <label>Matrícula:</label>
    <input
      type="text"
      value={matricula}
      onChange={(e) => setMatricula(e.target.value)}
      required
      disabled={enviando}
    />

    <label>Pergunta/Dúvida:</label>
    <textarea
      value={pergunta}
      onChange={(e) => setPergunta(e.target.value)}
      required
      disabled={enviando}
    ></textarea>

    {erro && <p className="erro">{erro}</p>}
    {sucesso && <p className="sucesso">✅ Pergunta enviada com sucesso!</p>}

    <button type="submit" disabled={enviando}>
      {enviando ? "Enviando..." : "Enviar"}
    </button>
  </form>
);
}
