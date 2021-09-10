
import { expect, assert, should } from 'chai';
import LoginPage from '../page-objects/LoginPage'
import BeHomePage from '../page-objects/BeHomePage'
import BookPage from '../page-objects/BookPage'
import EventsPage from '../page-objects/EventsPage'
import {Constants} from '../page-objects/Constants'

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

        it('user can navigate to library', () => {
            BeHomePage.navigateToLibrary()
        })

        it('user create book 1', () => {
            BookPage.createNewBook(Constants.BOOK_1)
        })

        it('user can add first category', () => {
            BookPage.addFirstCategory()
         })
         
         it('user can add file to first category', () => {
            BookPage.addFileToFirstCategory()
         })

         it('user can build book 1', () => {
            BookPage.buildMeetingBook()
         })

         it('user can make book 1 visible', () => {
            BookPage.makeBookVisible()
         })

         it('user can delete book 1 ', () => {
            BookPage.deleteBook1()
         })

         it('user verify book 1 deleted', () => {
            BookPage.veirfyBook1Deleted()
         })
         
          
        after(() => {
            cy.clearCookies()
        })

    })





