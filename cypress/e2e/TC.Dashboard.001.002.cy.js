import Account from "../loginAccount/Login";

describe('template spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-11')
    const Login = new Account()
    Login.AccountStaff1();
  })
  it('passes', () => {
    cy.get('.feedback-message-text').click()
    cy.get("a[href='/ClaimPortal/Dashboard']").click()
    cy.wait(1000)
  })
})