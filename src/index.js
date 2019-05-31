import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import CadastroLocatario from './components/pages/CadastroLocatario';
import CadastroLocador from './components/pages/CadastroLocador';
import Home from './components/pages/Home';
import CadastroSalas from './components/pages/CadastroSalas';

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Cadastro/Locatario" exact={true} component={CadastroLocatario} />
        <Route path="/Cadastro/Locador" exact={true} component={CadastroLocador} />
        <Route path="/Login" exact={true} component={Login} />
        <Route path="/Cadastro" exact={true} component={Cadastro} />
        <Route path="/CadastroSalas" exact={true} component={CadastroSalas} />
    </Switch>
</ BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
