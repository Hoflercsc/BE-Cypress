
import { expect, assert, should } from 'chai';

    describe('AirBnb Test', () => {

        before(function() {
            cy.visit('https://www.airbnb.com');           
        })

        // afterEach(() => {
        //     Cypress.Cookies.preserveOnce('_airbed_session_id'); 
        // })

        it('verify airbnb home page visible', () => {          
            cy.url().should('include', 'www.airbnb.com')
            cy.xpath("//div[@class='_1grlqto']//*[local-name()='svg']").should('be.visible') 
            //finding parent then child element of specific class
            cy.get('._17fy1ix').find('._3hmsj').should('have.length', 2)

        })

        it('log into account', () => {         
            //click profile button
            cy.xpath("//nav[@class='_vuzcgs']//div[@class='_3hmsj']").should('be.visible').click()
            
            // click login button
            cy.xpath("//*[@id='simple-header-profile-menu']/div/a[2]/div[contains(text(),'Log in')]").should('be.visible').click()
            // sign up 
            cy.xpath("//button[contains(text(),'Sign up')]").should('be.visible').click()
            // click sign up with email
            cy.xpath("//div[contains(text(),'Sign up with email')]").should('be.visible').click()
            // fill out form
            cy.xpath("//input[@id='email-signup-email']").should('be.visible').type('hoflercsc@gmail.com') 
            
            // let  text = ' Jonathan'
            // cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/iframe[1]")
            //     .its("0.contentDocument.body")
            //     .should("not.be.empty")
            //     .then((body) => {
            //     cy.wrap(body).find("//input[@id='email-signup-user[last_name]").type(text, { force: true });
            //         });
            
            //cy.get('#email-signup-user[first_name]').type('Jonathan')
            cy.get('#email-signup-user[last_name]').type('Hofler')
            //----------------- original log in below which chnaged after several failed attempts ------------------------ 
            // cy.xpath("//div[contains(text(),'Continue with email')]").should('be.visible').click()
            // // wait for usernasme and password input field
            // cy.get('#email').should('be.visible').should('be.visible').type('hoflercsc@gmail.com')    
            // cy.xpath("//div[@class='_js9i23']").should('be.visible').type('!Venus2010')
            // //checks that element is visible and quantity is 1
            // cy.get('._m9v25n:visible').should('have.length', 1)
            // // click submit after searching for login test
            // //cy.get('._m9v25n').click()
            // //cy.get('._67e5n4c').find('._tcp689').contains('Log in').click()    
            // //cy.get('._67e5n4c').click()    

        })
                   

        after(() => {
            cy.clearCookies()
            cy.clearCookies()

        })

    })



