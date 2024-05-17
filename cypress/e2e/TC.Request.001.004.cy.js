import Account from "../loginAccount/Login";
describe('template spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-11')
    const Login = new Account()
    Login.AccountStaff1();
  })
  it('passes', () => {
    cy.get('.feedback-message-text').click()
    cy.get('.margin-left-m').click()
    cy.get("div[id='ListInvoices_NewInvoice'] button[type='button']").click()
    cy.get('#Input_InvoiceNumber').type('RTS-007')
    cy.get('#Input_PeriodStartDate').type('2024-05-14T08:30')
    cy.get('#Input_PeriodEndDate').type('2024-04-14T12:30')
    cy.get('#Input_Amount').type('1000')
    cy.get("button[type='submit']").click()
  })
})