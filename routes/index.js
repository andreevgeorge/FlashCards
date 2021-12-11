const express = require('express');
const router = express.Router();
const { Deck } = require('../db/models');
const {topic, alltopics, question, check, createround, stat} = require('../controllers/mainpages')

router.get('/', async (req, res)=>{
  const topics = await Deck.findAll({});
  res.render('homepage', {topics});
})
router.get('/topic/:id', topic);
router.post('/allques/:id', alltopics);
router.post('/oneques', question);
router.post('/check', check);
router.post('/createround', createround);
router.post('/stat', stat);

module.exports = router;






