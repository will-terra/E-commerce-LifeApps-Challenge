# E-commerce LifeApps Challenge 🛒 [![Vercel Deployed](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://e-commerce-life-apps-challenge.vercel.app/)

![Project Preview](https://i.imgur.com/FnRvIbm.png)

Projeto desenvolvido como avaliação técnica para a vaga de desenvolvedor Front-end na LifeApps. Um E-commerce completo com foco em **acessibilidade de alto nível**, implementando as melhores práticas do WCAG 2.2.

✨ **Destaques Técnicos**  
✅ Navegação 100% via teclado & leitores de tela  
✅ Contraste de cores AAA para daltonismo e baixa visão  
✅ Semântica HTML rigorosa com ARIA landmarks  
✅ Componentes reutilizáveis com Atomic Design  
✅ Testes E2E cobrindo fluxos críticos

## 🚀 Tecnologias

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
[![Cypress](https://img.shields.io/badge/Cypress-13-17202C?logo=cypress)](https://www.cypress.io/)

## Instruções do Projeto

Para acessar os requisitos técnicos e detalhes da prova, consulte:  
[Repositório Oficial da Prova Frontend](https://github.com/devlifeapps/Prova-Frontend-Lifeapps)

## ✨ Funcionalidades

- 📦 Listagem de produtos com paginação server-side
- 🔍 Filtragem por categorias
- 🛍️ Carrinho persistente (Adicionar e remover itens)
- 👁️ Visualização detalhada de produtos
- ♿ Navegação acessível (teclado + leitores de tela)

## ▶️ Como executar

- Ambiente de execução: [Node.js](https://nodejs.org/ "Site oficial do Node.js")

```bash
git clone https://github.com/will-terra/E-commerce-LifeApps-Challenge.git
cd E-commerce-LifeApps-Challenge
npm install
npx next dev
```

O projeto poderá ser acessado através do endereço http://localhost:3000

## ▶️ Para rodar os testes

Com o projeto rodando:

```bash
npx cypress open
```

Selecione E2E testing.
Escolha seu navegador de preferência.
Execute todos Specs, um a um.

** Se o projeto não estiver rodando em http://localhost:3000 você dever alterar para a baseUrl correspondente em cypress.config.ts **

## 🌐 Demo Online

Acesse a versão de produção otimizada:
https://e-commerce-life-apps-challenge.vercel.app/

**Desenvolvido por William Terra (wpterra@outlook.com)**
