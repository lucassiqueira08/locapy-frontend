import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CadastroLocatario from './CadastroLocatario';
import CadastroLocador from './CadastroLocador';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// importando o BrowserRouter do pacote que acabamos de instalar
ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={CadastroLocatario} />
        <Route path="/CadastroLocatario" exact={true} component={CadastroLocatario} />
        <Route path="/CadastroLocador" exact={true} component={CadastroLocador} />
    </Switch>
</ BrowserRouter>,

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
