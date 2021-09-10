
class LoginPage {

    private loginField = "//input[@id='login_login']"
    private passwordField = "//input[@id='login_password']"
    private signIn = "//button[contains(.,'SIGN IN')]"

    userLoginOption(USERNAME: string, PASSWORD: string){
       
            cy.xpath(this.loginField).should('be.visible').type(USERNAME)
            cy.xpath(this.passwordField).should('be.visible').type(PASSWORD)
            cy.xpath(this.signIn).should('be.visible').click()
    }

    
}
export default new LoginPage();
