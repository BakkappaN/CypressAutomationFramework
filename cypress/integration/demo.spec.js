import 'cypress-iframe';

describe('My First Test', () => {

    it('Verify home page', () => {
        cy.visit('https://www.google.com')
        cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').type('bakkappa n github')
        cy.url
    })

    it('Scrolling', () => {
        cy.visit('https://www.youtube.com/c/BakkappaN_SoftwareTesting_Videos')

        //cy.scrollTo('bottom')

        cy.wait(5000)
        cy.contains('Other Channels').scrollIntoView()

        cy.wait(5000)
        cy.get(':nth-child(5) > :nth-child(3) > .ytd-item-section-renderer > :nth-child(1) > .grid-subheader > #title-container > h2.style-scope > #image-container > #title-text > .yt-simple-endpoint > #title').scrollIntoView()
    })

    it('iframe', () => {
        cy.visit('./iframes.html')
        cy.wait(2000)

        // cy.frameLoaded('#buttonframe') //by id

        cy.frameLoaded('[name=myframe]') //by name

        cy.iframe().find('[data-toggle=collapse]').click()
        cy.wait(6000)
    })

    before(function () {
        //Load Fixture File
        cy.fixture('dropdownlist').then(function (testdata) {
            this.testdata = testdata
        })
    })
    it('Dropdown selection and verifications', function () {
        cy.visit('./dropdown.html')

        //verify default selected option
        cy.get('select').find('option:selected').should('have.text', 'Volvo');

        //Select by value
        cy.get('select').select('audi')
        cy.get('select').select('mercedes')
        cy.wait(2000)

        //Select by visible text
        cy.get('select').select('Audi')

        //Select by index
        cy.get('select').select(1)

        // verify all the dropdown values from json file
        cy.get('option').each(($ele, i) => {
            expect($ele).to.have.text(this.testdata.dropdownValues[i])
        })

        // verify all the dropdown values from hard coded string
        cy.get('option')
            .then($els => Cypress.$.map($els, (el) => el.innerText.trim())) // uses jQuery .map()
            .should(values => {
                expect(values).to.deep.eq(["Volvo", "Saab", "Mercedes", "Audi"])
            })
    })

    it.only('alert popups', () => {
        cy.visit('https://www.selenium.dev/documentation/webdriver/browser/alerts/')
        cy.contains('See a sample confirm').click();
        cy.wait(2000)

        //verify text on alert popup
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Are you sure?')
        })

        //confirm alert by clicking
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Are you sure?')
        })

        cy.contains('See a sample confirm').click();

    });


})