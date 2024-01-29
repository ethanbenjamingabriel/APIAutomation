export const scriptrunner = {
    accessToken: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjFzbWVUTW5DRUpIb2p5aU1xUlgwViJ9.eyJodHRwczovL3NjcmlwdHJ1bm5lci5jb20vc3RvcmVfbnVtYmVyIjoic3VyZXNoLXN0b3JlIiwibmlja25hbWUiOiJzdXJlc2giLCJuYW1lIjoic3VyZXNoQHNjcmlwdC1ydW5uZXIuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2M2ODk2NzQ1YmZhMWIwNzVkMDVhMWU3NzNlMzAwZDc4P3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGc3UucG5nIiwidXBkYXRlZF9hdCI6IjIwMjQtMDEtMjZUMTg6Mjg6NTUuMDEyWiIsImVtYWlsIjoic3VyZXNoQHNjcmlwdC1ydW5uZXIuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vc2NyaXB0LXJ1bm5lci51cy5hdXRoMC5jb20vIiwiYXVkIjoiY05lRzNtUjdlbER5TGxtWGxxRG1tSnlNbkZSaDhwbWUiLCJpYXQiOjE3MDYyOTM3NDgsImV4cCI6MTcwNjMyOTc0OCwic3ViIjoiYXV0aDB8NWY2MjQxYzcyOWI4M2YwMDZhMmNjY2IyIiwic2lkIjoiYlZUS1dla2FaRTJqOWZjakNjcDVZSzhwVGx1MGQ1SE0iLCJub25jZSI6IlNFNTVlamRoU0ZadExVdHBNMU50VFhSUU5rTklVVFJNV1dReGJqUlJVV015TVVzME5rWmxRMjFCY3c9PSJ9.Ur4Ru-3PGZ9KN44mROU-Etn0IBQiuJOOrL58RdG6Vo5zSzUg1yG90o3S4Qdi4LXEixFvR4UBI2M_LxMzAbAKNIbDyPMgG1USjQGLqmANMlGdQLf1LTC5Udvmd4IN_JfsPzmdfTYENCKRrL2ZPoet3qkUWw5yrAkEIWOwQ7Pcp99xc_GaueZJdJIgPCTkyq_I8xJ_wAmNa5U7kaXMT2SeZ2oqwVvBygpfhXh1lzGWio_hD3OhXOBNRtG1dEWAGjmoeXM8_Ub_NN9S9FHcMmyjQ-KHvnG1DZFMTVSUcvwwGgFKM9W40PkgcMKrSf-ngPEb_mr-_wGIzKybUzmnn0JH5w',
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