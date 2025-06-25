
# 📚 Gerenciamento de Autores: API de Biblioteca

Uma API para o gerenciamento de autores, construída com foco em qualidade, testabilidade e colaboração.

---

## 📖 Sobre o Projeto

Este projeto consiste em uma API para o gerenciamento de autores em um contexto de biblioteca.  
Foi desenvolvido com **arquitetura MVC (Model-View-Controller)** em **TypeScript**, garantindo código organizado e de fácil manutenção.  
Priorizamos **qualidade** e **colaboração**, utilizando **Testes Unitários com TDD** e um fluxo de trabalho Git eficaz.

### ✅ Funcionalidades Implementadas

- ➕ Adicionar um novo autor (`nome`, `bio`, `data de nascimento`)
- 👁️ Visualizar detalhes de um autor específico
- 📝 Editar informações de um autor existente
- 🗑️ Excluir um autor do sistema
- 📊 Listar todos os autores cadastrados

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript** — Tipagem estática para escalabilidade
- **Node.js** — Ambiente de execução JavaScript
- **Express.js** — Framework web para API REST
- **Jest** — Framework de testes unitários
- **Nodemon** — Reinício automático do servidor
- **UUID** — Geração de IDs únicos
- **Git** — Controle de versão

---

## 🚀 Como Começar

### ✅ Pré-requisitos

- Node.js instalado [https://nodejs.org](https://nodejs.org)

### 📦 Instalação

```bash
git clone https://github.com/UNIFG-PE/author-management.git
cd author-management
npm install
```

> ⚠️ Se o repositório for privado, solicite acesso ao administrador da organização.

### ▶️ Executando a Aplicação

```bash
npm run dev
```

A API estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 📡 Rotas da API

Todas as rotas começam com: `/authors`

| Método | Endpoint       | Descrição                         | Exemplo de Body (JSON)                                |
|--------|----------------|-----------------------------------|--------------------------------------------------------|
| POST   | `/authors`     | Adiciona um novo autor            | `{ "name": "Novo Autor", "bio": "...", "birthDate": "..."}` |
| GET    | `/authors`     | Lista todos os autores            | —                                                      |
| GET    | `/authors/:id` | Detalhes de um autor específico   | —                                                      |
| PUT    | `/authors/:id` | Edita dados de um autor           | `{ "name": "Nome Atualizado", "bio": "..." }`          |
| DELETE | `/authors/:id` | Remove um autor                   | —                                                      |

---

## 🧪 Executando os Testes

Este projeto utiliza **Jest** com metodologia **TDD (Test-Driven Development)**.

### 🔁 Rodar todos os testes:

```bash
npm test
```

### 👀 Rodar em modo observação (watch mode):

```bash
npm run test:watch
```

---

## 🤝 Colaboração e Contribuição

Este projeto segue o **GitHub Flow (Feature Branch Workflow)**.

### 🧭 Passo a Passo

```bash
# 1. Atualize sua branch principal
git checkout main
git pull origin main

# 2. Crie uma nova branch de feature
git checkout -b feature/nome-da-sua-feature
```

Desenvolva e escreva testes unitários:

- Escreva testes antes do código (TDD)
- Siga o ciclo: **Vermelho ➡️ Verde ➡️ Refatorar**
- Rode `npm test` para garantir a qualidade

### 💬 Commits Semânticos

Exemplos:

```bash
git commit -m "feat: implementa validação de nome de autor"
git commit -m "fix: corrige bug na edição de autor"
git commit -m "test: adiciona testes para listagem de autores"
```

### 🔄 Suba sua branch:

```bash
git push -u origin feature/nome-da-sua-feature
```

### 📥 Pull Request

- Abra um PR da sua branch `feature/...` para a `main`
- Descreva suas alterações
- Solicite revisão dos colegas

### ✅ Revisão e Mesclagem

- PR deve ser revisado e aprovado
- Apenas PRs aprovados podem ser mesclados na `main`

---

## 🧑‍💻 Equipe

- [douglvsz] Douglas Alves Bezerra Filho - 1352314963
- [cmddy] Italo Matheus da Silva - 13523113743
- [angry9] Julio Willames Mendonça Dias da Silva - 1352315140

---

## 📈 Próximos Passos

- 💾 Integração com banco de dados real (PostgreSQL, MongoDB)
- 🔐 Autenticação e autorização de usuários
- 📚 Gerenciamento de livros
- 🖥️ Interface de usuário (frontend)
- ⚙️ CI/CD com GitHub Actions

---