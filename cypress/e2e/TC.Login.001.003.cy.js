import login from "../loginAccount/Login";
describe('template spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-11')
  })
  it('passes', () => {
    const Login = new Account()
    Login.AccountStaff2();
  })
})