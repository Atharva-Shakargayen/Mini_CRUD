const empService = require('../services/empService');

exports.getAllEmployees = async (req, res) => {
  const data = await empService.fetchAll();
  res.json(data);
};

exports.createEmployee = async (req, res) => {
  try {
    const emp = await empService.create(req.body);
    res.status(201).json(emp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
