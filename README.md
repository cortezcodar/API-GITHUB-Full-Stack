# GitHub User Search

## Descrição

O GitHub User Search é um projeto que permite buscar usuários do GitHub e exibir seus dados através da API do GitHub. Utilizamos o TypeScript para tipar os dados e o React Router DOM para o controle de rotas.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [GitHub API](https://docs.github.com/en/rest)



## Controle de Rotas

Nossa aplicação utiliza o React Router DOM para o controle de rotas. Isso nos permite navegar entre diferentes páginas da aplicação de forma eficiente. Abaixo, descrevemos como as rotas estão configuradas em nosso projeto:

### Rotas Principais

- Rota da Página Inicial: Esta é a rota raiz da aplicação que exibe a página inicial. Ela é configurada para corresponder ao caminho `"/"`.

```jsx
<Route exact path="/" component={HomePage} />
```

## Pré-requisitos

Para executar o projeto, você precisará ter as seguintes ferramentas instaladas em seu ambiente:

- Node.js (versão X.X.X)
- npm (gerenciador de pacotes)

## Instalação

Siga as etapas abaixo para configurar o ambiente de desenvolvimento:

1. Clone este repositório:

   ```shell
   git clone https://github.com/cortezcodar/api-github.git
