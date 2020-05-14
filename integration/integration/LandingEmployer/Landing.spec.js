describe('Employer Landing screen', () => {
    it('User Visits Ekrut Platform', () => {
    cy.visit('http://devel.ekrut.com/')
    })

    it('User Click Employer menu',() => {
        cy.get('[href="/employers"]')
        .click()
    })

    it('User Checks URL', () => {
        cy.wait(10000)
        cy.url()
        .should('eq','http://devel.ekrut.com/employers')
    })

    it('User Verify subtitle', () => {
        cy.wait(10000)
        cy.get('.ant-row > .gst-jumbotron-v2__sub-title')
        cy.contains('No. 1 AI-enabled recruitment firm with over 10,000 matches per month')
    })
    
    it('User Verify Register Now button', () => {
        cy.get('.ant-row > .gst-jumbotron-v2__title')
        .should('be.visible')
    })

    it('User verify text How EKRUT fulfill your roles', () => {
        cy.wait(10000)
        cy.get(':nth-child(7) > .gst-container__section > .gst-container__title')
        cy.contains('How EKRUT fulfill your roles')
    })

    it('User verify text Fulfill your open roles with EKRUT', () => {
        cy.wait(10000)
        cy.get(':nth-child(8) > .gst-container__section > .gst-container__title')
        cy.contains('Fulfill your open roles with EKRUT')
    })
    
})