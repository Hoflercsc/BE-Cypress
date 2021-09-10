
import { expect, assert, should } from 'chai';
import LoginPage from '../page-objects/LoginPage'
import BeHomePage from '../page-objects/BeHomePage'
import EventsPage from '../page-objects/EventsPage'
import {Constants} from '../page-objects/Constants'
//import * as constants from '../page-objects/Constants'

    describe('Create Event With Custom Url', () => {
        
        before(()=> {
            cy.visit('/');
        })
       
        afterEach(() => {
            Cypress.Cookies.preserveOnce('_boardeffect_session'); 
        })
        
        it('user can login to boardeffect', () => {
            LoginPage.userLoginOption(Constants.USER_STEVE, Constants.PASSWORD);
        })

        it('user can navigate to events', () => {
            BeHomePage.navigateToEvents()
        })

        it('user create new event with custom video conferencing url', () => {
           EventsPage.getNewEventsButton().should('be.visible').click()
           EventsPage.fillEventsForm(Constants.EVENT_1)
        })

        it('user can manage users', () => {
           EventsPage.manageUsers()
         })

        it('custom url tab verification', () => {
           EventsPage.tabLinkVerification()
        })
        
        it(' user can delete event 1', () => {
            EventsPage.navigateBackToEvents()
            EventsPage.deleteEvent1() 
        })

        it(' verify Event 1 Deleted', () => {
            EventsPage.verifyEvent1Deleted()
        })
          
        after(() => {
            cy.clearCookies()
        })

    })





