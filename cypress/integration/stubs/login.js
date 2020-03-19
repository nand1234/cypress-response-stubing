class loginstub {
  incorrect_username_password() {
    cy.route({
      method: "POST", // Route all POST requests
      status: 400,
      url: "<endpoint>", // that have a URL that matches '/users/*'
      response: "<stub response>"
    }).as("login");
  }
}

export default new loginstub;