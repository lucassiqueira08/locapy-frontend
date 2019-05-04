import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
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
    if( campos.nome_fantasia === '' ||
        campos.razao_social === '' ||
        campos.inscricao_estadual === '' ||
        campos.cnpj === '' ||
        campos.endereco === '' ||
        campos.telefone === '' ||
        campos.usuario === '' ||
        campos.email === '' ||
        campos.senha === '' ||
        campos.Termo === '') {
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
        
        if(errorResponse.response.status === 400){
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
        else if(errorResponse.response.status === 500){
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
      <body>
        <div className='form'>
          <div className="row">
          <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="register-form">
                <form type="POST" id="formLocador">
                  <div className="row">
                    <div className="col-md-4">
                        <div className="imagemusu img-circle"></div>             
                    </div>
                    <div className="col-md-8">
                      <div className="form-group usu">   
                        <label htmlFor="usuario">Usuário</label>                     
                        <InputMask className="form-control" guide={true}id="usuario" placeholder="Digite o nome de usuário..." required/>
                        
                      </div>

                      <div className="form-group usu"> 
                        <label htmlFor="senha">Senha</label>                        
                        <InputMask className="form-control" mask="" guide={true}id="senha" placeholder="Digite a Senha..." required/>
                        
                      </div>

                      <div className="form-group usu">   
                        <label htmlFor="senha">Confirma Senha</label>                      
                        <InputMask className="form-control" mask="" guide={true}id="senha" placeholder="Digite novamente a Senha..." required/>
                        
                      </div>

                      <div className="form-group usu">
                        <label htmlFor="email">E-mail</label>                        
                        <InputMask className="form-control" type="email" guide={true}id="email" placeholder="Digite o Email..." required/>
                        
                      </div>   
                    </div>
                  </div>

                  <hr className="mb-3"></hr>
                  
                  <div className='row'>
                    <div className="form-group col-md-12">
                      <label htmlFor="razao_social">Razão Social</label>
                      <InputMask className="form-control" guide={true} id="razao_social" placeholder="Digite a razão social..." required />
                    </div>
                  </div>

                  <div className='row'>
                    <div className="form-group col-md-12">
                      <label htmlFor="nome_fantasia">Nome Fantasia</label>
                      <InputMask className="form-control" guide={true} id="nome_fantasia" placeholder="Digite o nome fantasia..." required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="cnpj">CNPJ</label>
                      <InputMask className="form-control" mask="99.999.999/9999-99" guide={true}id="cnpj" placeholder="Digite o CNPJ..." required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inscricao_estadual">Inscrição Estadual</label>
                      <InputMask className="form-control" guide={true}id="inscricao_estadual" placeholder="Digite a inscrição estadual..." required/>
                    </div>
                  </div>

                  <div className='row'>
                    <div className="form-group col-md-12">
                      <label htmlFor="endereco">Endereço</label>
                      <InputMask className="form-control" guide={true}id="endereco" placeholder="Digite o endereço..." required/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="cidade">Cidade</label>
                      <InputMask className="form-control" guide={true}id="" placeholder="Digite o Cidade..." required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="bairro">Bairro</label>
                      <InputMask className="form-control" guide={true}id="" placeholder="Digite o Bairro..." required/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="telefone">Telefone</label>
                      <InputMask className="form-control" mask="(99)99999-9999" guide={true}id="telefone" placeholder="Digite o telefone..." required/>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label htmlFor="email">E-mail</label>
                      <InputMask className="form-control" type="email" guide={true}id="email" placeholder="Digite seu e-mail..." required/>
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" id='termo' name='termo' className="form-check-input" />
                    <label className="form-check-label" htmlFor="termos_de_uso">Eu li e concordo com os termos de uso</label>
                  </div>  

                  <hr></hr>
                  <div className="row">
                    <div className="col-md-10 mb-3"></div>
                    <div className="col-md-2 mb-3">         
                      <button type="submit" className="btn btn-cadastra" onClick={(e) => this.PostLocador(e)}>Cadastrar</button>
                    </div>
                  </div>
                  <ToastContainer />
                </form>
              </div>
            </div>
          <div className="col-lg-2"></div>
          </div>
        </div>
      </body>
    );
  }
}

export default CadastroLocador;
