(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){},40:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=function(){function e(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(a,t,r){return t&&e(a.prototype,t),r&&e(a,r),a}}(),o=n(t(0)),l=n(t(1));function n(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={data:null,loading:!1,error:!1},t.getCep=t.getCep.bind(t),t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,o.default.Component),r(a,[{key:"componentDidMount",value:function(){this.props.lazy||this.getCep()}},{key:"getCep",value:function(){var e=this;this.setState({loading:!0}),fetch("https://viacep.com.br/ws/"+this.props.cep+"/json/").then(function(e){return e.json()}).then(function(a){e.setState({data:a,loading:!1,error:!1}),e.props.onSuccess(a)}).catch(function(a){e.setState({error:!0,loading:!1})})}},{key:"render",value:function(){return this.props.children({loading:this.state.loading,data:this.state.data,error:this.state.error,fetch:this.getCep})||null}}]),a}();c.PropTypes={cep:l.default.string.isRequired,lazy:l.default.bool,onSuccess:l.default.func},a.default=c},43:function(e,a,t){e.exports=t(78)},78:function(e,a,t){"use strict";t.r(a);var r=t(0),o=t.n(r),l=t(19),n=t.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(6),s=t(16),m=t(9),i=t(7),u=t(11),d=t(10),p=t(12),E=(t(18),t(22),function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("body",{className:"loginpage"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"left"},o.a.createElement("div",{className:"login"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:"",alt:"Logo LocaPy"})),o.a.createElement("form",null,o.a.createElement("div",null,o.a.createElement("label",null,"Email ou Usu\xe1rio"),o.a.createElement("input",{type:"text",className:"text-input"})),o.a.createElement("div",null,o.a.createElement("label",null,"Senha"),o.a.createElement("input",{type:"password",className:"text-input"})),o.a.createElement("button",{type:"submit",className:"btn-login"},"Entrar")),o.a.createElement(c.b,{className:"links",to:"/"},o.a.createElement("a",null,"Esqueci minha Senha")),o.a.createElement("div",{className:"ou"},o.a.createElement("hr",{className:"bar"}),o.a.createElement("span",null,"OU"),o.a.createElement("hr",{className:"bar"})),o.a.createElement(c.b,{className:"btn-register",to:"/LocadorLocatario"},o.a.createElement("a",null,"Criar conta")))),o.a.createElement("div",{className:"right"},o.a.createElement("div",{className:"showimg"},o.a.createElement("div",{className:"showimg-content"},o.a.createElement("h1",{className:"showimg-text"},"Alugar nunca foi t\xe3o ",o.a.createElement("strong",null,"F\xc1CIL")),o.a.createElement(c.b,{to:"/"},o.a.createElement("a",{className:"btn-know"},"Conhecer")))))))}}]),a}(r.Component)),f=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("body",{className:"choice"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"01"),o.a.createElement("h3",null,"Locador"),o.a.createElement("p",null,"Anuncie suas salas de reuni\xe3o e pare de perder dinheiro com locais ociosos!"),o.a.createElement(c.b,{to:"/CadastroLocador",className:"btn-cadastra"},o.a.createElement("a",null,"CADASTRAR-SE")))),o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"02"),o.a.createElement("h3",null,"Locatario"),o.a.createElement("p",null,"Encontre sua proxima sala de reuni\xe3o e deixe de lado as complica\xe7\xf5es !"),o.a.createElement(c.b,{to:"/CadastroLocatario",className:"btn-cadastra"},o.a.createElement("a",null,"CADASTRAR-SE"))))))}}]),a}(r.Component),h=t(27),v=t(17),g=t(2),b=t.n(g),N=t(3),y=t.n(N),C=t(23),j=t.n(C),O=t(4),k=(t(25),t(40)),x=t.n(k);O.b.configure();var S=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={toIndex:!1},t.state={cep:"",estado:""},t.handleChangeCep=t.handleChangeCep.bind(Object(v.a)(Object(v.a)(t))),t.handleSuccess=t.handleSuccess.bind(Object(v.a)(Object(v.a)(t))),t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"redirectToIndex",value:function(){var e=this;setTimeout(function(){e.setState(function(){return{toIndex:!0}})},5e3)}},{key:"ValidaCampos",value:function(e){return e.nome,e.cpf,e.telefone,e.cep,e.numero,e.data_nasc,e.ab,e.usuario,e.email,e.senha,""==e.ConfirmaSenha?{isValid:!1,msg:"Todos os campos s\xe3o obrigat\xf3rios!"}:e.perfil.usuario.password.length<8?{isValid:!1,msg:"A senha precisa ter pelo menos 8 d\xedgitos!"}:e.senha!==e.senha2?{isValid:!1,msg:"A senhas digitadas s\xe3o diferentes"}:{isValid:!0}}},{key:"ValidaTermo",value:function(e){return e?{isValid:!0}:{isValid:!1,msg:"Voc\xea precisa aceitar o termo"}}},{key:"PostLocatario",value:function(e){var a=this;e.preventDefault();var t={};t.nome=b()("#nome").val(),t.cpf=b()("#cpf").val().replace(/[\.-]/g,""),t.telefone=b()("#telefone").val().replace(/[\(\)\.\s-]+/g,""),t.logradouro=b()("#logradouro").val(),t.numero=b()("#numero").val(),t.estado=b()("#estado").val(),t.data_nasc=b()("#data_nasc").val(),t.perfil={usuario:{username:b()("#usuario").val(),email:b()("#email").val(),password:b()("#senha").val()}};var r=b()("#Termo").is(":checked"),o=!0;(o=!(!this.ValidaCampos(t).isValid||!this.ValidaTermo(r).isValid))?j.a.post("http://localhost:8000/cadastro/locatario/",t,{"Content-Type":"application/json"}).then(function(e){O.b.success("Locatario cadastrado com sucesso!"),a.redirectToIndex()}).catch(function(e){try{var a=JSON.parse(JSON.stringify(e)),t=[];console.log(a),a.response&&500!=a.response.status?400==a.response.status&&(a.response.data.cpf&&(t.push("cpf: "+a.response.data.cpf[0]),O.b.error("cpf: "+a.response.data.cpf[0])),a.response.data.perfil&&(a.response.data.perfil.usuario.username&&t.push("Usuario: "+a.response.data.perfil.usuario.username[0]),a.response.data.perfil.usuario.email&&t.push("E-Mail: "+a.response.data.perfil.usuario.email[0]))):t.push("Erro interno no servidor..."),t.forEach(function(e){O.b.error(e)})}catch(r){t.push("Erro interno...")}}):O.b.error(o.msg)}},{key:"componentDidMount",value:function(){O.b.configure({autoClose:5e3})}}]),Object(i.a)(a,[{key:"handleChangeCep",value:function(e){this.setState({cep:e.target.value})}},{key:"handleSuccess",value:function(e){console.log(e),this.setState({logradouro:e.logradouro,estado:e.uf}).bind(this)}},{key:"render",value:function(){var e=this;return!0===this.state.toIndex?o.a.createElement(s.a,{to:"/"}):o.a.createElement("div",{className:"form"},o.a.createElement("div",{className:"conteudoForm"},o.a.createElement("form",{className:"form-group",type:"POST",id:"formLocatario"},o.a.createElement("div",{className:"userSection"},o.a.createElement("button",{className:"imagemusu"},o.a.createElement("div",null)),o.a.createElement("div",{className:"inputUserSection"},o.a.createElement("div",{className:"form-group usu"},o.a.createElement("label",{htmlFor:"usuario"},"Usu\xe1rio"),o.a.createElement(y.a,{className:"form-control",guide:!0,id:"usuario",placeholder:"Digite um nome de Usu\xe1rio...",required:!0})),o.a.createElement("div",{className:"form-group usu"},o.a.createElement("label",{htmlFor:"email"},"E-mail"),o.a.createElement(y.a,{className:"form-control",type:"email",guide:!0,id:"email",placeholder:"Digite seu E-mail...",required:!0})),o.a.createElement("div",{className:"form-group usu"},o.a.createElement("label",{htmlFor:"senha"},"Senha"),o.a.createElement("input",{type:"password",className:"form-control",id:"senha",placeholder:"Digite uma Senha...",required:!0})),o.a.createElement("div",{className:"form-group usu"},o.a.createElement("label",{htmlFor:"senha"},"Confirma Senha"),o.a.createElement("input",{type:"password",className:"form-control",id:"ConfirmaSenha",placeholder:"Digite novamente a Senha...",required:!0})))),o.a.createElement("hr",{className:"mb-3"}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-12"},o.a.createElement("label",{htmlFor:"nome"},"Nome"),o.a.createElement(y.a,{type:"text",className:"form-control",id:"nome",placeholder:"Digite o Nome...",required:!0}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-4"},o.a.createElement("label",{htmlFor:"cpf"},"CPF"),o.a.createElement(y.a,{type:"text",mask:"999.999.999-99",guide:!0,className:"form-control",id:"cpf",placeholder:"Digite o CPF...",required:!0})),o.a.createElement("div",{className:"form-group col-md-4"},o.a.createElement("label",{htmlFor:"DataNasc"},"Data de Nascimento"),o.a.createElement(y.a,{type:"date",className:"form-control",id:"data_nasc",placeholder:"Digite a data de nascimento..."})),o.a.createElement("div",{className:"form-group col-md-4"},o.a.createElement("label",{htmlFor:"telefone"},"Telefone"),o.a.createElement(y.a,{type:"text",mask:"(99)99999-9999",guide:!0,className:"form-control",id:"telefone"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-3"},o.a.createElement(x.a,{cep:this.state.cep,onSuccess:this.handleSuccess,lazy:!0},function(a){a.data;var t,r=a.loading,l=(a.error,a.fetch);return r?o.a.createElement("p",null,"Procurando..."):o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"CepLabel"},"Cep"),o.a.createElement(y.a,(t={className:"form-control",placeholder:"Digite o Cep",id:"cep",onBlur:l,onChange:e.handleChangeCep,value:e.state.cep},Object(h.a)(t,"placeholder","CEP"),Object(h.a)(t,"type","text"),t)))})),o.a.createElement("div",{className:"form-group col-md-7"},o.a.createElement("label",{htmlFor:"endereco"},"Logradouro"),o.a.createElement(y.a,{type:"text",className:"form-control",id:"logradouro",placeholder:"Digite o Logradouro..."})),o.a.createElement("div",{className:"form-group col-md-2"},o.a.createElement("label",{htmlFor:"Numero"},"N\xfamero"),o.a.createElement(y.a,{type:"text",className:"form-control",id:"numero"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-3"},o.a.createElement("label",{htmlFor:"estado"},"Estado"),o.a.createElement(y.a,{type:"text",className:"form-control",value:this.state.estado,id:"estado",placeholder:"Digite o Estado..."}))),o.a.createElement("hr",{className:"mb-4"}),o.a.createElement("div",{className:"custom-control custom-checkbox"},o.a.createElement("input",{type:"checkbox",id:"Termo",name:"Termo",className:"form-check-input"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"termos_de_uso"},"Eu li e concordo com os termos de uso")),o.a.createElement("div",{className:"buttonSection"},o.a.createElement("button",{type:"submit",className:"btn btn-cadastra",onClick:function(a){return e.PostLocatario(a)}},"Cadastrar")),o.a.createElement(O.a,null))))}}]),a}(r.Component);O.b.configure();var w=function(e){function a(){var e,t;Object(m.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(o)))).state={toIndex:!1},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"redirectToIndex",value:function(){var e=this;setTimeout(function(){e.setState(function(){return{toIndex:!0}})},5e3)}},{key:"ValidaCampos",value:function(e){return""===e.nome_fantasia||""===e.razao_social||""===e.inscricao_estadual||""===e.cnpj||""===e.endereco||""===e.telefone||""===e.usuario||""===e.email||""===e.senha||""===e.Termo?{isValid:!1,msg:"Todos os campos s\xe3o obrigat\xf3rios!"}:e.perfil.usuario.password.length<8?{isValid:!1,msg:"A senha precisa ter pelo menos 8 d\xedgitos!"}:{isValid:!0}}},{key:"ValidaTermo",value:function(e){return e?{isValid:!0}:{isValid:!1,msg:"Voc\xea precisa aceitar o termo"}}},{key:"PostLocador",value:function(e){var a=this;e.preventDefault();var t={};t.nome_fantasia=b()("#nome_fantasia").val(),t.razao_social=b()("#razao_social").val(),t.inscricao_estadual=b()("#inscricao_estadual").val(),t.cnpj=b()("#cnpj").val().replace(/[\.-\/-]/g,""),t.endereco=b()("#endereco").val(),t.telefone=b()("#telefone").val().replace(/[\(\)\.\s-]+/g,""),t.perfil={usuario:{username:b()("#usuario").val(),email:b()("#email").val(),password:b()("#senha").val()}};var r=b()("#Termo").is(":checked"),o=this.ValidaCampos(t);(o=this.ValidaTermo(r)).isValid?j.a.post("http://localhost:8000/cadastro/locador/",t,{"Content-Type":"application/json"}).then(function(e){O.b.success("Locador cadastrado com sucesso!"),a.redirectToIndex()}).catch(function(e){try{var a=JSON.parse(JSON.stringify(e)),t=[];a.response&&500!=a.response.status?400===a.response.status&&(a.response.data.cnpj&&t.push("CNPJ: "+a.response.data.cnpj[0]),a.response.data.perfil&&(a.response.data.perfil.usuario.username&&t.push("Username: "+a.response.data.perfil.usuario.username[0]),a.response.data.perfil.usuario.email&&t.push("E-Mail: "+a.response.data.perfil.usuario.email[0]))):t.push("Erro interno no servidor..."),t.forEach(function(e){O.b.error(e)})}catch(r){O.b.error("Erro interno...")}}):O.b.error(o.msg)}},{key:"componentDidMount",value:function(){O.b.configure({autoClose:5e3})}},{key:"render",value:function(){var e=this;return!0===this.state.toIndex?o.a.createElement(s.a,{to:"/"}):o.a.createElement("body",null,o.a.createElement("div",{className:"form"},o.a.createElement("div",{className:"conteudoForm"},o.a.createElement("form",{className:"form-group",type:"POST",id:"formLocador"},o.a.createElement("div",{className:"userSection"},o.a.createElement("button",{className:"imagemusu"},o.a.createElement("div",null)),o.a.createElement("div",{className:"inputUserSection"},o.a.createElement("div",{className:"form-group usu"},o.a.createElement("label",{htmlFor:"usuario"},"Usu\xe1rio"),o.a.createElement("div",{className:"userDiv"},o.a.createElement(y.a,{className:"form-control",guide:!0,id:"usuario",placeholder:"Digite o nome de usu\xe1rio...",required:!0}))),o.a.createElement("div",{className:"form-group usu"},o.a.createElement("label",{htmlFor:"email"},"E-mail"),o.a.createElement("div",{className:"userDiv"},o.a.createElement(y.a,{className:"form-control",type:"email",guide:!0,id:"email",placeholder:"Digite o Email...",required:!0}))),o.a.createElement("div",{className:"form-group usu"},o.a.createElement("label",{htmlFor:"senha"},"Senha"),o.a.createElement("div",{className:"userDiv"},o.a.createElement(y.a,{type:"password",className:"form-control",mask:"",guide:!0,id:"senha",placeholder:"Digite a Senha...",required:!0}))),o.a.createElement("div",{className:"form-group usu"},o.a.createElement("label",{htmlFor:"senha"},"Confirma Senha"),o.a.createElement("div",{className:"userDiv"},o.a.createElement(y.a,{type:"password",className:"form-control",mask:"",guide:!0,id:"senha",placeholder:"Digite novamente a Senha...",required:!0}))))),o.a.createElement("hr",{className:"mb-3"}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-12"},o.a.createElement("label",{htmlFor:"razao_social"},"Raz\xe3o Social"),o.a.createElement(y.a,{className:"form-control",guide:!0,id:"razao_social",placeholder:"Digite a raz\xe3o social...",required:!0}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-9"},o.a.createElement("label",{htmlFor:"nome_fantasia"},"Nome Fantasia"),o.a.createElement(y.a,{className:"form-control",guide:!0,id:"nome_fantasia",placeholder:"Digite o nome fantasia...",required:!0})),o.a.createElement("div",{className:"form-group col-md-3"},o.a.createElement("label",{htmlFor:"telefone"},"Telefone"),o.a.createElement(y.a,{className:"form-control",mask:"(99)99999-9999",guide:!0,id:"telefone",placeholder:"Digite o telefone...",required:!0}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"cnpj"},"CNPJ"),o.a.createElement(y.a,{className:"form-control",mask:"99.999.999/9999-99",guide:!0,id:"cnpj",placeholder:"Digite o CNPJ...",required:!0})),o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"inscricao_estadual"},"Inscri\xe7\xe3o Estadual"),o.a.createElement(y.a,{maxLength:"12",className:"form-control",guide:!0,id:"inscricao_estadual",placeholder:"Digite a inscri\xe7\xe3o estadual...",required:!0}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-12"},o.a.createElement("label",{htmlFor:"endereco"},"Endere\xe7o"),o.a.createElement(y.a,{className:"form-control",guide:!0,id:"endereco",placeholder:"Digite o endere\xe7o...",required:!0}))),o.a.createElement("hr",{className:"mb-4"}),o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{type:"checkbox",id:"Termo",name:"Termo",className:"form-check-input"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"Termo"},"Eu li e concordo com os termos de uso")),o.a.createElement("div",{className:"buttonSection"},o.a.createElement("button",{type:"submit",className:"btn btn-cadastra",onClick:function(a){return e.PostLocador(a)}},"Cadastrar")),o.a.createElement(O.a,null)))))}}]),a}(r.Component),D=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive"},o.a.createElement("span",{className:"custom-toggler-icon"},o.a.createElement("i",{className:"fas fa-bars"}))),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.b,{to:"/LocadorLocatario",className:"nav-link"},"CADASTRA")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.b,{to:"/LoginRegister",className:"nav-link"},"ENTRAR")))))),o.a.createElement("div",{className:"landing"},o.a.createElement("div",{className:"home-wrap"},o.a.createElement("div",{className:"home-inner"}))),o.a.createElement("div",{className:"caption text-center"},o.a.createElement("div",{className:"os-animation","data-animation":"bounceInUp","data-delay":".6s"},o.a.createElement("h1",null,"Loca.py")),o.a.createElement("div",{className:"os-animation","data-animation":"bounceInUp","data-delay":".8s"},o.a.createElement("h3",null,"Encontre a Sala Ideal")),o.a.createElement("div",{className:"os-animation","data-animation":"bounceInUp","data-delay":"1s"},o.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#features"},"Anunciar"))))}}]),a}(r.Component);O.b.configure();var F=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"ValidaCampos",value:function(e){if(""==e.nome||""==e.metragem||""==e.capaidacde||""==e.logradouro||""==e.numero||""==e.bairro||""==e.cidade||""==e.estado||""==e.complemento||""==e.cep||""==e.locador)return{IsValid:!1,msg:"Todos os campos s\xe3o obrigat\xf3rios"}}},{key:"render",value:function(){return o.a.createElement("form",{className:"centro",type:"POST",id:"formSalas"},o.a.createElement("div",{className:"formulario"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"nome"},"Nome:"),o.a.createElement("input",{type:"text",className:"form-control",id:"nome",placeholder:"Digite o nome...",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"Metragem"},"Metragem"),o.a.createElement("input",{type:"text",className:"form-control",id:"metragem",placeholder:"Digite a metragem...",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"cpf"},"Capacidade"),o.a.createElement("input",{type:"text",className:"form-control",id:"capacidade",placeholder:"Digite a capacidade...",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"logradouro"},"Logradouro"),o.a.createElement("input",{type:"text",className:"form-control",id:"logradouro",placeholder:"Digite o Logradouro..."})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"telefone"},"N\xfamero"),o.a.createElement("input",{type:"number",className:"form-control",id:"numero",placeholder:"Digite o n\xfamero..."})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"bairro"},"Bairro"),o.a.createElement("input",{type:"text",className:"form-control",id:"bairro",placeholder:"Digite o Bairro..."})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"Cidade"},"Cidade"),o.a.createElement("input",{type:"text",className:"form-control",id:"cidade",placeholder:"Digite a Cidade..."})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"estado"},"Estado"),o.a.createElement("input",{type:"text",className:"form-control",id:"estado",placeholder:"Digite o Estado..."})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"DataNasc"},"Complemento"),o.a.createElement("input",{type:"text",className:"form-control",id:"complemento",placeholder:"Digite o complemento..."})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"CEP"},"CEP"),o.a.createElement("input",{type:"text",className:"form-control",id:"cep",placeholder:"Digite o CEP..."}))),o.a.createElement(O.a,null))}}]),a}(r.Component);n.a.render(o.a.createElement(c.a,null,o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/",exact:!0,component:D}),o.a.createElement(s.b,{path:"/CadastroLocatario",exact:!0,component:S}),o.a.createElement(s.b,{path:"/CadastroLocador",exact:!0,component:w}),o.a.createElement(s.b,{path:"/LoginRegister",exact:!0,component:E}),o.a.createElement(s.b,{path:"/LocadorLocatario",exact:!0,component:f}),o.a.createElement(s.b,{path:"/CadastroSalas",exact:!0,component:F}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.28a67f40.chunk.js.map