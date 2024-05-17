import Account from "../loginAccount/Login";

describe('template spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-11')
    const Login = new Account()
    Login.AccountHC();
  })
  it('passes', () => {
    cy.get('.feedback-message-text').click()
    cy.get('.margin-left-m').click()
    cy.get('#Input_SearchKeyword').type('RTS-005')
    cy.wait(1000)
    cy.get("td[data-header='Invoice'] a span").click()
    cy.wait(1000)
    cy.get("button[type='button']").click()
    cy.get('#Input_SearchKeyword').type('RTS-005')
  })
})