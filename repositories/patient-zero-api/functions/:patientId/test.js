module.exports = (req, res, next) => {
  res.send(`test! ${req.params.patientId}`);
};