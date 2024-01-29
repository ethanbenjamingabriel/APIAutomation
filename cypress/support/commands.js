Cypress.Commands.add('statusAndTime', (status, responseTime, code, duration) => {
    expect(status).to.eq(code);
    expect(responseTime).to.be.lessThan(duration);
});

Cypress.Commands.add('apiRequest', (methodInput, urlInput, bodyInput, failOnStatusCodeInput) => {
    cy.request({
        method : methodInput,
        url : urlInput,
        headers : {
            'Authorization' : `${Cypress.env('accessToken')}`
        }, 
        body : bodyInput,
        failOnStatusCode : failOnStatusCodeInput
    });
});