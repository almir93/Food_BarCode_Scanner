/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "String": {
        "type": "string"
    },
    "User": {
        "type": "object",
        "properties": {
            "usename": {
                "type": "string"
            },
            "userSession": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "country": {
                "type": "string"
            }
        }
    },
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);
/**
 * Data storage
 */
Apperyio.storage = {
    "scanned_code": new $a.LocalStorage("scanned_code", "String"),
    "objectID": new $a.LocalStorage("objectID", "String"),
    "currentUser": new $a.LocalStorage("currentUser", "User")
};