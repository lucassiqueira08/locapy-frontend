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
    if(campos.nome == '' ||
    campos.cpf == '' ||
    
    campos.cpf == '' ||
    campos.endereco == '' ||
    campos.telefone == '' ||
    campos.perfil.usuario.username == '' ||
    campos.perfil.usuario.email == '' ||
    campos.perfil.usuario.password == '') {
      return {"isValid" : false, "msg" : "Todos os campos são obrigatórios!"};
    }
    if(campos.perfil.usuario.password.length < 8) {
      return {"isValid" : false, "msg" : "A senha precisa ter pelo menos 8 dígitos!"};
    }
    return {"isValid" : true}
  }
  ValidaTermo(termo){
    
    if (termo){
      return {"isValid" : true};
    }else{
      return {"isValid" : false,  "msg" : "Você precisa aceitar o termo"};
    }


  }
  
  PostLocador(e){    
    e.preventDefault();
    // debugger;
    var url = 'http://localhost:8000/cadastro/locatario/';
    var data = {};
    var header = {
      'Content-Type':"application/json",
    }
    data.nome = $('#nome').val();
    data.cpf = $('#cpf').val();
    data.telefone = $('#telefone').val();
    data.logradouro = $('#logradouro').val();
    data.numero = $('#numero').val();
    data.bairro = $('#bairro').val();
    data.cidade = $('#cidade').val();
    data.estado = $('#estado').val();
    data.data_nasc = $('#data_nasc').val();
    data.perfil = {
      "usuario": {
          "username":  $('#usuario').val(),
          "email": $('#email').val(),
          "password": $('#senha').val(),
      }
    }
    debugger;
    console.log(data)
    var CheckTermo =   $('#Termo').is(':checked');
    var valid = this.ValidaCampos(data);
    //Validação do termo.
    valid = this.ValidaTermo(CheckTermo); 


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
          if(errorResponse.response.data.cpf){
            errorMessages.push("cpf: " + errorResponse.response.data.cpf[0])
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
            <label htmlFor="nome">Nome:</label>
            <input type="text" className="form-control" id="nome" placeholder="Digite o nome..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="Rg">RG</label>
            <input type="text" className="form-control" id="rg" placeholder="Digite a Rg..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="cpf">Cpf</label>
            <input type="text" className="form-control" id="cpf" placeholder="Digite o Cpf..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="endereco">Logradouro</label>
            <input type="text" className="form-control" id="logradouro" placeholder="Digite o Logradouro..."/>
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input type="text" className="form-control" id="telefone" placeholder="Digite o telefone..."/>
          </div>
          <div className="form-group">
            <label htmlFor="Bairro">Bairro</label>
            <input type="text" className="form-control" id="Bairro" placeholder="Digite o Bairro..."/>
          </div>
          <div className="form-group">
            <label htmlFor="Numero">Numero</label>
            <input type="text" className="form-control" id="Numero" placeholder="Digite o Numero..."/>
          </div>
          <div className="form-group">
            <label htmlFor="Cidade">Cidade</label>
            <input type="text" className="form-control" id="Cidade" placeholder="Digite a Cidade..."/>
          </div>
          <div className="form-group">
            <label htmlFor="Estado">Estado</label>
            <input type="text" className="form-control" id="Estado" placeholder="Digite o Estado..."/>
          </div>
          <div className="form-group">
            <label htmlFor="DataNasc">Data de Nascimento</label>
            <input type="text" className="form-control" id="data_nasc" placeholder="Digite a data de nascimento..."/>
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
            <input type="checkbox" className="form-check-input" id="Termo"/>
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
