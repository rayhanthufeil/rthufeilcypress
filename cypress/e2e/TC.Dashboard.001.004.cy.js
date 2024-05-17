import login from "../loginAccount/Login";

describe('template spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-11')
    const Login = new Account()
    Login.AccountSuperadmin();
  })
  it('passes', () => {
    cy.get('.feedback-message-text').click()
    cy.get("a[href='/ClaimPortal/Dashboard']").click()
  })
})