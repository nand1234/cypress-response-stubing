const logo = "#qa-logo";
const stay_experieces = "#aut-header-menu > :nth-child(10) > a";
const allow_cookies = "a[class='optanon-allow-all accept-cookies-button']";

class homepage {
  navigate_to_stay_Section() {
    cy.get(logo).click();
    cy.get(allow_cookies).click();
    cy.get(stay_experieces).click();
  }
}

export default new homepage;
