const Employee = require('../models/empModel');

exports.fetchAll = async () => {
  return await Employee.find();
};

exports.create = async (payload) => {
  if (!payload.name || !payload.email || !payload.position) {
    throw new Error('All fields are required');
  }

  const emp = new Employee(payload);
  return await emp.save();
};
