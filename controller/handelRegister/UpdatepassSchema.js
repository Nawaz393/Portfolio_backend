const joi=require('joi');
const UpdatepassSchema=joi.object().keys({
    userName:joi.string().min(4).required(),
    password:joi.string().min(8).required(),
npassword:joi.string().min(8).required(),
})

module.exports=UpdatepassSchema;
