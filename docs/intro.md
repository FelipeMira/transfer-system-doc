---
sidebar_position: 1
---

# Introdução ao Tutorial

Vamos descobrir o **Docusaurus em menos de 5 minutos**.

## Começando

Comece **criando um novo site**.

Ou **experimente o Docusaurus imediatamente** com **[docusaurus.new](https://docusaurus.new)**.

### O que você vai precisar

- [Node.js](https://nodejs.org/en/download/) versão 18.0 ou superior:
- Ao instalar o Node.js, é recomendável marcar todas as caixas de seleção relacionadas às dependências.

## Gerar um novo site

Gere um novo site Docusaurus usando o **template clássico**.

O template clássico será automaticamente adicionado ao seu projeto depois de executar o comando:

```bash
npm init docusaurus@latest my-website classic
```

Você pode digitar este comando no Prompt de Comando, Powershell, Terminal ou qualquer outro terminal integrado do seu editor de código.  

O comando também instala todas as dependências necessárias para executar o Docusaurus.


# Adicionando Swagger ao seu site

Para adicionar o Swagger ao seu site, você precisará instalar alguns pacotes e adicionar algumas configurações ao seu projeto.

## Instalando os pacotes necessários

Primeiro, instale o pacote swagger-ui-react para adicionar o Swagger UI ao seu projeto. Você pode fazer isso executando o seguinte comando no terminal:

```bash
npm install swagger-ui-react
```

Em seguida, instale o pacote redocusaurus para adicionar o Swagger ao seu projeto Docusaurus. Você pode fazer isso executando o seguinte comando no terminal:

```bash
npm install --save redocusaurus
```

## Configurando o Swagger

Depois de instalar os pacotes necessários, você precisará adicionar a configuração do plugin redocusaurus ao seu arquivo docusaurus.config.js. Você precisará especificar o caminho para o seu arquivo Swagger JSON e a rota onde a documentação Swagger será exibida.

```javascript
presets: [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      // existing configuration
    }),
  ],
  [
    'redocusaurus',
    {
      specs: [
        {
          routePath: '/api/', // the path where the Swagger documentation will be displayed
          spec: './static/api/swagger.json', // the path to your Swagger JSON file
        },
      ],
    },
  ],
],
```

Por fim, adicione um link para a documentação Swagger no seu navbar:

```javascript
navbar: {
  items: [
    // other items
    {
      to: '/api/', // the path to the Swagger documentation
      label: 'API', // the label that will appear in the menu
      position: 'right', // the position of the item in the menu
    },
  ],
},
```

## Inicie seu site

Execute o servidor de desenvolvimento:

```bash
cd my-website
npm run start
```

O comando `cd` muda o diretório com o qual você está trabalhando. Para trabalhar com o seu novo site Docusaurus, você precisará navegar o terminal até lá.

O comando `npm run start` constrói seu site localmente e o serve através de um servidor de desenvolvimento, pronto para você visualizar em http://localhost:3000/.

Abra `docs/intro.md` (esta página) e edite algumas linhas: o site recarrega automaticamente e exibe suas alterações.
