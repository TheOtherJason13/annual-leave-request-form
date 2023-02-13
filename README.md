## ALL steps to set up this project
---
	Getting started (prerequisites):
		Node.js
		Yarn

## Step 1 - Create the "root" directory
```
$ mkdir whatever-foldername-you-chose
```

## Step 2 - Using Vite to get things going
```
$ yarn create vite
```

This will begin the process of scaffolding your project.

When this script completes, enter a name for the project. Next, Vite will prompt to select a framework. For this project, I used React and Typescript.

Now, navigate to the newly created project folder
```
$ cd your-project-name
```

## Step 3 - Using Yarn to build initial dependencies
Use the yarn command to install dependencies for this project
```
$ yarn
```

That's it, as far as the initial set up is concerned. The project now has all the necessary packages, along with React, to get your project started.

Now, run the following command to start the development server:
```
$ yarn run dev
```

Open the localhost and port number provided in a browser:
http://localhost:xxxx/

The page rendered should be the standard Vite + React start page.

	NOTE: If you would like to specify ports, open the vite.config.ts file and add:
```
...
export default defineConfig({

  server: {

    port: xxxx

  },

  preview: {

    port: xxxx

  },
...
```

	The file should look something similar to this:
```
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

  

// https://vitejs.dev/config/

export default defineConfig({

  server: {

    port: xxxx

  },

  preview: {

    port: xxxx

  },

  plugins: [react()],

})
```


## Step 4 - Remove the default/boilerplate 

Use the command below to list the contents of the src/ directory of the project:
```
$ ls src/
```

Remove all files from this directory, with the exception of the main.tsx file. 
```
$ rm src/App.css src/App.tsx src/index.css src/vite-env.d.ts
```

Next, remove the assest directory
```
$ rm -r src/assets
```

Now, use a text editor/IDE to open the main.tsx file and begin making edits.

The first edit will be to remove the reference to the CSS file.
```typescript
import "./index.css"
```

Save this file and then create a new file in the src/ directory called App.tsx.

Add the following code:
```typescript
export default function App() {
return (
<>
<div>Wassup, World?!</div>
</>
);
}
```

You may need to restart the server and run 'yarn run dev' again.


## Step 5 - Let's start building the app, shall we?

We will start by adding all necessary dependencies:
	yarn add react-datepicker
	-or-
	npm install --save @types/react-datepicker
	
	yarn add react-hook-form
	npm install react-hook-form
	







...Stopped Here...
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------


## Set up the package.json file (all dependencies and executable scripts reside here)
```
npm init -y
```

#### Open the **package.json** file that was created and add:
```json
{
  "name": "db_test",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```


### Create an **index.ts** file
### Install the TypeScript dependency:
```
npm install typescript --save-dev
```

### To initialize the **tsconfig.json** file, run:
```
npx tsc --init
```

### In the **tsconfig.json** file add the following:
```json
{
    "compilerOptions": {
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "target": "ES2020",
        "sourceMap": true,
        "outDir": "dist",
    },
    "include": [
        "src/**/*"
    ],
}
```

## Create a **'src'** directory and a **'dist'** directory
### Move the **index.ts** file into the **src** folder
### Now, install the type declarations package
```
npm i -D @types/node
```
#### Open the **index.ts** file and begin package(s) import
```javascript
import * as fs from 'fs';
```

*** Add: ``` "build": "tsc", ``` to the **package.json** file. It should now look like this:
```
{
  "name": "db_test2",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^18.11.15",
    "typescript": "^4.9.4"
  }
}
```

### To compile everything added so far, run:
```
npm run start
```

*** This will build out the properties for the dist folder as well

---

### Install ExpressJS package
```
npm i -D @types/express
```

### Enter the **src** folder and create basic server/GET API with Express by editing **index.ts**. It should look like the following:

```typescript
import express = require("express");
import { Request, Response } from 'express';
import * as fs from 'fs';

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});import express = require("express");
import { Request, Response } from 'express';
import * as fs from 'fs';

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```

