/*
 * Security contexts
 */
/*
 * Service settings
 */
var nutrition_db_settings = {
    "database_id": "5eb1ec920f0d3153bb886d72"
}
var UserDB_settings = {
    "database_id": "5ec196130f0d313e6475d9f9"
}
/*
 * Services
 */
var BarcodeService = new Apperyio.BarCodeService({
    'defaultRequest': {
        "data": null
    }
});
var UserDB_login_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/login',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': UserDB_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": null
    }
});
var nutrition_db_usda_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/usda',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': nutrition_db_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});
var UserDB_signup_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': UserDB_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": null
    }
});
var UserDB_UserProfile_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/UserProfile',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': UserDB_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});
var UserDB_UserProfile_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/UserProfile',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': UserDB_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});
var nutrition_db_usda_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/usda',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': nutrition_db_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});
var nutrition_db_usda_batch_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/usda',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': nutrition_db_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": {
            "update": {
                "acl": {
                    "*": {
                        "write": true,
                        "read": true
                    }
                }
            }
        }
    }
});
var nutrition_db_usda_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/usda/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': nutrition_db_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});
var nutrition_db_usda_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/usda/{_id}',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': nutrition_db_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});