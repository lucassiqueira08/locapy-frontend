import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import {ToastsContainer, ToastsStore} from 'react-toasts';

class CadastroLocador extends Component {
  componentDidMount(){
    //Metodo que é executado após o componente ser rendenizado
  }
  handleDelete(e, i){
    //e.preventDefault;

  }
  PostLocador(){
    // debugger;
    var url = '/cadastro/locador';
    var data = {};
    data.nome_fantasia = $('#nome_fantasia').text();
    data.razao_social = $('#razao_social').text();
    data.inscricao_estadual = $('#inscricao_estadual').text();
    data.cnpj = $('#cnpj').text();
    data.endereco = $('#endereco').text();
    data.telefone = $('#telefone').text();
    data.perfil = $('#perfil').text();

    console.log(data)

    ToastsStore.success("Hey, you just clicked!")

    // $.ajax({
    //   type: "POST",
    //   url: url,
    //   data: JSON.stringify(data),
    //   success: function(){
    //     alert("Locador cadastrado com sucesso!")
    //   },
    //   error: function(){
    //     alert("Erro!")
    //   },
    //   dataType: JSON
    // });
  }

  render() {
    return (
      <div className="centro" onSubmit="this.preventDefault()">
        <form className="formulario">
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
          <button type="submit" className="btn btn-primary" onClick ={this.PostLocador(this)}>Cadastrar</button>
          <button   onClick={(e,i) => this.handleDelete(e,i)}>Click me</button>

          <ToastsContainer store={ToastsStore}/>
        </form>
      </div>
    );
  }
}

export default CadastroLocador;
