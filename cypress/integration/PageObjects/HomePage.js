class HomePage{

    gotToUrl(){
        cy.visit('https://www.google.com/')
    }

    getSearchTextbox(){
        return cy.get('[title=Search]')
    }

    enterSearchKey(searchKey){
       this.getSearchTextbox().clear()
       this.getSearchTextbox().type(searchKey)
       this.getSearchTextbox().type('{enter}')
        return this
    }
}
export default HomePage