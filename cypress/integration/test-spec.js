import loginpage from "./pages/login";
import homepage from "./pages/home";
import loginstub from "./stubs/login";
import stayproductstub from "./stubs/product";

const base_url = "<base url>";

describe("buyer end to end test cases", function() {
  before(function() {
    loginpage.launch_url(base_url);
  });

  beforeEach(function() {
    cy.server();
  });

  afterEach(function() {
    cy.server({ enable: false });
  });

  context("UI check using stub responses", () => {
    it("verify Login error for incorrect username and password", () => {
      loginstub.incorrect_username_password();
      loginpage.perform_login();
      cy.wait("@login");
      //Assert on XHR
      cy.get("@login").then(function(xhr) {
        expect(xhr.status).to.eq(400);
        //expect(xhr.requestHeaders).to.have.property('Content-Type')
        //expect(xhr.requestHeaders).to.have.property('X-Password', 'Passw0rd1')
        expect(xhr.method).to.eq("POST");
        // expect(xhr.responseBody).to.have.property('tokenId')
      });
      loginpage.check_error_mesage().should('exist').contains('<text to ve verified>');
    });

    it("verify list of product display in stay section", () => {
      stayproductstub.three_night_stay();
      homepage.navigate_to_stay_Section();
      cy.wait("@getthreenightproducts");
      //Assert on XHR
      cy.get("@getthreenightproducts").then(function(xhr) {
        expect(xhr.status).to.eq(200);
        //expect(xhr.requestHeaders).to.have.property('Content-Type')
        //expect(xhr.requestHeaders).to.have.property('X-Password', 'Passw0rd1')
        expect(xhr.method).to.eq("GET");
        // expect(xhr.responseBody).to.have.property('tokenId')
      });
    });
  });
});
