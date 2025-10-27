# 🌐 Site PET Computação – UFCG

[![Status](https://img.shields.io/badge/status-ativo-brightgreen)](#)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/react-18.0.0-61DAFB?logo=react)](https://react.dev/)
[![Contributors](https://img.shields.io/github/contributors/petcomputacao/site-pet-comp)](https://github.com/petcomputacao/site-pet-comp/graphs/contributors)

---

🔗 **Acesse o site:** [petcomputacao.github.io/site-pet-comp](https://petcomputacao.github.io/site-pet-comp/)

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
Para saber como ter acesso às APIs, verifique o drive do PET.
- **Maptiler API** – Renderização de mapas customizados e interação geográfica.

- **Meta Graph API** – Acesso e manipulação de dados de páginas e perfis do Facebook/Instagram. [Repositório da API](https://github.com/petcomputacao/instagram-api).


### Ferramentas de Build e Deploy
- **React Scripts (Create React App)** – Estrutura base do projeto.
- **GH Pages** – Publicação do projeto diretamente no GitHub Pages.

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

#### Garanta que a versão de deploy estejam na `branch main`

```bash
# instale as dependências usando o seu gerenciador de pacotes
npm install gh-pages --save-dev

# hora o deploy
npm run deploy
```

Isso fará com que o deploy se associe a branch `gh-pages` que é criada automáticamente. Mais detalhes em package.json

---

## 👥 Autores

- Arthur Fernandes (arthur-ccc)
- Guilherme José (gjose05)
