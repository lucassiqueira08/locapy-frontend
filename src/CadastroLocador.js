import React, { Component } from 'react';
import './App.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
//JQUERY
import $ from 'jquery';
//JQUERY MASKS
import InputMask from 'react-input-mask';
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
    if( campos.nome_fantasia == '' ||
        campos.razao_social == '' ||
        campos.inscricao_estadual == '' ||
        campos.cnpj == '' ||
        campos.endereco == '' ||
        campos.telefone == '' ||
        campos.usuario == '' ||
        campos.email == '' ||
        campos.senha == '' ||
        campos.Termo == '') {
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
            <InputMask className="form-control" guide={true}id="nome_fantasia" placeholder="Digite o nome fantasia..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="razao_social">Razão social</label>
            <InputMask className="form-control" guide={true}id="razao_social" placeholder="Digite a razão social..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="inscricao_estadual">Inscrição estadual</label>
            <InputMask className="form-control" guide={true}id="inscricao_estadual" placeholder="Digite a inscrição estadual..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="cnpj">cnpj</label>
            <InputMask className="form-control" mask="99.999.999/9999-99" guide={true}id="cnpj" placeholder="Digite o cnpj..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="endereco">Endereço</label>
            <InputMask className="form-control" guide={true}id="endereco" placeholder="Digite o endereço..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <InputMask className="form-control" mask="(99)99999-9999" guide={true}id="telefone" placeholder="Digite o telefone..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="usuario">Usuário</label>
            <InputMask className="form-control" guide={true}id="usuario" placeholder="Digite um nome de usuário..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <InputMask className="form-control" type="email" guide={true}id="email" placeholder="Digite seu e-mail..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <InputMask className="form-control" mask="" guide={true}id="senha" placeholder="Digite uma senha..." required/>
          </div>
          <div className="form-checkid=">
            <input type="checkbox" className="form-check-input" />
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