## Running TypeScript Files in Node.js
### To generate the index file, instead of using node `src/index.ts`, use:
```
npx tsc src/index.ts
```

### Next, install **ts-node** (Later on in the process, this will execute any **.ts** file using nodemon)
```
npm i -g ts-node
```
### Open the **package.json** file and add ```"start": "npx ts-node src/index.ts",```
#### It should now look like:

```json
{
  "name": "db_test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "npx ts-node src/index.ts",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^18.11.15",
    "typescript": "^4.9.4"
  }
}
```

### Next, install **nodemon**. This will refresh the project's output, as more code is added or changed.
```
npm i --save-dev nodemon
```

### Now add **"start:watch": "nodemon src/index.ts",** to **package.json** in the scripts section to keep **nodemon** running.
```json
"scripts": {
    "start:watch": "nodemon src/index.ts",
    "start": "npx ts-node src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### Create new file called **nodemon.json** in the root directory of the project and assign the following configuration:
```json
{
  "watch": "src/**/*.ts",
  "execMap": {
    "ts": "ts-node"
  }
}
```

### Run the following script to begin the application
```
npm run start:watch
```

### The **package.json** should look similar to this:
```json
{
  "name": "db_test2",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "start": "tsc && node dist/index.js",
    "start:watch": "nodemon src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.15",
    "@types/node": "^18.11.15",
    "@types/nodemon": "^1.19.2",
    "nodemon": "^2.0.20",
    "typescript": "^4.9.4"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```


### Continue by creating and setting up the **tsconfig.json** file (inside root folder):
```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2020",
    "noImplicitAny": true,
    "moduleResolution": "NodeNext",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*", "src/types/*"]
    }
  },
  "include": ["src/**/*"]
}
```

## Dependencies for **MySQL**
```
npm install --save mysql
npm install --save-dev @types/mysql
```


## Create a file called **.env** and another called **.env.local** in the root folder.
### Open the **.env.local** file and enter the following values:
```
export MY_SQL_DB_HOST = '';
export MY_SQL_DB_USER = '';
export MY_SQL_DB_PASSWORD = '';
export MY_SQL_DB_DATABASE = '';
export MY_SQL_DB_CONNECTION_LIMIT = '';
```

#### The **.env.local** file serves as a reference point for the environment variables that are needed in order for the API to function properly. This can be safely committed to Github, as it does not contain any sensitive information.

### Open the **.env** file and add:

```
export MY_SQL_DB_HOST='ccmysql02.claytoncountyga.gov'
export MY_SQL_DB_USER='Devadmin'
export MY_SQL_DB_PASSWORD='cctech01$'
export MY_SQL_DB_DATABASE='buzz'
export MY_SQL_DB_CONNECTION_LIMIT=4
```

> 🛑 Do NOT commit the **.env** to Github. This should be included in the **.gitignore** file.


### In order to load the values for the environment variables, run the following script in the terminal:
```
set -a
source .env
```

##### To test that the values have been set correctly, use **echo**:
```
echo $MY_SQL_DB_DATABASE
```

## The Config file
### Create the **config** folder inside the **src**
### Inside this folder, create a file called **vars.config.ts**
#### Open the **vars.config.ts** and add the following:
```javascript
export const DATA_SOURCES = {
  mySqlDataSource: {
    DB_HOST: process.env.MY_SQL_DB_HOST,
    DB_USER: process.env.MY_SQL_DB_USER,
    DB_PASSWORD: process.env.MY_SQL_DB_PASSWORD,
    DB_DATABASE: process.env.MY_SQL_DB_DATABASE,
    DB_CONNECTION_LIMIT: process.env.MY_SQL_DB_CONNECTION_LIMIT
      ? parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT)
      : 4,
  },
};
```

## MySQL Connector
### Inside the **src** directory create a new path called **api/utils**
### Create a new file called **mysql.connector.ts** (this will be added to: **src/api/utils**)
### Open the **mysql.connector.ts** file and enter the following:
```javascript
import { createPool, Pool } from 'mysql';
import { DATA_SOURCES } from './../../config/vars.config';
const dataSource = DATA_SOURCES.mySqlDataSource;

