describe('User do Onboarding', () => {
    it('User Visits Ekrut Platform', () => {
    cy.visit('http://stg.ekrut.com/login')
    })

    it('User Inputs Email',() => {
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('tes@vira.com')
    })

    it('User Inputs Password', () => {
        cy.get('.ant-input-password > .ant-input')
        .should('be.visible')
        .type('qwerty123')
    })

    it('User Clicks Login Button', () => {
        cy.get('.content__body > .ant-btn-primary')
        .should('be.visible')
        .click()
    })

    it('User Verify URL Link', () => {
        cy.wait(4000)
        cy.url()
        .should('eq','https://stg.ekrut.com/talent/onboarding/1')
    })

    it('Input Company Name', () => {
        cy.get(':nth-child(1) > .tl-onboardingv2-field__input > :nth-child(1) > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .should('be.visible')
        .type('CORVIRA')

        cy.get('#react-select-2-option-0')
        .click()
    })

    it('Input Position', () => {
        cy.get(':nth-child(2) > .tl-onboardingv2-field__input > :nth-child(1) > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .should('be.visible')
        .type('Human Resources Consultant')

        cy.get('#react-select-3-option-0')
        .click()
    })
})