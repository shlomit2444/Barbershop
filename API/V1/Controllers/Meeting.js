
//פונקציות של הפגישות

const Meeting = require('../models/Meeting');

exports.findAll = function(req, res) {
    Meeting.findAll(function(err, meeting) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', meeting);
    res.send(meeting);
  });
};


exports.create = function(req, res) {
    const new_meeting = new Meeting(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Meeting.create(new_meeting, function(err, meeting) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Meeting added successfully!",data:meeting});
        });
    }
};


exports.findById = function(req, res) {
    Meeting.findById(req.params.id, function(err, meeting) {
        if (err)
        res.send(err);
        res.json(meeting);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Meeting.update(req.params.id, new Meeting(req.body), function(err, meeting) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Meeting successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Meeting.delete( req.params.id, function(err, meeting) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Meeting successfully deleted' });
  });
};