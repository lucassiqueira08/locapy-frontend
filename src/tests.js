import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:3000/`;
test('Preenchimento do formulario', async t => {
    await t
        .maximizeWindow()
        .wait(500)
        .typeText('#nome', 'Joaquim Ronildes')
        .typeText('#rg', '470172502')
        .typeText('#cpf', '51097301052')
        .typeText('#telefone', '11978564855')
        .typeText('#cep', '01133000')
        .typeText('#numero', '315')
        .typeText('#data_nasc', '1998-05-05')
		.pressKey('tab')
        .typeText('#usuario', 'user_teste')
        .typeText('#email', 'Email-teste@hotmail.com')
        .typeText('#senha', 'senhaTeste')
        .typeText('#ConfirmaSenha', 'senhaTeste')
        .click('#Termo')
        .click('#enviar');                                                  
});