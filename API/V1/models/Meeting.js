'user strict';
var dbConn = require('../../../config');

//Employee object create
    
var Meeting = function(meeting){
    this.IDUtility     = meeting.IDUtility;
    this.IDUser      = meeting.IDUser;
    this.Date          = meeting.Date;
    this.Time          = meeting.Time;

};
Meeting.create = function (newMeet, result) {    
    dbConn.query("INSERT INTO Meetings set ?", newMeet, function (err, res) {
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
    dbConn.query("Select * from Meetings where IDMeeting = ? ", id, function (err, res) {             
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
    dbConn.query("Select * from Meetings", function (err, res) {
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
  dbConn.query("UPDATE Meetings SET IDUtility=?,IDUser=?,Date=?,Time=?,organization=?,designation=?,salary=? WHERE IDMeeting = ?", [Meeting.IDUtility,Meeting.IDUser,Meeting.Date,Meeting.Time,employee.organization,employee.designation,employee.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Meeting.delete = function(id, result){
     dbConn.query("DELETE FROM Meetings WHERE IDMeeting = ?", [id], function (err, res) {
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