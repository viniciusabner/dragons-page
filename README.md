# dragons-page

## Status

🚧 Em construção... 🚧

### Descrição do Projeto

Projeto simples para cadastrar, editar, remover e visualizar dragões.

login: test@example.com
senha: 1234

Foi utilizado Next.JS, Tailwind e Typescript

#### Features

- [x] Criar página de login e senha. É possivel logar com o GitHub;
- [x] Validação de rotas, caso não esteja logado, só consegue acessar a página de login;
- [x] Mostrar a lista de dragões cadastrados em ordem alfabética;
- [x] Adicionar, editar e remover dragões;
- [x] Visualizar os detalhes do dragão selecionado;
- [x] Layout responsivo;

### Pré-requisitos

[Node.js](https://nodejs.org/en/)
[VSCode](https://code.visualstudio.com/)

# Clone este repositório

$ git clone <https://github.com/viniciusabner/dragons-page>

# Instale as dependências

$ npm install

# Configure as variáveis de ambiente para fazer login com o Github

- Altere o arquivo .env.example para .env

Para NEXTAUTH_SECRET gere uma chave aleatória em https://www.4devs.com.br/gerador_de_senha, depois substitua os "xxxxxxx"
Para GITHUB_ID e GITHUB_SECRET siga o passo a passo abaixo:

- acesse https://github.com/settings/apps
- crie new github app
- dê um nome qualquer
- no campo Homepage URL coloque: http://localhost:3000
- no campo Callback URL coloque: http://localhost:3000/api/auth/callback/github
- desative a opção: Expire user authorization tokens
- desative a opção: Active (do Webhook)
- selecione o botão Create GitHub App
- sera gerado as informações necessárias
- para GITHUB_ID use Client ID
- para GITHUB_SECRET use Client secrets

# Execute a aplicação em modo de desenvolvimento

$ npm run dev
