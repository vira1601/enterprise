describe('User Set Interview Offline', () => {
    it('User Visits Ekrut Platform', () => {
    cy.visit('http://devel.ekrut.com/login')
    })

    it('User Inputs Email',() => {
        cy.wait(1000)
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('eka@xurya.com')
    })

    it('User Inputs Password', () => {
        cy.get('.ant-input-password > .ant-input')
        .should('be.visible')
        .type('kazuchan')
    })

    it('User Clicks Login Button', () => {
        cy.get('.content__body > .ant-btn-primary')
        .should('be.visible')
        .click()
        .wait(4000)
    })
    it('User Clicks Role Menu', () => {
        cy.get('.ant-menu > :nth-child(4)')
        .should('be.visible')
        .click()
    })

    it('User select roles', () => {
        cy.get('[href="/employer/roles/8876"] > .emp-myrole-v2__card__container')
        .scrollIntoView()
        .click()
    })

    it('User click Tab FCV', () => {
        cy.get('.emp-tab__item-fcv')
        .click()
        .wait(1000)
    })

    it('User Select Talent and click Action button', () => {
        cy.get(':nth-child(2) > .emp-role-talent__footer > .ant-row-space-between > .emp-role-talent__list-button > .ant-row > .w-sm-100 > .sc-dxgOiQ > .btn')
        .click()
    })

    it('User click Set Interview', () => {
        cy.get('.emp-cta-6')
        .click()
    })

    it('User Select Invitation Type', () => {
        cy.get('.col-sm-6 > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .click()
    })

    it('User select Psikotest Interview Offline', () => {
        cy.get('#react-select-6-option-8')
        .click()
    })

    it('User select Interview Schedule', () => {
        //User click datefield
        cy.get(':nth-child(2) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .form-control')                                                      
        
        .click()
        //User select schedule date
        cy.get(':nth-child(2) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .rdtPicker > .rdtDays > table > tbody > :nth-child(3) > [data-value="15"]')
        .click()
        //user click time field
        cy.get(':nth-child(2) > .c-input-group-time > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3').click()
        //user select schedule time
        cy.get('#react-select-7-option-5').click()
    })

    
    it('User select Interview Schedule 1', () => {
        //User click datefield
        cy.get(':nth-child(3) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .form-control').click()
        //User select schedule date
        cy.get(':nth-child(3) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .rdtPicker > .rdtDays > table > tbody > :nth-child(3) > [data-value="16"]')
        .scrollIntoView()
        .click()
        //user click time field
        cy.get(':nth-child(3) > .c-input-group-time > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3').click()
        //user select schedule time
        cy.get('#react-select-8-option-0').click()
    })

    it('User Select Location', () => {
        cy.get(':nth-child(1) > .ant-card-body')
        .click()
    })
    //Add new location
    it('User Input New Location', () => {
    cy.get('.ant-row-end > .ant-btn').click()
    })
})
