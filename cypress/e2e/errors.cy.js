import { scriptrunner, getTodaysDate } from '../support/constants.js';

describe('Test Script Runner API Calls for Error Codes', () => {

    const deliveryDate = getTodaysDate();
    var deliveryId = 0;
    var deliveryStatus = '';
    var orderId = 0; 

    it('Test Error Code 423 for Creating Order', () => {
        cy.request({
            method : 'POST',
            url : `${scriptrunner.baseUrl}/orders`,
            headers : {
                'Authorization' : `${scriptrunner.accessToken}`
            }, 
            body : {
                "deliveryId": '1234',
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
            },
            failOnStatusCode : false
        }).then((res) => {
            expect(res.body.errors[0].status).to.eq('423');
            cy.statusAndTime(res.status, res.duration, 423, 500);
            expect(typeof res).to.eq('object');
        });
    });

    it('Test Error Code 405 for Getting Order', () => {
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
        }).then(() => {
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
            }).then(() => {
                cy.request({
                    method : 'PATCH',
                    url : `${scriptrunner.baseUrl}/orders/${orderId}`,
                    headers : {
                        'Authorization' : `${scriptrunner.accessToken}`
                    }, 
                    body : {
                        "deliveryId": '1234',
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
                    },
                    failOnStatusCode : false
                }).then((res) => {
                    cy.statusAndTime(res.status, res.duration, 405, 500);
                    expect(typeof res).to.eq('object');
                });
            });
        });
    });

    it('Test Error Code 404 for Getting Delivery', () => {
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
        }).then(() => {
            cy.request({
                method : 'GET',
                url : `${scriptrunner.baseUrl}/deliveries/${deliveryId * 10}`,
                headers : {
                    'Authorization' : `${scriptrunner.accessToken}`
                },
                failOnStatusCode : false
            }).then((res) => {
                cy.statusAndTime(res.status, res.duration, 404, 500);
                expect(typeof res).to.eq('object');
            });
        })
    });

    it('Test Error Code 401 for Getting Delivery', () => {
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
        }).then(() => {
            cy.request({
                method : 'GET',
                url : `${scriptrunner.baseUrl}/deliveries/${deliveryId}`,
                failOnStatusCode : false
            }).then((res) => {
                cy.statusAndTime(res.status, res.duration, 401, 500);
                expect(typeof res).to.eq('object');
            });
        })
    });

    it('Test Error Code 400 for Updating Delivery', () => {
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
        }).then(() => {
            deliveryStatus = 'PICKUP_READY_FAKE';
            cy.request({
                method : 'PUT',
                url : `${scriptrunner.baseUrl}/deliveries/${deliveryId}`,
                headers : {
                    'Authorization' : `${scriptrunner.accessToken}`
                }, 
                body : {
                    'deliveryStatus' : `${deliveryStatus}`
                },
                failOnStatusCode : false
            }).then((res) => {
                cy.statusAndTime(res.status, res.duration, 400, 2000);
                expect(typeof res).to.eq('object');
            });
        });
    });

    it('Test Error Code 404 for Deleting Order', () => {
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
        }).then(() => {
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
            }).then(() => {
                cy.request({
                    method : 'DELETE',
                    url : `${scriptrunner.baseUrl}/orders/${orderId}`,
                    headers : {
                        'Authorization' : `${scriptrunner.accessToken}`
                    },
                }).then(() => {
                    cy.request({
                        method : 'DELETE',
                        url : `${scriptrunner.baseUrl}/orders/${orderId}`,
                        headers : {
                            'Authorization' : `${scriptrunner.accessToken}`
                        },
                        failOnStatusCode : false
                    }).then((res) => {
                        cy.statusAndTime(res.status, res.duration, 404, 500);
                        expect(typeof res).to.eq('object');
                    });
                });
            });
        });
    });

    it('Test Error Code 404 for Deleting Delivery', () => {
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
        }).then(() => {
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
            }).then(() => {
                cy.request({
                    method : 'DELETE',
                    url : `${scriptrunner.baseUrl}/deliveries/${deliveryId}`,
                    headers : {
                        'Authorization' : `${scriptrunner.accessToken}`
                    },
                    failOnStatusCode : false
                }).then(() => {
                    cy.request({
                        method : 'DELETE',
                        url : `${scriptrunner.baseUrl}/deliveries/${deliveryId}`,
                        headers : {
                            'Authorization' : `${scriptrunner.accessToken}`
                        },
                        failOnStatusCode : false
                    }).then((res) => {
                        cy.statusAndTime(res.status, res.duration, 404, 500);
                        expect(typeof res).to.eq('object');
                    });
                });
            });
        });
    });

});