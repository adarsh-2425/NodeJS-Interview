function dataValidation(req, res, next) {
  const { id, quantity } = req.body;

  if (id < 0 || quantity < 0) {
    return res.status(400).json({error: 'Both should be a positive integer'})
  }

  next();
}

module.exports = dataValidation;
