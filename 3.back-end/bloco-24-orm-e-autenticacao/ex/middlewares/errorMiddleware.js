module.exports = (_err, _req, res, _next) => {
  return res.status(500).json({ message: `Algo deu errado` });
};