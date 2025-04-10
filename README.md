Avaliação Técnica - QA Automação

Este repositório contém a entrega completa da avaliação técnica para a vaga de QA, abrangendo os seguintes testes:

- Testes de API
- Testes E2E Web
- Testes de Carga
- Testes Mobile (Android)

---

Testes E2E - Cypress

- Framework: Cypress
- Testes baseados no comportamento do usuário
- Validação de fluxos críticos e campos obrigatórios

Como executar

cd e2e-tests
npm install
npx cypress open
Testes de API - Postman + Newman
Requisições criadas e testadas no Postman

Exportadas e executadas via Newman em linha de comando

Como executar
cd api-tests
newman run colecao.postman_collection.json -e ambiente.postman_environment.json

Testes de Carga - k6
Simulação de múltiplos usuários acessando a API simultaneamente

Análise de performance e tempo de resposta

Como executar
cd carga-tests
k6 run script-de-carga.js

Testes Mobile - Appium + WebDriverIO
Testes automatizados em um app Android de exemplo

Utiliza WebDriverIO com Appium

Pré-requisitos
Node.js

Android Studio com emulador configurado

Appium Server em execução

Como executar
cd mobile-tests
npm install
npx wdio run wdio.conf.js

Considerações Finais
Todos os testes foram organizados em pastas separadas e utilizam ferramentas modernas e consolidadas no mercado. A estrutura foi pensada para ser simples, clara e de fácil execução.
