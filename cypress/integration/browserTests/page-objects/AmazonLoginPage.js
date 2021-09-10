class AmazonLoginPage {

    getAccountList(){
       // return cy.xpath("//span[@class='nav-line-2 nav-long-width']");
        return cy.get('.nav-line-2.nav-long-width');
    }

    getSignInButton(){
        return cy.get('.nav-action-inner');
    }

    getUserName() {
        return cy.get('#ap_email');
    }

    getContinue() {
        return cy.get('.a-button-input');
    }

    getUserPassword() {
        return cy.get('#ap_password');
    }

    getAccountSignInButton(){
        return cy.get('.a-button-input');
    }

    getUserSignOut() {
        return cy.xpath("//span[contains(text(),'Sign Out')]");
    }


}
export default new AmazonLoginPage();
