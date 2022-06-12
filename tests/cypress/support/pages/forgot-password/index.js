import { elForgotPasswd } from './elements';


export default class ForgotPasswordPage {

    go(){
        cy.visit('/forgot-password');
        cy.get(elForgotPasswd.assertTitle).should('have.text','Recuperar senha');
    }

    fillForm(barber){
        cy.get(elForgotPasswd.email).type(barber.email);
    }

    submit(){
        cy.contains(elForgotPasswd.submitButton, 'Recuperar').should('be.visible').click();
    }

    checkToastMessage(messageExpect){
        cy.get('.toast', {timeout: 30000})
        .should('be.visible')
        .find('p')
        .should('have.text', messageExpect);
    }

    checkErrorAtEmailField(){
        cy.get(elForgotPasswd.email)
        .parent()
        .find('.required-error');
    }

    backToLogin(){
        cy.contains(elForgotPasswd.backToLogin).should('be.visible'.click)
    }

}
