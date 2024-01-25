export const scriptrunner = {
    accessToken: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjFzbWVUTW5DRUpIb2p5aU1xUlgwViJ9.eyJodHRwczovL3NjcmlwdHJ1bm5lci5jb20vc3RvcmVfbnVtYmVyIjoic3VyZXNoLXN0b3JlIiwibmlja25hbWUiOiJzdXJlc2giLCJuYW1lIjoic3VyZXNoQHNjcmlwdC1ydW5uZXIuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2M2ODk2NzQ1YmZhMWIwNzVkMDVhMWU3NzNlMzAwZDc4P3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGc3UucG5nIiwidXBkYXRlZF9hdCI6IjIwMjQtMDEtMjRUMTk6MDg6NTIuNjk5WiIsImVtYWlsIjoic3VyZXNoQHNjcmlwdC1ydW5uZXIuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vc2NyaXB0LXJ1bm5lci51cy5hdXRoMC5jb20vIiwiYXVkIjoiY05lRzNtUjdlbER5TGxtWGxxRG1tSnlNbkZSaDhwbWUiLCJpYXQiOjE3MDYxOTA4ODcsImV4cCI6MTcwNjIyNjg4Nywic3ViIjoiYXV0aDB8NWY2MjQxYzcyOWI4M2YwMDZhMmNjY2IyIiwic2lkIjoidGcxUExEeTEzY2tPNzQxM2RZRkVnS19YTmtIaU5UcmciLCJub25jZSI6IlJFUm5lVzFrUTJsSU9FbzVkVFExU25KbVV5NW5ORTFPUmsxU1VuVXpVVEZCYUVzM1dFVjVUMEkwT0E9PSJ9.JQdyD-E09tFrYHmmTkDs0zkZpmQbSvXgaPt4OpiCNKXwm8gkLzEIc2SEzotZivuJxxv-mS9BSfhJjhChW_VWaqLjomVlLTE0f1R0870IgiOq8rzGfotzbLBAHK4n-5ThpyOtwG2oF6qf_Jge5YBh_6_QvLaMGvPiQK-s3ORyR4gLAaD4hg-U9uR5FiOwiJijEkHlLFvzidlS8gseOF4_DzGUVe5zUUqmkscRbHVitotCfCbjKaHiTJgdjx0NZX8o8DzkFeNeFYEyxJVveJZlOGGegTehiaDP49tlMUPbHCPsSszmDVmEK4lyi96cwZb8T2vjJwUizjxcq1bWqF1f7Q',
    baseUrl: 'https://api.staging.script-runner.com',

};

export function getTodaysDate() {
    const date = new Date();
    const year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + date;
    }

    const deliveryDate = `${year}-${month}-${day}`;
    return deliveryDate;
}

export const expectedSchemas = [

    {
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

    {
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

    {
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

    {
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

    {
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

    {
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

];

export const expectedErrorSchemas = [

    {
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

    {
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

    {
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

    {
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

    {
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

    {
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

    {
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

];