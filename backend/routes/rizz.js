// backend/routes/rizz.js
const express = require('express');
const router = express.Router();
const { generateRizz } = require('../controllers/rizzcontroller');

/**
 * @swagger
 * /rizz:
 *   post:
 *     summary: Generate a rizz line using Gemini AI
 *     description: Takes a category and context, and returns a rizz line.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *                 example: funny
 *               context:
 *                 type: string
 *                 example: she said she likes Death Note
 *     responses:
 *       200:
 *         description: Successfully generated rizz
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rizz:
 *                   type: string
 *                   example: You like Death Note? Because you just killed my lonely vibes.
 *       500:
 *         description: Internal server error
 */
router.post('/', generateRizz);

module.exports = router;
