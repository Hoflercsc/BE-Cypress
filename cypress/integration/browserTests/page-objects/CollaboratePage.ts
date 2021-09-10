class Collaborate {
  
    private collaborateMenu = '.workroom-buttons > :nth-child(4) > a'
    private newSurveyButton = "//a[@class='btn btn-success']"

    getCollaborate(){
        // collborate menu class path
        cy.get(this.collaborateMenu)
    }

    getNewSurvey(){
        // collboarate -> New Survey Button 
        cy.xpath(this.newSurveyButton)
    }

}
export default new Collaborate();

