import HomePage from '../PageObjects/HomePage'
import ResultPage from '../PageObjects/ResultPage'

describe('Module1 suite',()=>{

    before('before test',()=>{
        cy.log('running before test')
    })

    after('after test',()=>{
        cy.log('running after test')
    })

    beforeEach('before each test',()=>{
        cy.log('running before each test')
        cy.visit('https://www.google.com/')
    })

    afterEach('after each test',()=>{
        cy.log('running after each test')
    })

    it ('TestCase1 verify abc flow',()=>{
       const homePage= new HomePage()
     //  homePage.gotToUrl()
       homePage.enterSearchKey('bakkappa n github')
       
       const resultPage=new ResultPage()
       resultPage.clickLink()

    })

    it ('TestCase2 verify abc flow',()=>{
        const homePage= new HomePage()
       // homePage.gotToUrl()
        homePage.enterSearchKey('bakkappa n github')
        
        const resultPage=new ResultPage()
        resultPage.clickLink()
 
     })

})