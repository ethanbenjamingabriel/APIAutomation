import { baseUrl } from "./constants";

Cypress.Commands.add('statusAndTime', (status, responseTime, code, duration) => {
    expect(status).to.eq(code);
    expect(responseTime).to.be.lessThan(duration);
});

Cypress.Commands.add('apiRequest', (method, endpoint, body, failOnStatusCode=true) => {

    console.log("🚀 ~ Cypress.Commands.add ~ process.env.BEARER_TOKEN:", process.env.BEARER_TOKEN)
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
