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
//Mascara 
import InputMask from 'react-input-mask';
//Consulta do CEP
import ViaCep from 'react-via-cep';
//Inputs do formulario
import FormInput from './Input.js'


class CadastroLocatario extends Component {
  ValidaCampos(campos){
    //Valida campos vazios
    if(campos.nome == '' ||
      campos.cpf == '' ||
      campos.telefone == '' ||
      campos.logradouro == '' ||
      campos.numero == '' ||
      campos.bairro == '' ||
      campos.cidade == '' ||
      campos.estado == '' ||
      campos.data_nasc == '' ||
      campos.perfil == '' ||
      campos.username == '' ||
      campos.email == '' ||
      campos.password == '') {
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
  
  ValidaSenha(senha,confirmaSenha){
      if(senha === confirmaSenha)
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
    data.cpf = $('#cpf').val().replace(/[\.-]/g, "");
    data.telefone = $('#telefone').val().replace(/[\(\)\.\s-]+/g,"");
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
    var confirmaSenha = $('#ConfirmaSenha').val();
    var valid = this.ValidaCampos(data);


  if (valid.isValid){
      valid = this.ValidaSenha(senha,confirmaSenha);
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
        if(errorResponse.response.status == 400){
          
          if(errorResponse.response.data.cpf){

            errorMessages.push("cpf: " + errorResponse.response.data.cpf[0]);
            toast.error("cpf: " + errorResponse.response.data.cpf[0]);
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
      this.setState({cidade:'',bairro:'', estado: ''}).bind(this);
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
    super(props)
    this.state = { cep: '' , cidade: '', bairro: '', estado: ''};

    this.handleChangeCep = this.handleChangeCep.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }
  handleChangeCep(evt) {
    this.setState({ cep: evt.target.value })
    
  }
  handleSuccess(cepData) {

    //Setar os dados do viaCep nos campos.
    this.setState({cidade:cepData.localidade,bairro:cepData.bairro, estado: cepData.uf}).bind(this);
  }
  render() {
    return (
      <form className="centro" type="POST" id="formLocatario"> 
        <div className="formulario">
          <FormInput campo="Nome" id="nome" placeholder="Digite o nome..." required="true"/>
          <FormInput campo="RG" id="rg" placeholder="Digite a Rg..." required="true"/>
          <FormInput campo="Logradouro" id="logradouro" placeholder="Digite o Logradouro..." mask="999.999.999-99" guide={true} required="true"/>
          <FormInput campo="CPF" id="cpf" campo="Cpf" placeholder="Digite o Cpf..." mask="999.999.999-99" guide={true} required="true"/>
          <FormInput campo="Telefone" id="telefone"mask="(99)99999-9999" guide={true} placeholder="Digite o telefone..."/>
          <div className="form-group">
          <ViaCep cep={this.state.cep} onSuccess={this.handleSuccess} lazy>
            { ({ data, loading, error, fetch }) => {
              if (loading) {
                return <p>Procurando...</p>
              }
              if (error) {
                return <p style="color:'red'">Erro ao consultar CEP...</p>
              }
              if (data) {
                return<div className="form-group">
                  <label htmlFor="CepLabel">Cep</label>
                  <InputMask className="form-control" placeholder="Digite o Cep"onBlur={fetch} onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text"/>
                </div>
                }}
              }
          </ViaCep>
          </div>
          <FormInput campo="Bairro" id="bairro" value={this.state.bairro} placeholder="Digite o Bairro..." required="true"/>
          <FormInput campo="Número" id="numero" value={this.state.numero} placeholder="Digite o Numero..." required="true"/>
          <FormInput campo="Cidade" id="cidade" value= {this.state.cidade} placeholder="Digite a Cidade..." required="true"/>
          <FormInput campo="Estado" id="estado" value= {this.state.estado} placeholder="Digite o Estado..." required="true"/>
          <FormInput campo="Data de nascimento" id="data_nasc" placeholder="Digite a data de nascimento..." required="true"/>
          <FormInput campo="Usuário" id="usuario" placeholder="Digite um nome de usuário..." required="true"/>
          <FormInput campo="E-mail" id="email" placeholder="Digite seu e-mail..." required="true"/>
          <FormInput type="password" campo="Senha" id="senha" placeholder="Digite uma senha..." required="true"/>
          <FormInput type="password" campo="Confirmar senha" id="ConfirmaSenha" placeholder="Digite uma senha..." required="true"/>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="Termo" required/>
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
