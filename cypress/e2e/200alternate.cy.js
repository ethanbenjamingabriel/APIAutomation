import { scriptrunner, getTodaysDate } from '../support/constants.js';

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
            expect(res.body.data.deliveryDate).to.eq(deliveryDate);
            deliveryId = res.body.data.deliveryId;
            expect(res.body.data.deliveryId).to.eq(deliveryId);
            expect(res.body.data.returnedOrders).to.have.length(0);
            cy.statusAndTime(res.status, res.duration, 201, 500);
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
            expect(res.body.data.orderId).to.eq(orderId);
            expect(res.body.data.orderDetailIds).to.have.length(1);
            cy.statusAndTime(res.status, res.duration, 201, 500);
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
            expect(res.body.data.orderId).to.eq(orderId);
            expect(res.body.data.deliveryId).to.eq(deliveryId);
            cy.statusAndTime(res.status, res.duration, 200, 500);
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
            expect(res.body.data.deliveryId).to.eq(deliveryId.toString());
            expect(res.body.data.orders[0].orderId).to.eq(orderId);
            cy.statusAndTime(res.status, res.duration, 200, 500);
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
            expect(res.body.data.deliveryId).to.eq(deliveryId);
            expect(res.body.data.deliveryDate).to.eq(deliveryDate);
            expect(res.body.data.deliveryStatus).to.eq(deliveryStatus);
            cy.statusAndTime(res.status, res.duration, 200, 2000);
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
            expect(res.body.data.orderId).to.eq(orderId);
            cy.statusAndTime(res.status, res.duration, 200, 1500);
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
            expect(res.body).to.eq('OK');
            cy.statusAndTime(res.status, res.duration, 200, 1500);
        });
    });

});