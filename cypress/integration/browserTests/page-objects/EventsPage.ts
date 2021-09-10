import { times } from "cypress/types/lodash"

class EventsPage {

    private eventMenu = "//span[contains(text(),'Events')]"
    private newEventsButton = "//a[@class='btn btn-success pull-right no-mobile']"
    //---Event Form---
    private titleInputField = "//input[@id='event_title']"
    private calendarStartDate = "//input[@id='event_datetime_start']"
    private calendarEndDate = "//input[@id='event_datetime_end']"
    private location = "//input[@id='event_location']"
    private strlocation = "east cost"
    private address = "//input[@id='event_address1']"
    private strAddress = "11116 Willow Meadow Lane Apt 202"
    private city = "//input[@id='event_city']"
    private strCity = "Charlotte"
    private countryDropDown = "//div[@class='btn-group bootstrap-select chosen country']"
    private countryStateOption = '.text'
    private stateDropDown = "//div[@class='btn-group bootstrap-select chosen state']"
    private textBoxIframe = '.cke_wysiwyg_frame.cke_reset'
    private videoConferenceUrl = "//input[@id='event_custom_video_conference_url']"
    private strvideoConferenceUrl = "https://hoflercsc.my.webex.com"
    private eventDropDown = "//div[@class='btn-group bootstrap-select']//button[@class='btn dropdown-toggle btn-default']"
    private meetings = "//div[@class='btn-group bootstrap-select open']//a"
    private trackRSVPs = "//input[@id='track_rsvp']"
    private saveBtn = "//aside//button[@name='button'][contains(text(),'Save')]"
    //------------
    private eventBtnActive = "//*[@id='wrap']//main//li//span[@class='icon icon_wr-events-on active-on']"

    getEventsMenu(){
        // AutoBE -> New Event Menu
        return cy.xpath(this.eventMenu)
    }

    getNewEventsButton(){
        // Events -> New Event Button 
        return cy.xpath(this.newEventsButton)
    }
        //-----Event Form -------
    
    getEventTitle(EVENT: string){
        // Events -> New Event Button 
        return cy.xpath(this.titleInputField).type(EVENT)
    }

    getCalendarStartDate(){
        cy.xpath(this.calendarStartDate).clear()
        const todaysDate = Cypress.moment().format('YYYY-MM-DD')
        return cy.xpath(this.calendarStartDate).type(todaysDate)
    }

    getCalendarEndtDate(){
        cy.xpath(this.calendarEndDate).click().clear()
        const todaysDate = Cypress.moment().add(2,'days').format('YYYY-MM-DD')
        return cy.xpath(this.calendarEndDate).type(todaysDate)
    }

    getLocation(){
        cy.xpath(this.location).click({ force: true })
        return cy.xpath(this.location).type(this.strlocation)
    }

    getAddress(){
        return cy.xpath(this.address).type(this.strAddress)
    }

    getCity(){
        return cy.xpath(this.city).type(this.strCity)
    }

    getSelectCountry(){
        cy.xpath(this.countryDropDown).click()
        cy.wait(200)
        cy.get(this.countryStateOption).contains('United States').click()
    }

    getSelectState(){
        cy.xpath(this.stateDropDown).click()
        cy.wait(200)
        cy.get(this.countryStateOption).contains('North Carolina').click()
    }

    getDescriptionTextBox(){
        let  text = ' Iframes through Cypress Are Working!'
        cy.get(this.textBoxIframe)
        .its("0.contentDocument.body")
        .should("not.be.empty")
        .then((body) => {
          cy.wrap(body).type(text, { force: true });
            });
    }

   getVideoConferenceURL(){
        return cy.xpath(this.videoConferenceUrl).type(this.strvideoConferenceUrl)
    }

   getEventCategoryDropDown(){
        return cy.xpath(this.eventDropDown).click()
    }
   
   getMeetings(){
        return cy.xpath(this.meetings).click()
    }

   getTrackRSVPs(){
        return cy.xpath(this.trackRSVPs).click()
    }

