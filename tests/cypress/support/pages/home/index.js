import { elHome } from './elements'

class HomePage{

    go(){

        cy.visit('/');
        cy.get(elHome.assertTitle).should('have.text','Faça seu login');

    }

    fillLogin(barber){
        cy.get(elHome.email).type(barber.email);
        cy.get(elHome.password).type(barber.senha);
    }

    submit(){
        cy.contains(elHome.submitButton, 'Entrar').should('be.visible').click();
    }

    checkToastMessage(messageExpect){
        cy.get('.toast', {timeout: 10000})
        .should('be.visible')
        .find('p')
        .should('have.text', messageExpect);
    }

}

export default HomePage;