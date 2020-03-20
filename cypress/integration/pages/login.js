// UI Locators
const allow_cookies = "a[class='optanon-allow-all accept-cookies-button']";
const username = "#reg-mail";
const password = "#password-login";
const login_button =
  "button[class='qa-login-button-login-pannel button primary']";

class login {
  launch_url(base_url) {
    cy.visit(
      base_url + "<endpoint>",
      {
        onBeforeLoad: win => {
          win.sessionStorage.clear();
        }
      }
    );
  }
  perform_login() {
    cy.get(allow_cookies).click();
    cy.get(username).type("<username>");
    cy.get('#register_login_panel').toMatchImageSnapshot();
    cy.get(password).type("<password>");
    cy.get(login_button).click();
    cy.wait(3000);
  }

  check_error_mesage(){
    return cy.get('#account-login-panel > .row > form > .panel-body > [data-bind="panelMessage: panelMessage"]')
  }
}

export default new login;
