const mongoDB = require("../utils/database"); 
const ObjectId = require('mongodb').ObjectId; 
const rootPath = require('../utils/path');


class Shop {
    constructor(){

    }

    save(){        
        
    }

    static fetchAllProductsInShop(pageNumber){
        /** CONNECT TO DB */
        const db = mongoDB.getDb();
        return db.collection('productsInShop').find(
            {
                "pageNumber": pageNumber
            }
        ).toArray();
    }

}


module.exports = Shop;