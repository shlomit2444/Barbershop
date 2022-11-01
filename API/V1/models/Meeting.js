var dbConn = require('../../../config');

//Employee object create
    
var Meeting = function(meeting){
    this.IDUtility     = meeting.IDUtility;
    this.IDUser      = meeting.IDUser;
    this.Date          = meeting.Date;
    this.Time          = meeting.Time;
   // this.organization   = meeting.organization;
   // this.designation    = meeting.designation;
   // this.salary         = employee.salary;
   // this.status         = meeting.status ? employee.status : 1;
   // this.created_at     = new Date();
   // this.updated_at     = new Date();
};
Meeting.create = function (newMeet, result) {    
    dbConn.query("INSERT INTO meetings set ?", newMeet, function (err, res) {
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
Meeting.findById = function (id, result) {
    dbConn.query("Select * from meetings where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Meeting.findAll = function (result) {
    dbConn.query("Select * from meetings", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('meetings : ', res);  
            result(null, res);
        }
    });   
};
Meeting.update = function(id, meeting, result){
  dbConn.query("UPDATE meetings SET IDUtility=?,IDUser=?,Date=?,Time=?,organization=?,designation=?,salary=? WHERE id = ?", [Meeting.IDUtility,Meeting.IDUser,Meeting.Date,Meeting.Time,employee.organization,employee.designation,employee.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Meeting.delete = function(id, result){
     dbConn.query("DELETE FROM meetings WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Meeting;