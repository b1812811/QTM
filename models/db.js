const mongoose = require('mongoose');
const url = "mongodb+srv://b1812811:b1812811@cluster0.nkmt6.mongodb.net/EmployeeDB";

mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./employee.model');
