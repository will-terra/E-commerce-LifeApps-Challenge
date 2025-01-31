# E-commerce LifeApps Challenge 🛒

Projeto desenvolvido como avaliação técnica para a vaga de desenvolvedor Front-end na LifeApps. Consiste em um E-commerce completo, com foco em acessibilidade, seguindo os princípios WCAG 2.2.

## Instruções do Projeto

Para acessar os requisitos técnicos e detalhes da prova, consulte:  
[Repositório Oficial da Prova Frontend](https://github.com/devlifeapps/Prova-Frontend-Lifeapps)

## 🚀 Tecnologias-chave

- Next.js 15 (App Router)
- React 19 com TypeScript
- Gerenciamento de estado com Context API
- UI Components:
  Arquitetura Atomic Design (Atoms → Molecules → Organisms)
  Base UI para acessibilidade nativa∙
- Estilização: Design responsivo com Tailwind CSS
- Confiabilidade: Testes E2E executados com Cypress

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

Escolha seu navegador de preferência.
Execute todos Specs um a um.

** Se o projeto não estiver rodando em http://localhost:3000 você dever alterar para a baseUrl correspondente em cypress.config.ts **

# E-commerce-LifeApps-Challenge 🛒
