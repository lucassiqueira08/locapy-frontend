import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginRegister from './components/pages/login_register';
import LocadorLocatario from './components/pages/locadorlocatario';
import CadastroLocatario from './components/pages/CadastroLocatario';
import CadastroLocador from './components/pages/CadastroLocador';
import PaginaInicial from './components/pages/PaginaInicial';
import CadastroSalas from './components/pages/CadastroSalas';

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={PaginaInicial} />
        <Route path="/CadastroLocatario" exact={true} component={CadastroLocatario} />
        <Route path="/CadastroLocador" exact={true} component={CadastroLocador} />
        <Route path="/LoginRegister" exact={true} component={LoginRegister} />
        <Route path="/LocadorLocatario" exact={true} component={LocadorLocatario} />
        <Route path="/CadastroSalas" exact={true} component={CadastroSalas} />
    </Switch>
</ BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
