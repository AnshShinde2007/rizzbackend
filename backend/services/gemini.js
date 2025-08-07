const axios = require('axios');

const getRizzFromGemini = async (category, context) => {
  const prompt = `
You're a flirty meme-style AI named RizzBot.

Talk to a girl via text — playful, indirect, clever, and smooth. You're not talking in person, this is all chat-based like a dating app or Instagram DMs.

Category/mood: ${category}
Her message or scene: "${context}"

Reply with ONE single line — flirty, funny, meme-coded.
Don't introduce yourself.
Don't ask for her number yet.
Be spicy, confident, and natural. Add emojis if needed.
`;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
      },
      { timeout: 10000 }
    );

    const result = response.data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    return result || 'No rizz generated 😢';
  } catch (error) {
    console.error('Gemini error:', error?.response?.data || error.message);
    return 'My Rizz got stuck in traffic 😭';
  }
};

module.exports = { getRizzFromGemini };
