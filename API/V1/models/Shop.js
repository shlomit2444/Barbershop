var dbConn = require('../../../config');

//Employee object create
var Shop = function(shop){
    this.NameShop     = shop.NameShop;
    this.Adress      = shop.Adress;
    this.City          = shop.City;
    this.Phone          = shop.Phone;

};
Shop.create = function (newShop, result) {    
    dbConn.query("INSERT INTO Shops set ?", newShop, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Shop.findById = function (id, result) {
    dbConn.query("Select * from Shops where IDShop = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Shop.findAll = function (result) {
    dbConn.query("Select * from Shops", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Shops : ', res);  
            result(null, res);
        }
    });   
};
Shop.update = function(id, shop, result){
  dbConn.query("UPDATE Shops SET NameShop=?,Adress=?,City=?,Phone=? WHERE IDShop = ?", [shop.NameShop,shop.Adress,shop.City,employee.Phone, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Shop.delete = function(id, result){
     dbConn.query("DELETE FROM Shops WHERE IDShop = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Shop;