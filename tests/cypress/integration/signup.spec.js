import SingnupPage from '../support/pages/signup/index';
import signupFactory  from '../factories/signupFactory';
import createNewBarber from '../support/utils/createNewBarber';

describe('Validar cadastro de novo usuário', () => {
    it('Cadastro de novo usuário com sucesso', () => {
        createNewBarber();
    });

    it('Cadastro com e-mail invalido (missing domain)', function() {

        let signupPage = new SingnupPage();

        let barber = signupFactory.barber();
        barber.email = 'zemane.test.com';

        signupPage.go();
        signupPage.fillForm(barber);
        signupPage.submit();
        
        signupPage.checkErrorAtEmailField();
    });

    it('Cadastro com e-mail invalido (leading dot on local part)', function() {

        let signupPage = new SingnupPage();

        let barber = signupFactory.barber();
        barber.email = '.zemane@test.com';

        signupPage.go();
        signupPage.fillForm(barber);
        signupPage.submit();
        
        signupPage.checkErrorAtEmailField();
    });

    it('Cadastro com e-mail invalido (trailing dot on local part)', function() {

        let signupPage = new SingnupPage();

        let barber = signupFactory.barber();
        barber.email = 'zemane.@test.com';

        signupPage.go();
        signupPage.fillForm(barber);
        signupPage.submit();
        
        signupPage.checkErrorAtEmailField();
    });

    it('Cadastro com e-mail invalido (consecutive dots on local part)', function() {

        let signupPage = new SingnupPage();

        let barber = signupFactory.barber();
        barber.email = 'zem..ane@test.com';

        signupPage.go();
        signupPage.fillForm(barber);
        signupPage.submit();
        
        signupPage.checkErrorAtEmailField();
    });

    it('Cadastro com e-mail invalido (top-level domain must have two to six letters  - P1)', function() {

        let signupPage = new SingnupPage();

        let barber = signupFactory.barber();
        barber.email = 'zemane@test.com.u';

        signupPage.go();
        signupPage.fillForm(barber);
        signupPage.submit();
        
        signupPage.checkErrorAtEmailField();
    });

    it('Cadastro com e-mail invalido (top-level domain must have two to six letters - P2)', function() {

        let signupPage = new SingnupPage();

        let barber = signupFactory.barber();
        barber.email = 'zemane@test.c';

        signupPage.go();
        signupPage.fillForm(barber);
        signupPage.submit();
        
        signupPage.checkErrorAtEmailField();
    });
});
