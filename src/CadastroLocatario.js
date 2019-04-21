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
import InputMask from 'react-input-mask';
import ViaCep from '../dist';
toast.configure()

class CadastroLocatario extends Component {
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
  
  ComparaSenha(senha,senha2){
      if(senha == senha2)
      {
        return {"isValid" : true};

      }else{
        return {"isValid" : false,  "msg" :"A senhas digitadas são diferentes"};
      }


  }
  
  PostLocatario(e){    
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
    var CheckTermo =   $('#Termo').is(':checked');
    var senha = $('#senha').val();
    var senha2 = $('#ConfirmaSenha').val();
    var valid = this.ValidaCampos(data);


 if (valid.isValid){
    valid = this.ComparaSenha(senha,senha2);
 }
    //Validação do termo.
    if (valid.isValid){
    valid = this.ValidaTermo(CheckTermo); 

    }
    if (valid.isValid){
      axios.post(url, data, header)
      .then(response => { 
        toast.success("Locatario cadastrado com sucesso!");        
        $('#formLocatario').trigger("reset");
      })
      .catch(error => {
        var errorResponse = JSON.parse(JSON.stringify(error));
        var errorMessages = [];
        console.log(errorResponse);
        console.log(errorResponse.response.data);
        if(errorResponse.response.status == '400'){
          if(errorResponse.response.data.cpf){
            errorMessages.push("cpf: " + errorResponse.response.data.cpf[0]);
         
          }
          if(errorResponse.response.data.perfil.usuario.username){
            errorMessages.push("Usuario: " + errorResponse.response.data.perfil.usuario.username[0]);
           
          }
          if(errorResponse.response.data.perfil.usuario.email){
            errorMessages.push("E-Mail: " + errorResponse.response.data.perfil.usuario.email[0]);
           
          }
        }
        else if(errorResponse.response.status == 500){
          errorMessages.push("Erro interno no servidor...");
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
  constructor(props) 
  {

    super(props);
    this.state = { cep: '' , cidade: '', bairro: '', estado: ''};

    this.handleChangeCep = this.handleChangeCep.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }
  handleChangeCep(evt) {
    this.setState({ cep: evt.target.value })
    
  }
  handleSuccess(cepData) {
    console.log(cepData);
    //Setar os dados do viaCep nos campos.
    this.setState({cidade:cepData.localidade,bairro:cepData.bairro, estado: cepData.uf}).bind(this);



  }
  render() {
    return (
      <form className="centro" type="POST" id="formLocatario"> 
        <div className="formulario">
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <InputMask type="text" className="form-control" id="nome" placeholder="Digite o nome..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="Rg">RG</label>
            <InputMask type="text" className="form-control" id="rg" placeholder="Digite a Rg..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="cpf">Cpf</label>
            <InputMask type="text" mask="999.999.999-99" guide={true} className="form-control" id="cpf" placeholder="Digite o Cpf..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="endereco">Logradouro</label>
            <InputMask type="text" className="form-control" id="logradouro" placeholder="Digite o Logradouro..."/>
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <InputMask type="text" mask="(99)99999-9999" guide={true} className="form-control" id="telefone" placeholder="Digite o telefone..."/>
          </div>
          <div className="form-group">
          <ViaCep cep={this.state.cep} onSuccess={this.handleSuccess} lazy>
          { ({ data, loading, error, fetch }) => {
            if (loading) {
              return <p>loading...</p>
            }
           
            return<div className="form-group">
              <label htmlFor="CepLabel">Cep</label>
              <InputMask className="form-control" placeholder="Digite o Cep"onBlur={fetch} onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text"/>
     
            </div>
          }}
        </ViaCep>
          </div>
          <div className="form-group">
            <label htmlFor="bairro">Bairro</label>
            <InputMask type="text" className="form-control" value={this.state.bairro}  id="bairro" placeholder="Digite o Bairro..."/>
          </div>
          <div className="form-group">
            <label htmlFor="Numero">Numero</label>
            <InputMask type="text" className="form-control"  id="numero" placeholder="Digite o Numero..."/>
          </div>
          <div className="form-group">
            <label htmlFor="Cidade">Cidade</label>
            <InputMask type="text" className="form-control" value= {this.state.cidade} id="cidade" placeholder="Digite a Cidade..."/>
          </div>
          <div className="form-group">
            <label htmlFor="estado">Estado</label>
            <InputMask type="text" className="form-control" value= {this.state.estado}  id="estado" placeholder="Digite o Estado..."/>
          </div>
          <div className="form-group">
            <label htmlFor="DataNasc">Data de Nascimento</label>
            <InputMask type="date" className="form-control" id="data_nasc" placeholder="Digite a data de nascimento..."/>
          </div>
          <div className="form-group">
            <label htmlFor="usuario">Usuário</label>
            <InputMask type="text" className="form-control" id="usuario" placeholder="Digite um nome de usuário..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <InputMask type="email"  className="form-control" id="email" placeholder="Digite seu e-mail..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input type="password" className="form-control" id="senha" placeholder="Digite uma senha..." required/>
          </div>
          <div className="form-group">
            <label htmlFor="senha">Confirme a senha</label>
            <input type="password" className="form-control" id="ConfirmaSenha" placeholder="Digite uma senha..." required/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="Termo"/>
            <label className="form-check-label" htmlFor="termos_de_uso">Eu li e concordo com os termos de uso</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => this.PostLocatario(e)}>Cadastrar</button>
        
        </div>
          <ToastContainer />
      </form>
    );
  }
}

export default CadastroLocatario;
