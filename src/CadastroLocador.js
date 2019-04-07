import React, { Component } from 'react';
import './App.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
//JQUERY
import $ from 'jquery';
//Componte de requests HTTPS
import axios from 'axios';
//Toast message
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class CadastroLocador extends Component {
  ValidaCampos(campos){
    //debugger;
    //Valida campos vazios
    if(campos.nome_fantasia == '' ||
    campos.inscricao_estadual == '' ||
    campos.cnpj == '' ||
    campos.perfil.usuario.username == '' ||
    campos.perfil.usuario.email == '' ||
    campos.perfil.usuario.password == '') {
      return {"isValid" : false, "msg" : "Todos os campos são obrigatórios!"};
    }
    if(campos.perfil.usuario.password.length < 8) {
      return {"isValid" : false, "msg" : "A senha precisa ter mais de 8 dígitos!"};
    }
    return {"isValid" : true}
  }
  PostLocador(e){    
    e.preventDefault();
    // debugger;
    var url = 'http://localhost:8000/cadastro/locador/';
    var data = {};
    var header = {
      'Content-Type':"application/json",
    }
    data.nome_fantasia = $('#nome_fantasia').val();
    data.razao_social = $('#razao_social').val();
    data.inscricao_estadual = $('#inscricao_estadual').val();
    data.cnpj = $('#cnpj').val();
    data.endereco = $('#endereco').val();
    data.telefone = $('#telefone').val();
    data.perfil = {
      "usuario": {
          "username":  $('#usuario').val(),
          "email": $('#email').val(),
          "password": $('#senha').val(),
      }
    }
    var valid = this.ValidaCampos(data);

    if (valid.isValid){
      axios.post(url, data, header)
      .then(response => { 
        toast.success("Locador cadastrado com sucesso!");        
        $('#formLocador').trigger("reset");
      })
      .catch(error => {
        var errorResponse = JSON.parse(JSON.stringify(error));
        var errorMessages = [];
        console.log(errorResponse);
        if(errorResponse.response.status == 400){
          if(errorResponse.response.data.cnpj){
            errorMessages.push("CNPJ: " + errorResponse.response.data.cnpj[0])
          }
          if(errorResponse.response.data.perfil.usuario.username){
            errorMessages.push("Username: " + errorResponse.response.data.perfil.usuario.username[0])
          }
          if(errorResponse.response.data.perfil.usuario.email){
            errorMessages.push("E-Mail: " + errorResponse.response.data.perfil.usuario.email[0])
          }
        }
        else if(errorResponse.response.status == 500){
          errorMessages.push("Erro interno no servidor...")
        }
        errorMessages.forEach(element => {
          toast.error(element);
        });
      });
    }
    else{
      toast.error(valid.msg);
    }
  }
  componentDidMount(){
    toast.configure({
      autoClose: 5000,
    });   
    //Metodo que é executado após o componente ser rendenizado
  }
  componentWillMount(){
    //Metodo que é executado antes do componente ser rendenizado
  }
  render() {
    return (
      <form className="centro" type="POST" id="formLocador"> 
        <div className="formulario">
          <div className="form-group">
            <label htmlFor="nome_fantasia">Nome fantasia:</label>
            <input type="text" className="form-control" id="nome_fantasia" placeholder="Digite o nome fantasia..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="razao_social">Razão social</label>
            <input type="text" className="form-control" id="razao_social" placeholder="Digite a razão social..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="inscricao_estadual">Inscrição estadual</label>
            <input type="text" className="form-control" id="inscricao_estadual" placeholder="Digite a inscrição estadual..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="cnpj">cnpj</label>
            <input type="text" className="form-control" id="cnpj" placeholder="Digite o cnpj..." required/>
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
            <label htmlFor="usuario">Usuário</label>
            <input type="text" className="form-control" id="usuario" placeholder="Digite um nome de usuário..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input type="password" className="form-control" id="senha" placeholder="Digite uma senha..." required/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id=""/>
            <label className="form-check-label" htmlFor="termos_de_uso">Eu li e concordo com os termos de uso</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => this.PostLocador(e)}>Cadastrar</button>
        
        </div>
          <ToastContainer />
      </form>
    );
  }
}

export default CadastroLocador;
