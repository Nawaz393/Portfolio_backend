const joi =require("joi");


const schema=joi.object().keys({

    userName:joi.string().min(8).max(12).required(),
    password:joi.string().min(8).required(),

})



module.exports=schema;
