class ResultPage{

    getResult(){
        return cy.contains('Bakkappa N')
    }

    clickLink(){
        this.getResult().click()
        return this
    }
}
export default ResultPage