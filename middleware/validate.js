const validator = require('../helpers/validate');

const saveCar = (req, res, next) => {
  const validationRule = {


  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next()
    };
  });
};

module.exports = {
  saveCar
};