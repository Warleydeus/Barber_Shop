import { elSignup } from './elements';

export default class SignupPage {

    go(){
        cy.visit('/signup');
        cy.get(elSignup.assertTitle).should('have.text','Faça seu cadastro');
    }

    fillForm(barber){
        cy.get(elSignup.name).type(barber.nome);
        cy.get(elSignup.email).type(barber.email);
        cy.get(elSignup.password).type(barber.senha);
    }

    submit(){
        cy.contains(elSignup.submit, 'Cadastrar').should('be.visible').click();
    }

    checkToastMessage(messageExpect){
        cy.get('.toast')
        .should('be.visible')
        .find('p')
        .should('have.text', messageExpect);
    }

    checkErrorAtEmailField(){
        cy.get(elSignup.email)
        .parent()
        .find('.required-error');
    }

    backToLogin(){
        cy.contains(elSignup.backToLogin).should('be.visible'.click)
    }

}
