// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';
// const container = document.getElementById('app');
// container.appendChild(element);

// Librarys
import React from "react";
import ReactDOM from "react-dom";
// Components
import App from "./components/App";
// Images & Css
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
