import createNewBarber from '../support/utils/createNewBarber';
import ForgotPasswordPage from '../support/pages/forgot-password/index';
import factory from '../factories/signupFactory';

describe('Validar recuperação de senha', () => {

    it('Recuperando senha de usuário pre-existente', () => {
        let barber = createNewBarber();
        let page = new ForgotPasswordPage();
        page.go();
        page.fillForm(barber);
        page.submit();

        page.checkToastMessage("Enviamos um e-mail para confirmar a recuperação de senha, cheque sua caixa de entrada.");
    });
    
    it('Recuperando senha de usuário inexistente', () => {
        let barber = factory.barber();
        let page = new ForgotPasswordPage();
        page.go();
        page.fillForm(barber);
        page.submit();
        page.checkToastMessage("Ocorreu um erro ao tentar realizar a recuperação de senha");
    });

    it('Recuperando senha com email inválido (top-level domain must have two to six letters)', () => {
        let barber = factory.barber();
        barber.email = 'teste@teste.c';
        let page = new ForgotPasswordPage();
        page.go();
        page.fillForm(barber);
        page.submit();
        page.checkErrorAtEmailField(); 
    });

});