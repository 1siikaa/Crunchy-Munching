const validation = require("../validation/validation");

module.exports = {
  uservalidation: (req, res, next) => {
    const { error } = validation.uservalidation.validate(req.body);
    if (error) {
      return res.status(400).send({ status: false, message: error.message });
    } else next();
  },


  loginvalidation: (req, res, next) => {
    const { error } = validation.loginvalidation.validate(req.body);
    if (error) {
      return res.status(400).send({ status: false, message: error.message });
    } else next();
  },
};
