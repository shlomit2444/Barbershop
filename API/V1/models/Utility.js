var dbConn = require('../../../config');


//Employee object create
var Utility = function(utility){
    this.DetailUtility     = utility.DetailUtility;
    this.TimeDuringInMin   = utility.TimeDuringInMin;
    this.Price          = utility.Price;
    this.IDShop          = utility.IDShop;
 
};
Utility.create = function (newUtility, result) {    
    dbConn.query("INSERT INTO Utilities set ?", newUtility, function (err, res) {
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
Utility.findById = function (id, result) {
    dbConn.query("Select * from Utilities where IDUtilitiy = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Utility.findAll = function (result) {
    dbConn.query("Select * from Utilities", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Utilities : ', res);  
            result(null, res);
        }
    });   
};
Utility.update = function(id, utility, result){
  dbConn.query("UPDATE Utilities SET DetailUtility=?,TimeDuringInMin=?,Price=?,IDShop=? WHERE IDUtilitiy = ?", [utility.DetailUtility,utility.TimeDuringInMin,utility.Price,utility.IDShop, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Utility.delete = function(id, result){
     dbConn.query("DELETE FROM Utilities WHERE IDUtilitiy = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Utility;