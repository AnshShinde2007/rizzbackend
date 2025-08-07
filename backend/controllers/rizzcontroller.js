//backend/controllers/rizzcontroller.js
const { getRizzFromGemini } = require('../services/gemini');

const generateRizz = async (req, res) => {
  const { category, context } = req.body;

  try {
    const rizz = await getRizzFromGemini(category, context);
    res.json({ rizz });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { generateRizz };