   getSaveBtn(){
        return cy.xpath(this.saveBtn).click()
    }

     fillEventsForm(EVENT: string){
        this.getEventTitle(EVENT)
        this.getCalendarStartDate()
        this.getCalendarEndtDate()
        this.getLocation()
        this.getAddress()
        this.getCity()
        this.getSelectCountry()
        this.getSelectState()
        this.getDescriptionTextBox()
        this.getVideoConferenceURL()
        this.getEventCategoryDropDown()
        this.getMeetings()
        this.getTrackRSVPs()
        this.getSaveBtn()
     }

    //-----Manage Users -----
    private userSteveSystem = "(//div[ starts-with(@id,'user-')]//div[@class='person-name'][contains(text(),'steve System')])[2]"
    private saveBtn2 = "(//*[contains(text(),'Save')])[2]"

    getUserSteveSystem(){
        return cy.xpath(this.userSteveSystem).should('be.visible')
    }

    getSaveBtn2(){
            return cy.xpath(this.saveBtn2).should('be.visible').click()
    }

     manageUsers(){
        this.getUserSteveSystem()
        this.getSaveBtn2()
    }
    
  //-----Test Tab Link -----
   // private joinMeetingBtn = "//a[@class='btn btn-default'][contains(text(),'Join Meeting')]"
    private joinMeetingBtn = "//a[@class='btn btn-default']"
    private customTabLink = 'https://hoflercsc.my.webex.com'

    getVerifyJoinMeetingBtn(){
        cy.xpath(this.joinMeetingBtn).should('be.visible')
        cy.xpath(this.joinMeetingBtn).scrollIntoView()
    }
    getVerifyTabLink(){
        cy.xpath(this.joinMeetingBtn).should('have.attr', 'target', '_blank')
        cy.xpath(this.joinMeetingBtn).should('have.attr', 'href', this.customTabLink)
    }

    tabLinkVerification(){
        this.getVerifyJoinMeetingBtn()
        this.getVerifyTabLink()
    }

    getVerifyWebexHomePage(){
        /*
        cy.xpath(this.joinMeetingBtn).invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://hoflercsc.my.webex.com')

         
        cy.xpath(this.joinMeetingBtn).then(function ($a) {
            // extract the fully qualified href property
            const href = $a.prop('href')
            // and now visit the href directly
            cy.visit(href)
            cy.url().should('include', 'https://hoflercsc.my.webex.com')
          })

        cy.xpath(this.joinMeetingBtn).invoke('removeAttr', 'target').click()
        cy.url().should('include', 'hoflercsc.my.webex.com')
        */
    }

    veirfyCustomTabUrlAccess(){
        this.getVerifyWebexHomePage()
    }

    //-------navigate back to Events
    navigateBackToEvents(){
        cy.xpath(this.eventBtnActive).should('be.visible').click()
    }
    

    //------------Delete Events ---------------
    private event1DropdownArrow = "//*[normalize-space(text())='Event 1']/following::div[@class='dropdown header-actions no-mobile']"
    private event1DeleteOption =  "//*[normalize-space(text())='Event 1']/following::div[@class='dropdown header-actions no-mobile open']//child::a[contains(text(),'Delete')]"
    private continueBtn = "//button[@class='btn commit btn-danger'][contains(text(),'Continue')]"

    clickEvent1DropdownArrow(){
        cy.xpath(this.event1DropdownArrow).should('be.visible').click()
    }

    clickEvent1DeleteOption(){
        cy.xpath(this.event1DeleteOption).should('be.visible').click()
    }

    clickContinueBtn(){
        cy.xpath(this.continueBtn).should('be.visible').click()
    }

    verifyEvent1Deleted(){
        cy.xpath(this.event1DropdownArrow).should('not.exist')
    }

    deleteEvent1(){
        this.clickEvent1DropdownArrow()
        this.clickEvent1DeleteOption()
        this.clickContinueBtn()
        cy.reload()
    }
}
export default new EventsPage();

