import { methods, getTodaysDate, expectedErrorSchemas, createOrder423Body, createDeliveryBody, createOrderBody, updateDeliveryBody } from '../support/constants.js';
chai.use(require('chai-json-schema'));

describe('Test Script Runner API Calls for Error Codes', () => {

    const deliveryDate = getTodaysDate();
    var deliveryId = 0;
    var deliveryStatus = '';
    var orderId = 0; 

    it('Test Error Code 423 for Creating Order', () => {
        cy.apiRequest(methods.post, `${Cypress.env('baseUrl')}/orders`, createOrder423Body(), false).then((res) => {
            cy.statusAndTime(res.status, res.duration, 423, 500);
            expect(typeof res).to.eq('object');
            expect(res.body).to.be.jsonSchema(expectedErrorSchemas.createOrder423);
        });
    });

    it('Test Error Code 405 for Getting Order', () => {
        cy.apiRequest(methods.post, `${Cypress.env('baseUrl')}/deliveries`, createDeliveryBody(deliveryDate), true).then((res) => {
            deliveryId = res.body.data.deliveryId;
            cy.apiRequest(methods.post, `${Cypress.env('baseUrl')}/orders`, createOrderBody(deliveryId), true).then((res) => {
                orderId = res.body.data.orderId;
                cy.apiRequest(methods.patch, `${Cypress.env('baseUrl')}/orders/${orderId}`, createOrder423Body(), false).then((res) => {
                    cy.statusAndTime(res.status, res.duration, 405, 500);
                    expect(typeof res).to.eq('object');
                    expect(res.body).to.be.jsonSchema(expectedErrorSchemas.getOrder405);
                });
            });
        });
    });

    it('Test Error Code 404 for Getting Delivery', () => {
        cy.apiRequest(methods.post, `${Cypress.env('baseUrl')}/deliveries`, createDeliveryBody(deliveryDate), true).then((res) => {
            deliveryId = res.body.data.deliveryId;
            cy.apiRequest(methods.get, `${Cypress.env('baseUrl')}/deliveries/${deliveryId * 10}`, null, false).then((res) => {
                cy.statusAndTime(res.status, res.duration, 404, 500);
                expect(typeof res).to.eq('object');
                expect(res.body).to.be.jsonSchema(expectedErrorSchemas.getDelivery404);
            });
        })
    });

    it('Test Error Code 401 for Getting Delivery', () => {
        cy.apiRequest(methods.post, `${Cypress.env('baseUrl')}/deliveries`, createDeliveryBody(deliveryDate), true).then((res) => {
            deliveryId = res.body.data.deliveryId;
            cy.request({
                method : 'GET',
                url : `${Cypress.env('baseUrl')}/deliveries/${deliveryId}`,
                failOnStatusCode : false
            }).then((res) => {
                cy.statusAndTime(res.status, res.duration, 401, 500);
                expect(typeof res).to.eq('object');
                expect(res.body).to.be.jsonSchema(expectedErrorSchemas.getDelivery401);
            });
        })
    });

    it('Test Error Code 400 for Updating Delivery', () => {
        cy.apiRequest(methods.post, `${Cypress.env('baseUrl')}/deliveries`, createDeliveryBody(deliveryDate), true).then((res) => {
            deliveryId = res.body.data.deliveryId;
            deliveryStatus = 'PICKUP_READY_FAKE';
            cy.apiRequest(methods.put, `${Cypress.env('baseUrl')}/deliveries/${deliveryId}`, updateDeliveryBody(deliveryStatus), false).then((res) => {
                cy.statusAndTime(res.status, res.duration, 400, 2000);
                expect(typeof res).to.eq('object');
                expect(res.body).to.be.jsonSchema(expectedErrorSchemas.updateDelivery400);
            });
        });
    });

    it('Test Error Code 404 for Deleting Order', () => {
        cy.apiRequest(methods.post, `${Cypress.env('baseUrl')}/deliveries`, createDeliveryBody(deliveryDate), true).then((res) => {
            deliveryId = res.body.data.deliveryId;
            cy.apiRequest(methods.post, `${Cypress.env('baseUrl')}/orders`, createOrderBody(deliveryId), true).then((res) => {
                orderId = res.body.data.orderId;
                cy.apiRequest(methods.delete, `${Cypress.env('baseUrl')}/orders/${orderId}`, null, true).then((res) => {
                    cy.apiRequest(methods.delete, `${Cypress.env('baseUrl')}/orders/${orderId}`, null, false).then((res) => {
                        cy.statusAndTime(res.status, res.duration, 404, 500);
                        expect(typeof res).to.eq('object');
                        expect(res.body).to.be.jsonSchema(expectedErrorSchemas.deleteOrder404);
                    });
                });
            });
        });
    });

    it('Test Error Code 404 for Deleting Delivery', () => {
        cy.apiRequest(methods.post, `${Cypress.env('baseUrl')}/deliveries`, createDeliveryBody(deliveryDate), true).then((res) => {
            deliveryId = res.body.data.deliveryId;
            cy.apiRequest(methods.post, `${Cypress.env('baseUrl')}/orders`, createOrderBody(deliveryId), true).then((res) => {
                orderId = res.body.data.orderId;
                cy.apiRequest(methods.delete, `${Cypress.env('baseUrl')}/deliveries/${deliveryId}`, null, true).then((res) => {
                    cy.apiRequest(methods.delete, `${Cypress.env('baseUrl')}/deliveries/${deliveryId}`, null, false).then((res) => {
                        cy.statusAndTime(res.status, res.duration, 404, 500);
                        expect(typeof res).to.eq('object');
                        expect(res.body).to.be.jsonSchema(expectedErrorSchemas.deleteDelivery404);
                    });
                });
            });
        });
    });

});