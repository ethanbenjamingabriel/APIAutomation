import { methods, getTodaysDate, expectedSchemas, createDeliveryBody, createOrderBody, updateDeliveryBody } from '../support/constants.js';
chai.use(require('chai-json-schema'));

describe('Complete full ScriptRunner Cycle', () => {

    const deliveryDate = getTodaysDate();
    var deliveryId = 0;
    var deliveryStatus = '';
    var orderId = 0; 

    it('Create Delivery', () => {
        cy.apiRequest(methods.post, 'deliveries', createDeliveryBody(deliveryDate), true).then((res) => {
            deliveryId = res.body.data.deliveryId;
            cy.statusAndTime(res.status, res.duration, 201, 500);
            expect(typeof res).to.eq('object');
            expect(res.body).to.have.property('data');
            expect(typeof res.body.data.deliveryDate).to.eq('string');
            expect(res.body.data.deliveryDate).to.eq(deliveryDate);
            expect(typeof res.body.data.deliveryId).to.eq('number');
            expect(res.body.data.deliveryId).to.eq(deliveryId);
            expect(typeof res.body.data.returnedOrders).to.eq('object');
            expect(res.body).to.be.jsonSchema(expectedSchemas.createDelivery);
        });
    });

    it('Create Order', () => {
        cy.apiRequest(methods.post, 'orders', createOrderBody(deliveryId), true).then((res) => {
            orderId = res.body.data.orderId;
            cy.statusAndTime(res.status, res.duration, 201, 1000);
            expect(typeof res).to.eq('object');
            expect(typeof res.body.data.orderId).to.eq('number');
            expect(res.body.data.orderId).to.eq(orderId);
            expect(typeof res.body.data.orderDetailIds).to.eq('object');
            expect(res.body.data.orderDetailIds).to.have.length(1);
            expect(res.body).to.be.jsonSchema(expectedSchemas.createOrder);
        });
    });

    it('Get Order', () => {
        cy.apiRequest(methods.get, `orders/${orderId}`, null, true).then((res) => {
            cy.statusAndTime(res.status, res.duration, 200, 500);
            expect(typeof res).to.eq('object');
            expect(typeof res.body.data.orderId).to.eq('number');
            expect(res.body.data.orderId).to.eq(orderId);
            expect(res.body.data.deliveryId).to.eq(deliveryId);
            expect(res.body).to.be.jsonSchema(expectedSchemas.getOrder);
        });
    });

    it('Get Delivery', () => {
        cy.apiRequest(methods.get, `deliveries/${deliveryId}`, null, true).then((res) => {
            cy.statusAndTime(res.status, res.duration, 200, 500);
            expect(typeof res).to.eq('object');
            expect(res.body).to.have.property('data');
            expect(typeof res.body.data.deliveryId).to.eq('string');
            expect(res.body.data.deliveryId).to.eq(deliveryId.toString());
            expect(typeof res.body.data.orders[0].orderId).to.eq('number');
            expect(res.body.data.orders[0].orderId).to.eq(orderId);
            expect(res.body).to.be.jsonSchema(expectedSchemas.getDelivery);
        });
    });

    it('Update Delivery', () => {
        deliveryStatus = 'PICKUP_READY';
        cy.apiRequest(methods.put, `deliveries/${deliveryId}`, updateDeliveryBody(deliveryStatus), true).then((res) => {
            cy.statusAndTime(res.status, res.duration, 200, 3000);
            expect(typeof res).to.eq('object');
            expect(typeof res.body.data.deliveryId).to.eq('number');
            expect(res.body.data.deliveryId).to.eq(deliveryId);
            expect(typeof res.body.data.deliveryDate).to.eq('string');
            expect(res.body.data.deliveryDate).to.eq(deliveryDate);
            expect(typeof res.body.data.deliveryStatus).to.eq('string');
            expect(res.body.data.deliveryStatus).to.eq(deliveryStatus);
            expect(res.body).to.be.jsonSchema(expectedSchemas.updateDelivery);
        });
    });

    it('Delete Order', () => {
        cy.apiRequest(methods.delete, `orders/${orderId}`, null, true).then((res) => {
            cy.statusAndTime(res.status, res.duration, 200, 1500);
            expect(typeof res).to.eq('object');
            expect(res.body.data.orderId).to.eq(orderId);
            expect(res.body).to.be.jsonSchema(expectedSchemas.deleteOrder);
        });
    });

    it('Delete Delivery', () => {
        cy.wait(1000);
        cy.apiRequest(methods.get, `deliveries/${deliveryId}`, null, true).then((res) => {
            expect(res.body.data.deliveryId).to.eq(deliveryId.toString());
            cy.apiRequest(methods.delete, `deliveries/${deliveryId}`, null, true).then((res) => {
                cy.statusAndTime(res.status, res.duration, 200, 1500);
                expect(res.body).to.eq('OK');
            });
        });
    });

});