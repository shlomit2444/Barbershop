const Utility = require('../models/Utility');

exports.findAll = function(req, res) {
    Utility.findAll(function(err, utility) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', utility);
    res.send(utility);
  });
};


exports.create = function(req, res) {
    const new_utility = new Utility(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Utility.create(new_utility, function(err, utility) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Utility added successfully!",data:utility});
        });
    }
};


exports.findById = function(req, res) {
    Utility.findById(req.params.id, function(err, utility) {
        if (err)
        res.send(err);
        res.json(utility);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Utility.update(req.params.id, new Utility(req.body), function(err, utility) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Utility successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Utility.delete( req.params.id, function(err, utility) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Utility successfully deleted' });
  });
};