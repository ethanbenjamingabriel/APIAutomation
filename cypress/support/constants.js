export const baseUrl = "https://api.staging.script-runner.com";

export const methods = {
    post: 'POST',
    get: 'GET',
    put: 'PUT',
    delete: 'DELETE',
    patch: 'PATCH'
}

export function getTodaysDate() {
    const date = new Date();
    const year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    const deliveryDate = `${year}-${month}-${day}`;
    return deliveryDate;
}

export function createDeliveryBody(deliveryDate) {
    return {
        "deliveryDate" : `${deliveryDate}`
    };
}

export function createOrderBody(deliveryId) {
    return {
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
    };
}

export function updateDeliveryBody(deliveryStatus) {
    return {
        "deliveryStatus" : `${deliveryStatus}`
    };
}

export const expectedSchemas = {

    createDelivery: {
        "type": "object",
        "properties": {
            "data": {
                "type": "object",
                "items": {
                    "deliveryId": {
                        "type": "number"
                    },
                    "deliveryDate": {
                        "type": "date"
                    },
                    "returnedOrders": {
                        "type": "array"
                    }
                }
            }
        }
    },

    createOrder: {
        "type": "object",
        "properties": {
            "data": {
                "type": "object",
                "items": {
                    "orderId": {
                        "type": "number"
                    }, 
                    "orderDetailIds": {
                        "type": "array"
                    }
                }
            }
        }
    },

    getOrder: {
        "type": "object",
        "properties": {
            "data": {
                "type": "object",
                "items": {
                    "orderId": {
                        "type": "number"
                    },
                    "deliveryId": {
                        "type": "number"
                    },
                    "paymentType": {
                        "type": "string"
                    },
                    "customerName": {
                        "type": "string"
                    },
                    "customerAddress": {
                        "type": "string"
                    },
                    "customerPhone": {
                        "type": "string"
                    },
                    "orderNote": {
                        "type": "object"
                    },
                    "orderStatus": {
                        "type": "string"
                    },
                    "completionNote": {
                        "type": "object"
                    },
                    "failureNote": {
                        "type": "object"
                    },
                    "failureReason": {
                        "type": "object"
                    },
                    "onfleetPickupTaskId": {
                        "type": "object"
                    },
                    "onfleetDropoffTaskId": {
                        "type": "object"
                    },
                    "paymentTotal": {
                        "type": "string"
                    },
                    "latestChargeDate": {
                        "type": "object"
                    },
                    "authStanIds": {
                        "type": "string"
                    },
                    "detail": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "items": {
                                "barcode": {
                                    "type": "string"
                                },
                                "isRefrigerated": {
                                    "type": "boolean"
                                },
                                "isNarcotics": {
                                    "type": "boolean"
                                },
                                "price": {
                                    "type": "string"
                                },
                                "orderDetailId": {
                                    "type": "number"
                                },
                            }
                        }
                    },
                    "time": {
                        "type": "object"
                    },
                    "notes": {
                        "type": "object"
                    },
                    "photoUpload": {
                        "type": "object"
                    },
                    "signatureUpload": {
                        "type": "object"
                    },
                }
            }
        }
    },

    getDelivery: {
        "type": "object",
        "properties": {
            "data": {
                "type": "object",
                "properties": {
                    "deliveryId":{
                        "type": "string",
                    },
                    "deliveryDate": {
                        "type": "string",
                    },
                    "deliveryStatus": {
                        "type": "string",
                    },
                    "storeName": {
                        "type": "string",
                    },
                    "orders": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "orderId": {
                                    "type": "number"
                                },
                                "paymentType": {
                                    "type": "string"
                                },
                                "customerName": {
                                    "type": "string"
                                },
                                "customerPhone": {
                                    "type": "string"
                                },
                                "customerAddress": {
                                    "type": "string"
                                },
                                "latitude": {
                                    "type": "string"
                                },
                                "longitude": {
                                    "type": "string"
                                },
                                "orderNote": {
                                    "type": "null"
                                },
                                "completionNote": {
                                    "type": "null"
                                },
                                "failureNote": {
                                    "type": "null"
                                },
                                "failureReason": {
                                    "type": "null"
                                },
                                "orderStatus": {
                                    "type": "string"
                                },
                                "paymentTotal": {
                                    "type": "string"
                                },
                                "latestChargeDate": {
                                    "type": "null"
                                },
                                "onfleetDropoffTaskId": {
                                    "type": "null"
                                },
                                "squareObjectId": {
                                    "type": "string"
                                },
                                "detail": {
                                    "type": "array",
                                    "items": {
                                        "type":"object",
                                        "properties":{
                                            "barcode":{
                                                "type": "string"
                                            },
                                            "isRefrigerated":{
                                                "type": "boolean"
                                            },
                                            "isNarcotics":{
                                                "type": "boolean"
                                            },
                                            "price":{
                                                "type": "string"
                                            },
                                            "orderDetailId":{
                                                "type": "number"
                                            }
                                        }
                                    }
                                },
                                "completedFullNote": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "ordersCount": {
                        "type":"object",
                        "items": {
                            "totalOrders":{
                                "type": "string"
                            }, 
                            "totalReturns": {
                                "type": "string"
                            } 
    
                        }
                    }
                }
            }
        }
    },

    updateDelivery: {
        "type": "object",
        "items": {
            "data": {
                "type": "object",
                "items": {
                    "deliveryId": {
                        "type": "number"
                    }, 
                    "deliveryDate": {
                        "type": "date"
                    },
                    "deliveryStatus": {
                        "type": "string"
                    },
                    "onfleetPickupTaskId": {
                        "type": "string"
                    }
                }
            }
        }
    },

    deleteOrder: {
        "type": "object",
        "properties": {
            "data": {
                "type": "object",
                "items": {
                    "orderId": {
                        "type": "number"
                    }
                }
            }
        }
    }

};

