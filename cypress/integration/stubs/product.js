
class productstub{
    three_night_stay(){
        cy.route({
            method: "GET", // Route all POST requests
            status: 200,
            url: "<end point>", // that have a URL that matches '/users/*'
            response: "<stub response>"
        }).as("getthreenightproducts");

    }
}

export default new productstub;