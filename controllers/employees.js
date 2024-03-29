const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;// Id mongo assigns all database entries (primary key)


let err;

const getAll = (req, res) => {
  // swagger.tags=['employees']
  /*
    #swagger.description = 'Returns all employees in the database.';
    */
  mongodb
    .getDatabase()
    .db()
    .collection('employees')
    .find()
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      };
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result);
    });
};


const getSingle = (req, res) => {
  // swagger.tags=['employees']
  /*
    #swagger.description = 'Returns a emoployee from the database using the employees ID number';
    */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid employee id.');
  }
  const contactId = new ObjectId(req.params.id);
  mongodb
    .getDatabase()
    .db()
    .collection('employees')
    .find({ _id: contactId })
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      };
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);
    });
};



module.exports = {
  getAll,
  getSingle,
  // createEmployee,
  // updateEmployee,
  // deleteEmployee
}
