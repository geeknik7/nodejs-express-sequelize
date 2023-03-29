# nodejs-express-sequelize
#This is the basic project setup for backend using nodejs.

-In this project i have user express as a framework. done basic routing using express.Router()
-I have used sequelize ORM (Object relational mapping) for mysql database connection and CRUD operation.
-I have also done validation using joi validation.
-implemented JWT token validation
-Babel setup and ES6 features
-env setup for secrets

babel setup steps -
To enable es6 babel in nodejs project -
1)firstly init project with npm init -y
2)create file .babelrc and instert below code -
{
    "presets": [
      ["@babel/env", {
        "targets": {
          "node": "current"
        }
      }]
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread"
    ]
  }
3)install npm package -
	npm i @babel/cli @babel/core @babel/node @babel/preset-env express --save-dev
4)install nodemon -
	npm i nodemon
5)write start script in package.json 
	nodemon --exec babel-node index.js
6)create index.js
7)write your code and enjoy ;)
