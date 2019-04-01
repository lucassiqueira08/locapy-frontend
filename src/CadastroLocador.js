import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
class CadastroLocador extends Component {
  render() {
    return (
      <div class="centro">
        <form class="formulario-teste">
          <div class="form-group">
            <label for="nome_fantasia">Nome fantasia:</label>
            <input type="text" class="form-control" id="nome_fantasia" placeholder="Digite o nome fantasia..."/>
          </div>
          <div class="form-group">
            <label for="razao_social">Razão social</label>
            <input type="text" class="form-control" id="razao_social" placeholder="Digite a razão social..."/>
          </div>
          <div class="form-group">
            <label for="inscricao_estadual">Inscrição estadual</label>
            <input type="text" class="form-control" id="inscricao_estadual" placeholder="Digite a inscrição estadual..."/>
          </div>
          <div class="form-group">
            <label for="cnpj">cnpj</label>
            <input type="text" class="form-control" id="cnpj" placeholder="Digite o cnpj..."/>
          </div>
          <div class="form-group">
            <label for="endereco">Endereço</label>
            <input type="text" class="form-control" id="endereco" placeholder="Digite o endereço..."/>
          </div>
          <div class="form-group">
            <label for="telefone">Telefone</label>
            <input type="text" class="form-control" id="telefone" placeholder="Digite o telefone..."/>
          </div>
          <div class="form-group">
            <label for="plano">Plano</label>
            <input type="text" class="form-control" id="plano" placeholder="Digite o plano..."/>
          </div>
          <div class="form-group">
            <label for="perfil">Perfil</label>
            <input type="text" class="form-control" id="perfil" placeholder="Digite o perfil..."/>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="“Eu li e concordo com os termos de uso"/>
            <label class="form-check-label" for="termos_de_uso">Eu li e concordo com os termos de uso</label>
          </div>
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default CadastroLocador;
