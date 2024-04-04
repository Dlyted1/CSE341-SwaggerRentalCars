const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;// Id mongo assigns all database entries (primary key)

let err;

const getAll = async (req, res) => {
  // swagger.tags=['employees']
  /*
    #swagger.description = 'Returns all employees in the database.';
    */
  const result = await mongodb.getDb()
    .db()
    .collection('employees')
    .find();
  result.toArray().then((employees) => {
    res.setHeader('Content-Type', "application/json");
    res.status(200).json(employees);
  });
};


const getEmployee = async (req, res) => {
  // swagger.tags=['employees']
  /*
    #swagger.description = 'Returns a employee from the database using the employees ID number';
    */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid employee id.')
  }
  const employeeId = new ObjectId(req.params.id)
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid employee id.')
  }
  const result = await mongodb.getDb().db().collection('employees').find({ _id: employeeId });
  result.toArray().then((employee) => {
    res.setHeader('Content-Type', "application/json");
    res.status(200).json(employee[0]);
  });
};

const createEmployee = async (req, res) => {
  // swagger.tags=['employees']
  const employee_record = {

    empFName: req.body.empFName,
    empLName: req.body.empLName,
    empEmail: req.body.empEmail,
    empPhone: req.body.empPhone,
    empAddress: req.body.empAddress
  }
  const response = await mongodb.getDb().db().collection('employees').insertOne(employee_record)
  if (response.acknowledged) {
    res.status(204).send()
  } else {
    res.status(500).json(response.error || 'An error occured while creating the employee.')
  };

};

const employeeLogin = (req, res) => {
  pass
}

const employeeLogout = (req, res) => {
  pass
}

const updateEmployee = async (req, res) => {
  //pass

  const employeeId = new ObjectId(req.params.id);
  const employee = {

    empFName: req.body.empFName,
    empLName: req.body.empLName,
    empEmail: req.body.empEmail,
    empPhone: req.body.empPhone,
    empAddress: req.body.empAddress



  };
  const response = await mongodb.getDatabase().db().collection('employees').replaceOne({ _id: employeeId }, employee);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  }
  else {
    res.status(500).json(response.error || 'Some error occured while updating the employee information');

  }



};



const deleteEmployee = async (req, res) => {
  //pass

  const employeeId = new ObjectId(req.params.id);
  const result = await mongodb.getDatabase().db().collection('employees').deleteOne({ _id: employeeId });
  if (response.deleteCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occured while deleting employee information.');
  }



};


module.exports = {
  getAll,
  getEmployee,
  employeeLogin,
  employeeLogout,
  createEmployee,
  updateEmployee,
  deleteEmployee
}
