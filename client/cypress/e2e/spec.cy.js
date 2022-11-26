///<referance type="cypress"/>

import Chance from 'chance';
const chance = new Chance();



describe('Easypark',() => {

    const email = chance.email();
    const pass = 'Password';

    beforeEach(()=>{
      cy.visit('http://localhost:3000');
    })

    //check if at main menu
    it('has a title',() => {
        cy.contains('New Option of Parking- EasyPark');
    });


    it('can signup, logout, and login',() => {
      //goes to login page and clicks sign up
        cy.contains('Become a member/LogIn').click();
        cy.url().should('include','login');
        cy.contains('Sign up').click();

      //fills out form & submits
        cy.get('input[name=email').type(email)
        cy.get('input[name=password').type(pass)
        cy.get('input[name=repeat-password').type(pass)
        cy.get('button[type=submit').click();

      //logs out
        cy.contains('log out').click();

      //signs in
        cy.contains('Become a member/LogIn').click();
        cy.url().should('include','login');
        cy.get('input[name=email').type(email)
        cy.get('input[name=password').type(pass)
        cy.get('button[type=submit').click();
    });
})