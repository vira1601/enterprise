describe('User Login', () => {
    it('User Visits Ekrut Platform', () => {
    cy.visit('http://stg.ekrut.com/login')
    })

    it('User click Register button',() => {
        cy.get('.eds-header__right > :nth-child(1)')
        .should('be.visible')
        .click()
    })

    it('User Click Tab Employer', () => {
        cy.get('.c-tabs__header__label > :nth-child(2)')
        .should('be.visible')
        .click()
    })

    it('User Input Valid Fullname', () => {
        cy.get('.c-tabs__content > :nth-child(1) > .ant-row > .ant-col > .Wrapper-sc-gqjdw > .Content-sc-1cmyk70 > .content__body > :nth-child(1) > .ant-input')
        .should('be.visible')
        .type(fullname)
    })

    it('User Input Valid Email', () => {
        cy.get('.content__body > :nth-child(2) > .ant-input')
        .should('be.visible')
        .type(email)
    })

    it('User Input Valid Password', () => {
        cy.get(':nth-child(3) > .ant-input-password > .ant-input')
        .should('be.visible')
        .type('qwerty123')
    })
    it('User Input Valid Confirm Password', () => {
        cy.get(':nth-child(4) > .ant-input-password > .ant-input')
        .should('be.visible')
        .type('qwerty123')
    })
    it('User Input Valid Phone Number', () => {
        cy.get('#phone')
        .should('be.visible')
        .type('08930000002')
    })

    it('User Input Company Name', () => {
        cy.get(':nth-child(6) > .ant-input')
        .should('be.visible')
        .type(randomtext)
    })

    it('User Click checkbox Agreement', () => {
        cy.get(':nth-child(7) > .ant-checkbox-group > .ant-checkbox-group-item > :nth-child(2)')
        .click()
    })

    it('User Click Register Button', () => {
        cy.get('.c-tabs__content > :nth-child(1) > .ant-row > .ant-col > .Wrapper-sc-gqjdw > .Content-sc-1cmyk70 > .content__body > .ant-btn')
        .wait(1000)
        .should('be.visible')
        .click()
    })

    it('Modal Thankyou for register appear',()=>{
        cy.get('.gst-verify-email__title')
        .wait(1000)
        .should('be.visible')
        .contains('Thank You for Registering!')
    })

    it('User Click Done Button', () => {
        cy.get('.btn')
        .should('be.visible')
        .click()
    })

    // it('User Click Resend Email Verification', () => {
    //     cy.get('.gst-verify-email__resend')
    //     .should('be.visible')
    //     .click()
    // })
    

    
    
})


const randomtext = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
const fullname = 'Auto ' + randomtext
const email = 'auto' +randomtext + '@' + randomtext + '.com'