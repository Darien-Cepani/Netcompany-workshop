<h3 align="center">TechPro Frontend Workshop</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/theomeli/techpro-frontend-workshop/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/theomeli/techpro-frontend-workshop/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<!-- align="center" -->
<p> An Angular vs ReactJS comparison through simple projects. Also an introduction to the Javascript modules and bundling using webpack.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Installing and Running](#installing_and_running)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about" id="about"></a>

This repository consists of the following projects which by order also corresponds to the workshop flow: 
- non-bundled-site. A simple site using a main Javascript file and an imported module file.
- bundled-site. A simple site using also a Javascript file and an imported module file but also [Webpack](https://webpack.js.org/) is used.
- angular-form. An Angular project with a [Reactive Form](https://angular.io/guide/reactive-forms) with input validation using ReactiveFormsModule module.
- react-form. A ReactJS project with a form with input validation.

## 🏁 Getting Started <a name = "getting_started" id="getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

You will need to install nodeJS >= v14.21.3 and npm >= v6.14.18. You should check it via:
```
node -v
npm -v
```
In order to install nodeJS please refer to [NodeJS page](https://nodejs.org/en).


## 🔧  Installing and Running <a name = "tests" id="installing_and_running"></a>
To install and run the projects you should follow the following steps:
- non-bundled-site. 
```
cd non-bundled-site
npx serve
```
- bundled-site
```
cd bundled-site
npm i && npm run build && npx serve
```
- angular-form and react-form
```
cd angular-form
```
or
```
cd react-form
```
```
npm i && npm run start
```
<!-- Explain how to run the automated tests for this system.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
``` -->

### And coding style

In all projects we follow the proposed [coding style](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

<!-- 
## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system. -->

## 🚀 Deployment <a name = "deployment" id="deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using" id="built_using"></a>

- [ReactJS](https://react.dev/) - Web Framework
- [Angular](https://angularjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors" id="authors"></a>

- [@theomeli](https://github.com/theomeli) - Idea & Initial work

See also the list of [contributors](https://github.com/theomeli/techpro-frontend-workshop/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement" id="acknowledgement"></a>
We also write down some references:

- [What is npm](https://www.w3schools.com/whatis/whatis_npm.asp)
- [Modules in JavaScript](https://www.freecodecamp.org/news/modules-in-javascript/)
- [Cors Policy](https://stackoverflow.com/questions/52919331/access-to-script-at-from-origin-null-has-been-blocked-by-cors-policy)
- [Angular Course](https://www.udemy.com/course/the-complete-guide-to-angular-2/)
