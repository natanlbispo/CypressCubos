# Cypress - Cubos

 Implementação de teste automatizado da Cubos usando Cypress. 
 
 ### Requisitos:
 - Ter o Node instalado em sua máquina
  - `npm -v` ou `node -v` 

 ### Instruções:

- Instalar o Cypress na sua máquina
 - `npm install cypress`
- Clonar o projeto <https://github.com/natanlbispo/CypressCubos.git> 
- Instalar dependências  do projeto
 - `npm install`
- Ir ao arquivo *package.json* e alterar o campo scripts 
 - `"scripts": {
    "cypress:open": "cypress open",`
- Comando para rodar o Cypress
 - `npm run cypress:open`


 ### Planos:
 
 - Casos de teste p/ visit
    - Visitar o site 

 - Casos de teste Login
    - Login Correto
    - Login com campo email/cpf em branco e senha preenchida
    - Login com campo email/cpf(incorretos) em branco e senha preenchida
    - Login com campo email/cpf(inválidos) em branco e senha preenchida
    
