import HomePage from '../PageObjects/HomePage'
import ResultPage from '../PageObjects/ResultPage'

describe('Module1 suite',()=>{

    let data;

    before(function(){
        cy.fixture('example').then(function(jsonData){
            data=jsonData
        })
    })

    beforeEach('before each test',()=>{
        cy.log('running before each test')
        cy.visit('https://www.google.com/')
    })

    it ('TestCase1 verify abc flow',()=>{
       const homePage= new HomePage()
     //  homePage.gotToUrl()
       homePage.enterSearchKey(data.name)
       
       const resultPage=new ResultPage()
       resultPage.clickLink()
    })

    it ('TestCase2 verify xyz flow',()=>{
        const homePage= new HomePage()
       // homePage.gotToUrl()
        homePage.enterSearchKey(data.name)
        
        const resultPage=new ResultPage()
        resultPage.clickLink()
     })

})