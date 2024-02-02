import { baseUrl } from "./constants";

Cypress.Commands.add('statusAndTime', (status, responseTime, code, duration) => {
    expect(status).to.eq(code);
    expect(responseTime).to.be.lessThan(duration);
});

Cypress.Commands.add('apiRequest', (method, endpoint, body, failOnStatusCode) => {
    const authToken = Cypress.env('accessToken');

    cy.request({
        method,
        url : `${baseUrl}/${endpoint}`,
        headers : {
            'Authorization' : `Bearer ${authToken}`
        }, 
        body,
        failOnStatusCode 
    });
});
