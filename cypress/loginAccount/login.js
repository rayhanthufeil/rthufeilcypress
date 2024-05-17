class Account {
    AccountHC() {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.wait(1000)
        cy.get('#Input_UsernameVal').type('charles.estevez')
        cy.get('#Input_PasswordVal').type('123456')
        cy.get("button[type='submit']").click()
    }

    AccountStaff1() {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.wait(1000)
        cy.get('#Input_UsernameVal').type('nancy.martin')
        cy.get('#Input_PasswordVal').type('123456')
        cy.get("button[type='submit']").click()
    }

    AccountStaff2() {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.wait(1000)
        cy.get('#Input_UsernameVal').type('cecil.anderson')
        cy.get('#Input_PasswordVal').type('123456')
        cy.get("button[type='submit']").click()
    }

    AccountSuperadmin() {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.wait(1000)
        cy.get('#Input_UsernameVal').type('Superadmin.company')
        cy.get('#Input_PasswordVal').type('123456')
        cy.get("button[type='submit']").click()
    }

    AccountFinance() {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.wait(1000)
        cy.get('#Input_UsernameVal').type('angela.garcia')
        cy.get('#Input_PasswordVal').type('123456')
        cy.get("button[type='submit']").click()
    }
}

export default Account