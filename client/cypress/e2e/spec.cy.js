///<referance type="cypress"/>

import Chance from 'chance';
const chance = new Chance();



describe('Easypark', () => {

    const email = chance.email();
    const pass = 'Password';
    const adminemail = 'Admin@test.com';
    const adminpass = 'Admin1'


    
    //check if at main menu and logs out if logged in
    it('has a title',() => {

      cy.visit('http://localhost:3000');

      if (cy.contains('log out')){
        (cy.contains('log out').click());
      }
        
        cy.contains('New Option of Parking- EasyPark');
    });


    it('can signup, logout, and login',() => {

        

      //goes to login page and clicks sign up
        cy.contains('Become a member/LogIn').click();
        cy.url().should('include','login');
        cy.contains('Sign up').click();

      //fills out form & submits
        cy.get('input[name=email').type(email);
        cy.get('input[name=password').type(pass);
        cy.get('input[name=repeat-password').type(pass);
        cy.get('button[type=submit').click();

      //logs out
        cy.contains('log out').click();

      //signs in
        cy.contains('Become a member/LogIn').click();
        cy.url().should('include','login');
        cy.get('input[name=email').type(email);
        cy.get('input[name=password').type(pass);
        cy.get('button[type=submit').click();
    });

    it('can book multiple, view booking, and delete booking',() => {

      //goes to booking page
      cy.contains('Home').click();
      cy.scrollTo('top');
      cy.contains('Search').click({ scrollBehavior: false });

      //books
      cy.contains('Book').click();

      //confirms booking
      cy.contains('Book Now').click()

      //returns to carpark page
      cy.contains('Back to Home').click();
      cy.scrollTo('top');
      cy.contains('Search').click({ scrollBehavior: false });


      //Books a different carpark spot
      cy.contains('Book').last().click();
       //confirms booking
      cy.contains('Book Now').click();

      //views booking
      cy.contains('View my booking').click();

      //deletes booking
      cy.contains('Delete').click();
      cy.reload();//currently refetch doesnt remove the last booking
      cy.contains('log out').click();

    })

    it('can login as admin, access admin page, view both users and bookings with users, and delete from both',() => {

      //Logs in as Admin
      cy.contains('Become a member/LogIn').click();
      cy.url().should('include','login');
      cy.get('input[name=email').type(adminemail);
      cy.get('input[name=password').type(adminpass);
      cy.get('button[type=submit').click();

      //goes to admin page
      cy.contains('Admin:').click();


        //goes to 'Bookings'
      cy.contains('Bookings').click();

      //finds the email created at start
      cy.contains(email);

      //finds the delete button
      cy.get('Button').last().click();

   
      //goes to 'Users'
      cy.contains('Users').click();

      //finds the emailcreated at start
      cy.contains(email);

      //finds the delete button
      cy.get('Button').last().click();

      //logs out
      cy.contains('log out').click();
    })
      



})