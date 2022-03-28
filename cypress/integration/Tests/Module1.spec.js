import HomePage from '../PageObjects/HomePage'
import ResultPage from '../PageObjects/ResultPage'

describe('Module1 suite',()=>{

    it ('TestCase1 verify abc flow',()=>{
       const homePage= new HomePage()
       homePage.gotToUrl()
       homePage.enterSearchKey('bakkappa n github')
       
       const resultPage=new ResultPage()
       resultPage.clickLink()

    })

    it ('TestCase2 verify abc flow',()=>{
        const homePage= new HomePage()
        homePage.gotToUrl()
        homePage.enterSearchKey('bakkappa n github')
        
        const resultPage=new ResultPage()
        resultPage.clickLink()
 
     })

})