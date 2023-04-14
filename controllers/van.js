var van = require('../models/van');
// List of all vans

 //res.send('NOT IMPLEMENTED: van list');
 // List of all vans
exports.van_list = async function(req, res) {
    try{
    thevans = await van.find();
    res.send(thevans);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// for a specific van.
exports.van_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: van detail: ' + req.params.id);
};
// Handle van create on POST.

 //res.send('NOT IMPLEMENTED: van create POST');
 // Handle van create on POST.
exports.van_create_post = async function(req, res) {
    console.log(req.body)
    let document = new van();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"van_type":"goat", "cost":12, "size":"large"}
    document.van_color = req.body.van_color;
    document.van_size = req.body.van_size;
    document.van_cost = req.body.van_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// Handle van delete form on DELETE.
exports.van_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: van delete DELETE ' + req.params.id);
};
// Handle van update form on PUT.
exports.van_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: van update PUT' + req.params.id);
};


// VIEWS
// Handle a show all view
exports.van_view_all_Page = async function(req, res) {
    try{
    thevans = await van.find();
    res.render('van', { title: 'van Search Results', results: thevans });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };