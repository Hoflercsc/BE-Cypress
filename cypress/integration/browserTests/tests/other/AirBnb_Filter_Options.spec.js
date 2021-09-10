
import { expect, assert, should } from 'chai';
import "/CypressProject/cypress/plugins"

    describe('AirBnb Test', () => {

        before(function() {
            cy.visit('https://www.airbnb.com');           
        })

        afterEach(() => {
            Cypress.Cookies.preserveOnce('jitney_client_session_updated_at'); 
            Cypress.Cookies.preserveOnce('jitney_client_session_id'); 
        })

        it('verify airbnb home page visible', () => {          
            cy.url().should('include', 'www.airbnb.com')
            cy.xpath("//div[@class='_1grlqto']//*[local-name()='svg']").should('be.visible') 
        })

        it('open Online Experiances', () => {         
            //open online experiances 
            cy.get('._1gwzhbum').should('be.visible').click({ force: true })
            //verify jumbo tron 
            cy.xpath("//div[@class='_y4p3cb']//div[@class='_19qnt1y']").should('be.visible')
        })

        it('xhr api call tests', () => {         
            //--------- route testing -------
            cy.server()
            //cy.route('/api/v2/host_referral_eligibilities').as('sort')
            cy.route({method:'POST', url: '/tracking/events'}).as('sort');
            //cy.wait('@sort')
            cy.wait('@sort').its('status').should('eq', 204)
            cy.get('@sort').its('responseHeaders').should('have.property', 'connection', 'keep-alive') // true
            cy.get('@sort').its('responseHeaders').should('have.property', 'server', 'nginx') // true

            // get the route
            cy.get('@postComment').should((xhr) => {
                expect(xhr.requestBody).to.include('email')
                expect(xhr.requestHeaders).to.have.property('Content-Type')
                expect(xhr.responseBody).to.have.property('name', 'Using POST in cy.route()')
            })
        })

        it('verify Filter Page Options', () => {         
            cy.get('._e296pg > ._a7a5sx > svg').should('be.visible').click()
            // verify filter group is visible
            cy.get('#filter-panel-multi-select-chip-group').should('be.visible')
            //make sure there are 17 filter buttons/options
            cy.get('#filter-panel-multi-select-chip-group').find('._t6p96s').should('have.length', 17)
             //make sure save button visible and length one
            cy.get('#filter-panel-save-button:visible').should('have.length', 1)
                
                // Extracting text from all elements printing all of them out 
                cy.get('#filter-panel-multi-select-chip-group').find('._t6p96s').each(($el, index, $list) => {
                    const textOptions = $el.find('._36rlri').text()
                    if((textOptions.startsWith('F') || textOptions.startsWith('D') )){
                    cy.log($el.text())
                    }
                })
                cy.task('log', '---------------------------')

                // Extracting text from all elements printing all of them out 
                cy.get('#filter-panel-multi-select-chip-group').find('._t6p96s').each(($el, index, $list) => {
                    const textOptions = $el.find('._36rlri').text().toString()
                    cy.log($el.text())
                    //console.log(cy.log($el.text()))
                })
                cy.task('log', '---------------------------')

                // Extracting text from all elements printing all of them out 
                // another way
                cy.get('#filter-panel-multi-select-chip-group').find('._t6p96s').each(($el) => {
                    cy.log($el.text().toString())
                })
                cy.task('log', '---------------------------')
           
            //click save button
            cy.get('#filter-panel-save-button').click()
        })
          
        
        it('verify Filter Page Options', () => {         
            cy.get('._e296pg > ._a7a5sx > svg').should('be.visible').click()
            // verify filter group is visible
            cy.get('#filter-panel-multi-select-chip-group').should('be.visible')
            //make sure there are 17 filter buttons/options
            cy.get('#filter-panel-multi-select-chip-group').find('._t6p96s').should('have.length', 17)
             //make sure save button visible and length one
            cy.get('#filter-panel-save-button:visible').should('have.length', 1)
                
                // Extracting text from all elements printing all of them out 
                cy.get('#filter-panel-multi-select-chip-group').find('._t6p96s').each(($el, index, $list) => {
                    const textOptions = $el.find('._36rlri').text()
                    if((textOptions.startsWith('F') || textOptions.startsWith('D') )){
                    cy.log($el.text())
                    }
                })
                cy.task('log', '---------------------------')

                // Extracting text from all elements printing all of them out 
                cy.get('#filter-panel-multi-select-chip-group').find('._t6p96s').each(($el, index, $list) => {
                    const textOptions = $el.find('._36rlri').text().toString()
                    cy.log($el.text())
                    //console.log(cy.log($el.text()))
                })
        
        })

        after(() => {
            cy.clearCookies()
            cy.clearCookies()

        })

    })



