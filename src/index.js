// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import "bootstrap/dist/css/bootstrap.css"
import "./global.css"

const name = "Ejemplo2";
// {} Para ir inyectando variables o expresiones de javascript
// const element = <h1>Hello {name}</h1>;
const sum = () => 3 + 3;
const element = <h1>Hello {sum()}</h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge />, container);
