import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import CadastroLocatario from './components/pages/CadastroLocatario';
import CadastroLocador from './components/pages/CadastroLocador';
import CadastroSala from './components/pages/CadastroSala';
import Home from './components/pages/Home';

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Cadastro/Locatario" exact={true} component={CadastroLocatario} />
        <Route path="/Cadastro/Locador" exact={true} component={CadastroLocador} />
        <Route path="/Cadastro/Sala" exact={true} component={CadastroSala} />
        <Route path="/Login" exact={true} component={Login} />
        <Route path="/Cadastro" exact={true} component={Cadastro} />
    </Switch>
</ BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