let pool: Pool;

/**
 * generates pool connection to be used throughout the app
 */
export const init = () => {
    try {
        pool = createPool({
            connectionLimit: dataSource.DB_CONNECTION_LIMIT,
            host: dataSource.DB_HOST,
            user: dataSource.DB_USER,
            password: dataSource.DB_PASSWORD,
            database: dataSource.DB_DATABASE,
        });

        console.debug('MySql Adapter Pool generated successfully');
    } catch (error) {
        console.error('[mysql.connector][init][Error]: ', error);
        throw new Error('failed to initialized pool');
    }
};

/**
 * executes SQL queries in MySQL db
 *
 * @param {string} query - provide a valid SQL query
 * @param {string[] | Object} params - provide the parameterized values used
 * in the query
 */
export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
    try {
        if (!pool) throw new Error('Pool was not created. Ensure pool is created when running the app.');

        return new Promise<T>((resolve, reject) => {
            pool.query(query, params, (error, results) => {
                if (error) reject(error);
                else resolve(results);
            });
        });

    } catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('failed to execute MySQL query');
    }
}
```

### Open the **index.ts** file and add the following:
```javascript
import express from "express";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { generateToken } from "./api/utils/jwt.utils";
import * as path from "path";
import routes from "./api/routes";
import logger from "./api/middlewares/logger.middleware";
import errorHandler from "./api/middlewares/error-handler.middleware";
import * as MySQLConnector from "./api/utils/mysql.connector";

const app = express();
const port = 3000;

// Only generate a token for lower level environments
if (process.env.NODE_ENV !== "production") {
  console.log("JWT", generateToken());
}

// create database pool
MySQLConnector.init();

// serve static files
app.use(express.static(path.join(__dirname, "../public")));

// compresses all the responses
app.use(compression());

// adding set of security middlewares
app.use(helmet());

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());

// add logger middleware
app.use(logger);

app.use("/api/", routes);

// add custom error handler middleware as the last middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

## Time to add some middleware
```
npm i --save @types/compression
npm i cors

```











---
---
---
---
---
## Run 
```
npm run build
```
----
---
---
---
## **WORK ON THIS TO MAKE IT BETTER**
> 🛑 STUCK HERE -- NEEDS FURTHER TROUBLESHOOTING 🛑


### See setting up **tsconfig.json** @ https://www.typescriptlang.org/docs/handbook/compiler-options.html
*** The example below is another way to set the dev environment for Node and TypeScript (for future reference)
```
npm i --save-dev ts-node
```
```"start": "tsc && node dist/index.js",```  














### SOME SQL QUERY IDEAS (STILL NEEDS TO BE CLEANED UP)
#### Ric's query
```SQL
SELECT item_id,
MAX(CASE WHEN buzz.wp_frm_item_metas.field_id = 1902 THEN meta_value END) "Name",
MAX(CASE WHEN buzz.wp_frm_item_metas.field_id = 1894 THEN meta_value END) "ClassTitle",
MAX(CASE WHEN buzz.wp_frm_item_metas.field_id = 1895 THEN meta_value END) "Source",
MAX(CASE WHEN buzz.wp_frm_item_metas.field_id = 1896 THEN meta_value END) "Date",
MAX(CASE WHEN buzz.wp_frm_item_metas.field_id = 1898 THEN meta_value END) "Hours",
MAX(CASE WHEN buzz.wp_frm_item_metas.field_id = 1903 THEN meta_value END) "Division"

FROM buzz.wp_frm_item_metas

WHERE field_id  in (SELECT id FROM buzz.wp_frm_fields WHERE form_id = 83)

GROUP BY buzz.wp_frm_item_metas.item_id
ORDER BY buzz.wp_frm_item_metas.item_id
```
