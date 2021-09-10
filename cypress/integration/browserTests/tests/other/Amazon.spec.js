
import { expect, assert, should } from 'chai';
import AmazonLoginPage from '../../page-objects/AmazonLoginPage'
    describe('Login Log Out Amazon Account', () => {

        before(function() {
            cy.visit('/');           
        })
          
        it('user can navgate to login screen', () => {       
            AmazonLoginPage.getAccountList().should('be.visible')             
            AmazonLoginPage.getAccountList().trigger('mouseover')
            AmazonLoginPage.getSignInButton().should('be.visible')
            AmazonLoginPage.getAccountList().click();
        })

        it('user can sign in to account', () => {   
            AmazonLoginPage.getUserName().type('hoflercsc@gmail.com')
            AmazonLoginPage.getContinue().click();
            
            //cy.xpath("//span[contains(text(),'Go back to previous page')]").click()
            cy.get("body").then($body => {
                if ($body.find("span").length > 0) {   //evaluates as true
                    cy.get("span")
                    .click();
                }
            });

            AmazonLoginPage.getContinue().click()
            AmazonLoginPage.getUserPassword().should('be.visible')
            AmazonLoginPage.getUserPassword().type('!Venus2010')
            AmazonLoginPage.getAccountSignInButton().click()
        })

        it('user can sign out of account', () => {  
            cy.wait(1000)    
            AmazonLoginPage.getAccountList().should('be.visible')
            AmazonLoginPage.getAccountList().trigger('mouseover')
            cy.scrollTo('top')
            AmazonLoginPage.getUserSignOut().should('be.visible').click();
            cy.visit('/');           

        })

    })



