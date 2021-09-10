class BeHomePage {

    private autoBE = "//a[contains(.,'AutoBE')]"    
    private eventMenu = "//span[contains(text(),'Events')]"
    private libraryMenu = "//*[@id='wrap']/main//ul/li/a//span[@class='icon icon_wr-files active-off']"

    private collaborate = '.workroom-buttons > :nth-child(4) > a'
    private workrooms = "//*[@id='workroom-leftnav-toggle']"

    clickWorkrooms() {
        // Home -> AutoBE Workroom
        cy.xpath(this.workrooms).should('be.visible').click()
    }

    clickAutoBeWorkroom() {
        // Home -> AutoBE Workroom
        cy.xpath(this.autoBE).should('be.visible').click()
    }
  
    goToCollaborate(){
        // AutoBE -> collaborate Menu
        cy.get(this.collaborate).should('be.visible').click()
    }

    goToEventsMenu(){
        // AutoBE -> New Event Menu
        cy.xpath(this.eventMenu).should('be.visible').click()
    }

    goToLibraryMenu(){
        // AutoBE -> New Event Menu
        cy.xpath(this.libraryMenu).should('be.visible').click()
    }

     navigateToEvents(){
        this.clickWorkrooms()
        this.clickAutoBeWorkroom()
        this.goToEventsMenu()
    }

     navigateToCollaborate(){
        this.clickAutoBeWorkroom()
        this.goToCollaborate()
    }

    navigateToLibrary(){
        this.clickWorkrooms()
        this.clickAutoBeWorkroom()
        this.goToLibraryMenu()
    }

}
export default new BeHomePage();

