import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';\nimport LoginPage from '../../support/pageObjects/loginPage';\nimport CartPage from '../../support/pageObjects/cartPage';\n\nGiven('que o usuário está logado', () => {\n  LoginPage.acessar()\n  LoginPage.preencherCredenciais('standard_user', 'secret_sauce')\n})\n\nGiven('adiciona um produto ao carrinho', () => {\n  CartPage.adicionarProdutoAoCarrinho()\n})\n\nWhen('ele finaliza o checkout', () => {\n  CartPage.finalizarCompra()\n})\n\nThen('a compra deve ser concluída com sucesso', () => {\n  CartPage.validarCompraConcluida()\n})
