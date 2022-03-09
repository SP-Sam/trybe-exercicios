# Sequelize Passo a Passo
Criei esse passo a passo para ajudar os estudantes da **Trybe**  esse documento não substitui a [documentação](https://sequelize.org/master/index.html) , e quando alguma houver duvidas recomendo consulta-la 

## Comandos

 1. `npm init -y` - Cria o package.json;
 2. `npm i sequelize sequelize-cli` - instala as bibliotecas necessárias para usar o sequelize, agora as próximas bibliotecas vai do seu gosto, de banco de dados você pode usar o `mysql2`, para criação de API's você pode usar o `express` e o `nodemon` para o desenvolvimento;
 3. `npx sequelize init` - Esse comando inicia o setup inicial para o desenvolvimento em sequelize, ele criara 4 pastas (config, models, migrations, sedeers).
 
	 - `config` : Nessa pasta terá um arquivo chamado `config.json` onde você colocara as informações como nome do usuario que está usando o banco de dados (padrão root), o host que é em que endereço o banco rodará (padrão 127.0.0.1 mais conhecido como localhost), senha, database que é o nome do banco de dados que você quer usar (você pode colocar um nome que não existe que o sequelize ira criar o banco de dados para você), e o dialect que é a linguagem de banco de dados que você ira usar (tipo mysql).
	 - `models`: Essa pasta começa com um arquivo chamado `index.js` não é recomendado você mexer muito nele a função dele é pegar todos os arquivos .js que você criara no model e integra-los a lógica do sequelize, nessa pasta você vai criar funções que tem haver com a interação com o banco de dados.
	 - `migrations`: Essa pasta começa vazia, o objetivo dela é agrupar todas as tabelas que você ira criar.
	 
	 - `sedeers`: Essa pasta começa vazia, o objetivo dela é a agrupar os valores inicias para cada tabela (tipo um backup).

4. `npx sequelize migration:generate --name NomeTabela`: Esse comando ira criar um arquivo .js na pasta migration onde você ira desenvolver a lógica para a criação da tabela.
5. `npx sequelize seed:generate --name SeedName`: Esse comando ira criar um arquivo .js na pasta seeders onde você ira desenvolver a lógica para a criação dos "backups".
6. `npx sequelize model:generate --name NomeModel`: Esse comando ira criar um arquivo .js na pasta model onde você ira desenvolver a lógica para a criação do model".
7. `npx sequelize db:create`: Esse comando ira criar o banco de dados com o nome que esta no arquivo config.json na chave database.
8. `npx sequelize db:drop`: Esse comando ira apagar o banco de dados e tudo que tiver dentro dele. *cuidado*
9. `npx sequelize db:migrate`: Esse comando ira adicionar ao banco todas as tabelas do arquivo migrations.
10. `npx sequelize db:migrate:undo`: Esse comando ira apagar todas as tabelas do banco de dados.
11. `npx sequelize db:seed:all`: Esse comando ira popular o banco de dados com as informações dos arquivos que estão no seeders.
12. `npx sequelize db:seed:undo:all`: Esse comando ira apagar todas as informações das tabelas.

## Migrations


### Setup inicial de um arquivo no migrations
Quando criamos um migration usando o comando do sequelize recebemos um arquivo js com essa estrutura, um objeto contendo duas funções uma chamada `up` que será ativada quando criarmos as tabelas no nosso banco de dados e outra chamada  `down` que será ativada quando apagarmos as tabelas.
```javascript
module.exports  = {
	up:  async (queryInterface, Sequelize) => {

	},

  
	down:  async (queryInterface, Sequelize) => {
	
	};
};
``` 

### Como criar uma tabela

```javascript
	module.exports  = {
		up:  async (queryInterface, Sequelize) => {
			const Tabela = queryInterface.createTable("NomeTabela", { campos }, { options })
		},
	...
```
O comando `queryInterface.createTable` é o responsavel para criar a tabela essa função recebe 3 parâmetros

 1. Uma `string` contendo o nome da tabela que você deseja criar
 2. Um `objeto` contendo um `objeto` com o nome da colunas e com suas definições.
 3. Um `objeto` contendo algumas opções de como deverá ser criada (opcional) 

### exemplo
```javascript
	up:  async (queryInterface, Sequelize) => {
		const Tabela = queryInterface.createTable("NomeTabela", { 
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			}
		})
		return Tabela
	}
```

### Alguns tipos de definições

 - allowNull ( padrão true ): Essa opção define se será possível adicionar um valor nulo na coluna.
 - primaryKey ( padrão false ): Essa opção define se a coluna é uma chave primaria
 - type: ( obrigatorio ): Essa opção define o tipo de valor aceito na coluna. (INTEGER, STRING, BOOL, etc)
 - field: Define o nome da coluna no banco de dados, geralmente utilizada para mudar estilo de formatação da coluna de camelCase para snake_case. exemplo: `employeeId` para `employee_id`
 - references: Essa opção é para foreignKeys ela recebe um `objeto` com as chaves model (nome da tabela que você que fazer o relacionamento) e a chave key (coluna que você quer referenciar na tabela)
 - onDelete: Essa opção é referente a foreignKey, ela decide o comportamento da tabela quando é deletada a foreignKey quando é colocada a opção 'CASCADE' ela apaga os valores que referenciam a foreignKey apagada.
 - onUpdate: É a mesma coisa do onDelete so que nas situações de update na foreignKey.

### Como deletar uma tabela

```javascript
module.exports  = {
	...
	down:  async (queryInterface, Sequelize) => {
		return  queryInterface.dropTable('NomeTabela')
	};
};
```
O comando  `queryInterface.dropTable()` recebe 1 parâmetro que é o nome da tabela que você quer apagar 

## Models

### Setup inicial para models
O comando de criar o model pelo sequelize por padrão vem em forma de POO (orientação a objeto), então como não vimos POO, a maneira funcional que você pode optar é essa:
```javascript
const NomeModel = (Sequelize, DataTypes) => {

};

module.exports = NomeModel
```

### Como criar um model
```javascript
const NomeModel = (Sequelize, DataTypes) => {
	const model = Sequelize.define("NomeTabela", { campos }, { options })
	return model
};

module.exports = NomeModel
```
O comando `Sequelize.define` é responsável por criar o Model, é uma função que recebe 3 Parâmetros

 1. Uma `string` que contem o nome do model.
 2. Um `objeto` muito parecido com o 2 parâmetro do migrations
 3. Um `objeto` de options (opcional).

### exemplo
```javascript
const NomeModel = (Sequelize, DataTypes) => {
	const model = Sequelize.define("NomeModel",
		// Campos
		{ 
			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				autoIncrement: true
			},
			name: DataTypes.STRING
		},
		// Options
		{
			timestamps: false,
			tableName: 'NomeTabela',
			underscored: true
		}
	);
	return model
};

module.exports = NomeModel
```
### Alguns exemplos de options

 - timestamps - por padrão o sequelize espera que você crie campos como createdAt e updatedAt, então se você quer criar tabelas sem esses campos então você tem que colocar essa opção como false
 - tableName - define o nome da tabela
 - underscored: serve para o sequelize fazer a conversão dos nomes da coluna de camelCase para snake_case

## Seeders

### Setup inicial para Seeders
Quando criamos um seeder usando o comando do sequelize recebemos um arquivo js com essa estrutura, um objeto contendo duas funções uma chamada `up` que será ativada quando criarmos os seeders no nosso banco de dados e outra chamada  `down` que será ativada quando apagarmos os seeders.
```javascript
module.exports  = {
	up:  async (queryInterface, Sequelize) => {

	},

  
	down:  async (queryInterface, Sequelize) => {
	
	};
};
``` 
### Como criar um Seeder
```javascript
module.exports  = {
	up:  async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("NomeTabela", [{ infos }])
	},
	...
}
``` 
O comando `queryInterface.bulkInsert` é uma função que faz os inserts nas tabelas, ele recebe 2 Parâmetros.

 1. Uma `string` com o nome da Tabela que você quer fazer a inserção.
 2. Um `array de objetos` com as informações que você quer inserir na tabela.
 ### Como deletar um seeder
 
```javascript
module.exports  = {
	...,
	down: async (queryInterface, Sequelize) => {
		return  queryInterface.bulkDelete('NomeTabela')
	}
}
``` 
O comando `queryInsert.bulkDelete` é uma função que apaga os dados de uma tabela, (*OMG um delete sem where*😱 😱), ela só recebe um parâmetro que é uma `string` com o nome da Tabela que você quer apagar os dados

## Como usar o model
Primeiramente você precisa importar o model desse jeito, ele fica em um objeto na /model/index.js
```javascript
const { NomeModel } =  require('../models');

// Buscar todos os itens da tabela
NomeModel.findAll({ options });

// Buscar um item na tabela
NomeModel.findOne({ options })

// Criar um item na tabela
NomeModel.create(item)

// Atualizar um item
NomeModel.update(item, { options })

// Deletar um item
NomeModel.destroy({ options })

``` 

### Exemplos de options

 - where - é um `objeto`, que contem valores que você quer checar nas querys, igual o where do sql
 - attributes - é um `array` com o nome das colunas que você quer que apareça na query (padrão todas as colunas)
 - order - É um `array` que contem varios arrays no formato `["NomeColuna", "ASC || DESC"]` que ordena as querys.

Para mais informações sobre as options leia a [Documentação](http://sequelize.org/master/manual/model-querying-basics.html#simple-select-queries).

## Espero que esse passo a passo tenha te ajudado! 😃
Feito por Leandro Henrique. [Linkedin](https://www.linkedin.com/in/leandro-henrique-soares/) | [Github](https://github.com/Ply3r)