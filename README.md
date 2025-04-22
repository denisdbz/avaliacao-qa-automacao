# Avaliação de QA Automação

Este projeto foi desenvolvido como parte de uma avaliação técnica para vaga de QA Automação. Ele contém uma série de testes automatizados para API e Frontend.

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

## Sobre o Projeto

Este repositório contém testes automatizados de API e Frontend utilizando ferramentas como Cypress e Postman para garantir que as aplicações estejam funcionando corretamente.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js
- Docker (para executar em containers)

### Passos para rodar o projeto:

1. Clone o repositório:
    ```bash
    git clone https://github.com/denisdbz/avaliacao-qa-automacao.git
    ```

2. Acesse o diretório do projeto:
    ```bash
    cd avaliacao-qa-automacao
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute os testes:
    - **API**:
      ```bash
      npm run test:api
      ```
    - **Frontend (Cypress)**:
      ```bash
      npm run test:frontend
      ```

## Estrutura do Projeto

O projeto é composto por dois diretórios principais:

- **api/**: Contém os testes automatizados da API.
- **frontend/**: Contém os testes automatizados utilizando Cypress para o frontend.

## Tecnologias Utilizadas

- **Cypress**: Para automação de testes de frontend.
- **Postman**: Para automação de testes de API.
- **Docker**: Para containerizar os testes e facilitar o ambiente de execução.

## Como Contribuir

Se desejar contribuir para o projeto, siga os seguintes passos:

1. Fork o repositório.
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Faça as alterações e comite (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License.
