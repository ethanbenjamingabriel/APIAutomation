import { baseUrl } from "./constants";

Cypress.Commands.add('statusAndTime', (status, responseTime, code, duration) => {
    expect(status).to.eq(code);
    expect(responseTime).to.be.lessThan(duration);
});

Cypress.Commands.add('apiRequest', (method, endpoint, body, failOnStatusCode=true) => {
    cy.request({
        method,
        url : `${baseUrl}/${endpoint}`,
        headers : {
            'Authorization' : `Bearer ${process.env.BEARER_TOKEN}`
        }, 
        body,
        failOnStatusCode
    });
});