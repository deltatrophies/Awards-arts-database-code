const mongoose = require("mongoose");
const schema = mongoose.schema ;


const dataSchema =  new schema({
    name: {
        type : String , 
        required : true
    },
    data : {
        type : String , 
        required : true
    },
    
    
    
},{})