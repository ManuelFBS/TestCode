const {
  createPasswDb,
  validateUser,
} = require("../controllers/passwController");

const postUserPasswHandler = async (req, res) => {
  const { nick, passw } = req.body;

  try {
    const response = await createPasswDb(nick, passw);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Handler para validación de usuario...
const validateUserPassword = async (req, res) => {
  const { nick, passw } = req.body;
  try {
    const response = await validateUser(nick, passw);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postUserPasswHandler,
  validateUserPassword,
};
