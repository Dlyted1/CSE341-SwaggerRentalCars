const validator = require('../helpers/validate');

const saveCar = (req, res, next) => {
  const validationRule = {
    carMake: 'required|string',
    carModel: 'required|string',
    carYear: 'required|string',
    carStatus: 'required|string',
    carTag: 'required|string'

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

const saveEmployee = (req, res, next) => {
  const validationRule = {
    empFName: 'required|string',
    empLName: 'required|string',
    empEmail: 'required|email',
    emPhone: 'required|string',
    empAddress: 'required|string'

  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveRenter = (req, res, next) => {
  const validationRule = {
    renterFName: 'required|string',
    renterLName: 'required|string',
    renterEmail: 'required|email',
    renterDate: 'string',
    renterDateOfReturn: 'required|string'

  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveStore = (req, res, next) => {
  const validationRule = {
    storeName: 'required|string',
    storeManager: 'required|string',
    storeState: 'required|string',
    storePhone: 'required|string',
    storeEmail: 'required|email'
    storeCapacity: 'string',
    storeBrandType: 'string'


  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};



module.exports = {
  saveCar,
  saveEmployee,
  saveRenter,
  saveStore

};
