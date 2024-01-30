Cypress.Commands.add('statusAndTime', (status, responseTime, code, duration) => {
    expect(status).to.eq(code);
    expect(responseTime).to.be.lessThan(duration);
});

Cypress.Commands.add('apiRequest', (method, endpoint, body, failOnStatusCode=true) => {
    cy.request({
        method,
        url : `${Cypress.env('baseUrl')}/${endpoint}`,
        headers : {
            'Authorization' : `${Cypress.env('accessToken')}`
        }, 
        body,
        failOnStatusCode
    });
});