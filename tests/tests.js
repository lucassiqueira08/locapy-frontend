import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:3000/CadastroLocatario`;
test('Enviando formulario - Certo', async t => {
    await t
        .maximizeWindow()
        .typeText('#usuario', 'UserTeste')
        .typeText('#email', 'oseasSafadinho@hotmail.com')
        .typeText('#senha', 'teste321123')
        .typeText('#ConfirmaSenha','teste321123')
        .typeText('#nome', 'Joaquim Ronildes')
        .typeText('#cpf', '51097301052')
        .typeText('#data_nasc', '1998-05-05')
		.pressKey('tab')
        .typeText('#telefone', '11978564855')
        .typeText('#cep', '01133000')
        .typeText('#logradouro', 'av rudge')
        .typeText('#numero', '152')
        .typeText('#estado','sp')
        .typeText('#cidade','osasco')
        .typeText('#bairro','barra funda')
        .click('#termo')
        .click('#enviar');
});
