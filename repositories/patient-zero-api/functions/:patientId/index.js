module.exports = (req, res, next) => {
  res.send(`index! ${req.params.patientId}`);
};