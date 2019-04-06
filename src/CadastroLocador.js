import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import {ToastsContainer, ToastsStore} from 'react-toasts';
import axios from 'axios';

class CadastroLocador extends Component {
  
  PostLocador(e){
    e.preventDefault();
    //debugger;
    var url = 'http://localhost:8000/cadastro/locador/';
    var data = {};
    var header = {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'http://localhost:3000'
    }

    data.nome_fantasia = $('#nome_fantasia').val();
    data.razao_social = $('#razao_social').val();
    data.inscricao_estadual = $('#inscricao_estadual').val();
    data.cnpj = $('#cnpj').val();
    data.endereco = $('#endereco').val();
    data.telefone = $('#telefone').val();
    data.perfil = $('#perfil').val();
    console.log(data);
    //ToastsStore.success("Na teoria deu certo...")


    axios.post(url, data, header)
    .then(function (response) {
      ToastsStore.success(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    // $.ajax({
    //   type: "POST",
    //   url: url,
    //   data: JSON.stringify(data),
    //   success: function(){
    //     ToastsStore.success("Locador cadastrado com sucesso!");
    //   },
    //   error: function(){
    //     ToastsStore.error("Erro!");
    //   },
    //   dataType: JSON
    // });
  }
  componentDidMount(){
    //Metodo que é executado após o componente ser rendenizado
  }
  render() {
    return (
      <form className="centro" type="POST">
        <div className="formulario">
          <div className="form-group">
            <label htmlFor="nome_fantasia">Nome fantasia:</label>
            <input type="text" className="form-control" id="nome_fantasia" placeholder="Digite o nome fantasia..."/>
          </div>
          <div className="form-group">
            <label htmlFor="razao_social">Razão social</label>
            <input type="text" className="form-control" id="razao_social" placeholder="Digite a razão social..."/>
          </div>
          <div className="form-group">
            <label htmlFor="inscricao_estadual">Inscrição estadual</label>
            <input type="text" className="form-control" id="inscricao_estadual" placeholder="Digite a inscrição estadual..."/>
          </div>
          <div className="form-group">
            <label htmlFor="cnpj">cnpj</label>
            <input type="text" className="form-control" id="cnpj" placeholder="Digite o cnpj..."/>
          </div>
          <div className="form-group">
            <label htmlFor="endereco">Endereço</label>
            <input type="text" className="form-control" id="endereco" placeholder="Digite o endereço..."/>
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input type="text" className="form-control" id="telefone" placeholder="Digite o telefone..."/>
          </div>
          <div className="form-group">
            <label htmlFor="perfil">Perfil</label>
            <input type="text" className="form-control" id="perfil" placeholder="Digite o perfil..."/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id=""/>
            <label className="form-check-label" htmlFor="termos_de_uso">Eu li e concordo com os termos de uso</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => this.PostLocador(e)}>Cadastrar</button>
          <ToastsContainer store={ToastsStore}/>
        </div>
      </form>
    );
  }
  
}

export default CadastroLocador;