export const expectedErrorSchemas = {

    createOrder423: {
        "type": "object",
        "properties": {
            "errors": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "title": {
                            "type": "string"
                        },
                        "detail": {
                            "type": "string"
                        },
                        "source": {
                            "type": "object",
                            "properties": {
                                "pointer": {
                                    "type": "string"
                                } 
                            }
                        }
                    }
                }
            }
        }
    },

    getOrder405: {
        "type": "object",
        "properties": {
            "errors": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "title": {
                            "type": "string"
                        },
                        "detail": {
                            "type": "string"
                        },
                        "source": {
                            "type": "object",
                            "properties": {
                                "pointer": {
                                    "type": "string"
                                } 
                            }
                        }
                    }
                }
            }
        }
    },

    getDelivery404: {
        "type": "object",
        "properties": {
            "errors": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "title": {
                            "type": "string"
                        },
                        "detail": {
                            "type": "string"
                        },
                        "source": {
                            "type": "object",
                            "properties": {
                                "pointer": {
                                    "type": "string"
                                } 
                            }
                        }
                    }
                }
            }
        }
    },

    getDelivery401: {
        "type": "object",
        "properties": {
            "errors": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "path": {
                        "type": "string"
                        },
                        "message": {
                        "type": "string"
                        },
                        "status": {
                        "type": "string"
                        },
                        "source": {
                        "type": "object",
                            "properties": {
                                "pointer": {
                                    "type": "string"
                                } 
                            }
                        }
                    }
                }
            }
        }
    },

    updateDelivery400: {
        "type": "object",
        "properties": {
            "errors": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "path": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        },
                        "errorCode": {
                            "type": "string"
                        },
                        "status": {
                            "type": "string"
                        },
                        "source": {
                            "type": "object",
                            "properties": {
                                "pointer": {
                                    "type": "string"
                                } 
                            }
                        }
                    }
                }
            }
        }
    },

    deleteOrder404: {
        "type": "object",
        "properties": {
            "errors": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "title": {
                            "type": "string"
                        },
                        "source": {
                            "type": "object",
                            "properties": {
                                "pointer": {
                                    "type": "string"
                                } 
                            }
                        }
                    }
                }
            }
        }
    },

    deleteDelivery404: {
        "type": "object",
        "properties": {
            "errors": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "title": {
                            "type": "string"
                        },
                        "source": {
                            "type": "object",
                            "properties": {
                                "pointer": {
                                    "type": "string"
                                } 
                            }
                        }
                    }
                }
            }
        }
    }

};