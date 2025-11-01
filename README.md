# 🌐 Site PET Computação – UFCG

[![Status](https://img.shields.io/badge/status-ativo-brightgreen)](#)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/react-18.0.0-61DAFB?logo=react)](https://react.dev/)
[![Contributors](https://img.shields.io/github/contributors/petcomputacao/site-pet-comp)](https://github.com/petcomputacao/site-pet-comp/graphs/contributors)

---

🔗 **Acesse o site:** <a href="https://petcomputacao.github.io/site-pet-comp/" target="_blank" rel="noopener noreferrer">petcomputacao.github.io/site-pet-comp</a>

---

Repositório oficial do **site do PET Computação – UFCG**, desenvolvido para divulgar o Programa de Educação Tutorial em Ciência da Computação da Universidade Federal de Campina Grande.  
O site reúne informações sobre o grupo, projetos, membros e oferece uma forma dinâmica e fácil de manutenção.

---

## ⚙️ Tecnologias e Ferramentas

### Front-end
- **React 18** – Framework principal para construção da interface.
- **React Router DOM** – Gerenciamento de rotas da aplicação.
- **Framer Motion** – Animações suaves e interações dinâmicas.
- **Lucide React / React Icons / React Feather** – Ícones vetoriais otimizados.
- **Swiper / Embla Carousel** – Implementação de carrosséis e sliders interativos.


### APIs e Integrações
Para saber como ter acesso às chaves das APIs, verifique o drive do PET.

- **Maptiler API** – Renderização de mapas customizados e interação geográfica. <a href="https://cloud.maptiler.com/maps/" target="_blank" rel="noopener noreferrer">Faça login na plataforma</a> e veja o dataset criado.

    - Aqui, recomendo fortemente a leitura da <a href="https://docs.maptiler.com/sdk-js/api/" target="_blank" rel="noopener noreferrer">documentação oficial</a>.

- **Meta Graph API** – Acesso e manipulação de dados de páginas e perfis do Facebook/Instagram. <a href="https://github.com/petcomputacao/meta-graph-api" target="_blank" rel="noopener noreferrer">Repositório da API</a>.

    - Aqui, recomendo esse <a href="https://youtu.be/BuF9g9_QC04?si=dlHJ3E0bcugTLgVW" target="_blank" rel="noopener noreferrer">tutorial do youtube</a>.

- **Google Apps Scripts** – Integração com perguntas preenchidas pelo forms. Automaticamente adiciona na tabela e envia a notificação ao email. <a href="https://script.google.com/home" target="_blank" rel="noopener noreferrer">Faça login na plataforma</a>.


### Ferramentas de Build e Deploy
- **React Scripts (Create React App)** – Estrutura base do projeto.
- **Github Actions** – Pipeline automatizada de deploy.
- **GH Pages** – Hospedagem do projeto diretamente no GitHub Pages.

---

## 📁 Estrutura do Projeto

```bash
.
├── node_modules/         # Dependências instaladas
│
├── public/               # Arquivos estáticos (HTML, ícones, manifest)
│   ├── 404.html
│   ├── favicon.ico
│   ├── images/
│   ├── index.html
│   └── manifest.json
│
├── src/                  # Código-fonte principal
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas da aplicação
│   ├── App.jsx           # Componente raiz
│   ├── App.css           # Estilos globais da aplicação
│   ├── index.js          # Ponto de entrada
│   └── index.css         # Estilos principais
│
├── package.json          # Dependências e scripts do projeto
└── README.md             # Documentação do projeto
```

## Executando localmente

```bash
# Clone o repositório
git clone https://github.com/petcomputacao/site-pet-comp.git

# Acesse a pasta do projeto
cd site-pet-comp

# Instale as dependências usando o seu gerênciador de pacotes
npm install

# Inicie a aplicação
npm start
```

---

## Deploy

### Deploy automatizado via Github Actions!

Basta realizar **`push`** na **`branch main`** e, _**caso obtenha sucesso**_, deploy realizado!

Dê uma olhada no <a href="./.github/workflows/deploy.yml" target="_blank" rel="noopener noreferrer">arquivo de configuração</a>.

---

## 👥 Autores

- Arthur Fernandes (arthur-ccc)
- Guilherme José (gjose05)
