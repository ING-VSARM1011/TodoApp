Todoapp
Todoapp is an application built with Angular 20.3.

Prerequisites
Make sure you have the following installed:

Node.js 24.x

npm 9.x or later

Development server
Run:

npm start

Then navigate to http://localhost:4200/.

The application automatically reloads when you change any of the source files.

Code scaffolding
Angular CLI can be used to generate application code.

For example:

ng generate component component-name

You can also generate other types of artifacts:

ng generate directive directive-name
ng generate pipe pipe-name
ng generate service service-name
ng generate class class-name
ng generate guard guard-name

The project is configured to skip generating unit test files for new artifacts.

Build
Run:

npm run build

The build artifacts are generated in the dist/todoapp/ directory.

For a development build:

npm run watch

Unit tests
Run:

npm test

Unit tests are configured to run with Karma and Jasmine.

Note: The project currently does not contain unit test files, so npm test may report that no test inputs were found.

Technology stack
Angular 20.3

Angular CLI 20.3

TypeScript 5.9

RxJS 7.8

Zone.js 0.15

Node.js 24

Security
Project dependencies are regularly checked with npm's security audit:

npm audit

The project currently reports 0 known vulnerabilities.

Useful commands
Command	Description
npm start	Start the development server
npm run build	Build the application
npm run watch	Build in watch mode
npm test	Run unit tests
npx ng version	Display Angular and environment versions
npm audit	Check dependencies for known vulnerabilities

Further help
For more information about Angular CLI, run:

ng help

You can also visit the Angular documentation.