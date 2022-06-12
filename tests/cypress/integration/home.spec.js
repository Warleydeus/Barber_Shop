import HomePage from "../support/pages/home/index";
import createNewBarber from '../support/utils/createNewBarber';
import factory from '../factories/signupFactory';

describe.only('Validar página Home', () => {
    it('Acessar a home', () => {
        let homePage = new HomePage();
        homePage.go();
    });
    
    it('Realizar login com usuário pre-existente', () => {
        
        let barber = createNewBarber();
        let homePage = new HomePage();
        homePage.go();
        homePage.fillLogin(barber);
        homePage.submit();
        cy.url()
            .should('be.equal', `${Cypress.config("baseUrl")}/dashboard`);
    });

    it('Realizar login com usuário inexistente', () => {
        
        let barber = factory.barber();
        let homePage = new HomePage();
        homePage.go();
        homePage.fillLogin(barber);
        homePage.submit();
        homePage.checkToastMessage("Ocorreu um erro ao fazer login, verifique suas credenciais.");
    });

});