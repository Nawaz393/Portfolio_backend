const joi = require("joi");
const schema=joi.object().keys({
name:joi.string().required(),
image1:joi.string(),
image2:joi.string(),
image3:joi.string(),

});


module.exports=schema;
