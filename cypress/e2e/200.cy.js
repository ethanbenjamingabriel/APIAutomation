import { scriptrunner, getTodaysDate, expectedSchemas } from '../support/constants.js';
chai.use(require('chai-json-schema'));

describe('Complete full ScriptRunner Cycle', () => {

    const deliveryDate = getTodaysDate();
    var deliveryId = 0;
    var deliveryStatus = '';
    var orderId = 0; 

    it('Create Delivery', () => {
        cy.request({
            method : 'POST',
            url : `${scriptrunner.baseUrl}/deliveries`,
            headers : {
                'Authorization' : `${scriptrunner.accessToken}`
            }, 
            body : {
                'deliveryDate' : `${deliveryDate}`
            }
        }).then((res) => {
            deliveryId = res.body.data.deliveryId;
            cy.statusAndTime(res.status, res.duration, 201, 500);
            expect(typeof res).to.eq('object');
            expect(res.body).to.have.property('data');
            expect(typeof res.body.data.deliveryDate).to.eq('string');
            expect(res.body.data.deliveryDate).to.eq(deliveryDate);
            expect(typeof res.body.data.deliveryId).to.eq('number');
            expect(res.body.data.deliveryId).to.eq(deliveryId);
            expect(typeof res.body.data.returnedOrders).to.eq('object');
            expect(res.body.data.returnedOrders).to.have.length(0);
            expect(res.body).to.be.jsonSchema(expectedSchemas[0]);
        });
    });

    it('Create Order', () => {
        cy.request({
            method : 'POST',
            url : `${scriptrunner.baseUrl}/orders`,
            headers : {
                'Authorization' : `${scriptrunner.accessToken}`
            }, 
            body : {
                "deliveryId": `${deliveryId}`,
                "paymentType": "SR_CARD",
                "customerName": "Mr Godzilla",
                "customerPhone": 4165555296,
                "customerAddress": "6 King Street West, Toronto, Ontario",
                "detail": [
                    {
                    "barcode": 13,
                    "price": 1.3
                    }
                ]
            }
        }).then((res) => {
            orderId = res.body.data.orderId;
            cy.statusAndTime(res.status, res.duration, 201, 1000);
            expect(typeof res).to.eq('object');
            expect(typeof res.body.data.orderId).to.eq('number');
            expect(res.body.data.orderId).to.eq(orderId);
            expect(typeof res.body.data.orderDetailIds).to.eq('object');
            expect(res.body.data.orderDetailIds).to.have.length(1);
            expect(res.body).to.be.jsonSchema(expectedSchemas[1]);
        });
    });

    it('Get Order', () => {
        cy.request({
            method : 'GET',
            url : `${scriptrunner.baseUrl}/orders/${orderId}`,
            headers : {
                'Authorization' : `${scriptrunner.accessToken}`
            }
        }).then((res) => {
            cy.statusAndTime(res.status, res.duration, 200, 500);
            expect(typeof res).to.eq('object');
            expect(typeof res.body.data.orderId).to.eq('number');
            expect(res.body.data.orderId).to.eq(orderId);
            expect(res.body.data.deliveryId).to.eq(deliveryId);
            expect(res.body).to.be.jsonSchema(expectedSchemas[2]);
        });
    });

    it('Get Delivery', () => {
        cy.request({
            method : 'GET',
            url : `${scriptrunner.baseUrl}/deliveries/${deliveryId}`,
            headers : {
                'Authorization' : `${scriptrunner.accessToken}`
            }
        }).then((res) => {
            cy.statusAndTime(res.status, res.duration, 200, 500);
            expect(typeof res).to.eq('object');
            expect(res.body).to.have.property('data');
            expect(typeof res.body.data.deliveryId).to.eq('string');
            expect(res.body.data.deliveryId).to.eq(deliveryId.toString());
            expect(typeof res.body.data.orders[0].orderId).to.eq('number');
            expect(res.body.data.orders[0].orderId).to.eq(orderId);
            expect(res.body).to.be.jsonSchema(expectedSchemas[3]);
        });
    });

    it('Update Delivery', () => {
        deliveryStatus = 'PICKUP_READY';
        cy.request({
            method : 'PUT',
            url : `${scriptrunner.baseUrl}/deliveries/${deliveryId}`,
            headers : {
                'Authorization' : `${scriptrunner.accessToken}`
            }, 
            body : {
                'deliveryStatus' : `${deliveryStatus}`
            }
        }).then((res) => {
            cy.statusAndTime(res.status, res.duration, 200, 2000);
            expect(typeof res).to.eq('object');
            expect(typeof res.body.data.deliveryId).to.eq('number');
            expect(res.body.data.deliveryId).to.eq(deliveryId);
            expect(typeof res.body.data.deliveryDate).to.eq('string');
            expect(res.body.data.deliveryDate).to.eq(deliveryDate);
            expect(typeof res.body.data.deliveryStatus).to.eq('string');
            expect(res.body.data.deliveryStatus).to.eq(deliveryStatus);
            expect(res.body).to.be.jsonSchema(expectedSchemas[4]);
        });
    });

    it('Delete Order', () => {
        cy.request({
            method : 'DELETE',
            url : `${scriptrunner.baseUrl}/orders/${orderId}`,
            headers : {
                'Authorization' : `${scriptrunner.accessToken}`
            }
        }).then((res) => {
            cy.statusAndTime(res.status, res.duration, 200, 1500);
            expect(typeof res).to.eq('object');
            expect(res.body.data.orderId).to.eq(orderId);
            expect(res.body).to.be.jsonSchema(expectedSchemas[5]);
        });
    });

    it('Delete Delivery', () => {
        cy.request({
            method : 'DELETE',
            url : `${scriptrunner.baseUrl}/deliveries/${deliveryId}`,
            headers : {
                'Authorization' : `${scriptrunner.accessToken}`
            }
        }).then((res) => {
            cy.statusAndTime(res.status, res.duration, 200, 1500);
            expect(res.body).to.eq('OK');
        });
    });

});