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
    cy.get("button[type='submit']").click()
  })
})