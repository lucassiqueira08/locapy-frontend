import React from 'react';
import ReactDOM from 'react-dom';
import CadastroLocatario from './components/pages/CadastroLocatario';
import CadastroLocador from './components/pages/CadastroLocador';
import PaginaInicial from './components/pages/PaginaInicial';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={PaginaInicial} />
        <Route path="/CadastroLocatario" exact={true} component={CadastroLocatario} />
        <Route path="/CadastroLocador" exact={true} component={CadastroLocador} />
    </Switch>
</ BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();