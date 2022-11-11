var dbConn = require('../../../config');


var User = function(user){
    this.UserName     = user.UserName;
    this.UserPassword      = user.UserPassword;
    this.UserAdress          = user.UserAdress;
    this.UserPhone          = user.UserPhone;
    this.Gender   = user.Gender;
    this.IDShop    = user.IDShop;
    this.FirstName         = user.FirstName;
    this.LastName         = user.LastName;
    this.Email     = user.Email;
    this.DateOfBorn     = user.DateOfBorn;
};
User.create = function (newUser, result) {    
    dbConn.query("INSERT INTO Users set ?", newUser, function (err, res) {
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
User.findById = function (id, result) {
    dbConn.query("Select * from Users where UserID = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
User.findAll = function (result) {
    dbConn.query("Select * from Users", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('User : ', res);  
            result(null, res);
        }
    });   
};
User.update = function(id, user, result){
  dbConn.query("UPDATE Users SET UserName=?,UserPassword=?,UserPhone=?,Gender=?,IDShop=?,FirstName=?,LastName=?,Email=?,DateOfBorn=? WHERE UserID = ?", [user.UserName,user.UserPassword,user.UserPhone,user.Gender,user.IDShop,user.FirstName,user.LastName,user.Email,user.DateOfBorn ,id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
User.delete = function(id, result){
     dbConn.query("DELETE FROM Users WHERE UserID = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= User;