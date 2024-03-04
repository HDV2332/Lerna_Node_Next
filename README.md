## Web application

### Main technologies.
- Frontend: Next.js framework with React.js.
- Backend: Node.js with Express.
- Build System: Lerna.
- Type checking with Typescript.
- Database: MongoDB with Mongoose Schema.

### Getting the app up and running
- In the root directory, `npm i` to install every required dependencies.
- `npm run dev` to start up development environment.

### Installing additional packages and dependencies
In case the client or server sub-application requires additional package, follow these steps:

- Move to the appropriate sub directory, e.g. `cd packages/server` if the package is for the backend application.
- Install the package `npm i ...`. 
- After installation has finished, move back to the root directory.
- Run `npx learna clean -y`, this will clean up the node_modules folders of sub apps.

### Special requirements.
- Minimum Node.js version of 18.0.0 (currently using v18.19.0).

