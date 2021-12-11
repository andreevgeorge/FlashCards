const { Deck, Card, Round, Guess, sequelize } = require('../db/models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.topic = async (req, res)=>{
let name = await Deck.findOne({attributes: ['topic'], where: {
  id: req.params.id
}})
  res.render('flashcard', {topic: name.dataValues.topic})
}

exports.alltopics = async (req, res)=>{
  let result = await Card.findAll({attributes: ['id'], where: {
    deck_id: req.params.id
  }});
  res.json(result);
}

exports.question = async (req, res)=>{
  let result = await Card.findOne({attributes: ['question'], where: {
    id: req.body.id
  }})
  res.json(result.dataValues);
}

exports.createround = async (req, res)=>{
  let round = await Round.create({deck_id: req.body.id});
  //console.log('round', round)
  res.json(round.dataValues.id);
}

exports.check = async (req, res)=>{
  // console.log(req.body.answer)
  // console.log(req.body.currentQuestionId)
  let rigthAnswer = await Card.findOne({attributes: ['answer'], where: {
    id: req.body.currentQuestionId.id
  }})
  let statusOfAnswer;
  if(rigthAnswer.dataValues.answer.toLowerCase() === req.body.answer.toLowerCase()) {
    statusOfAnswer = true;
  } else {
    statusOfAnswer = false;
  }
  let tryFirst;
  if(statusOfAnswer && req.body.currentQuestionId.countTry === 1){
    tryFirst = true;
  } else {
    tryFirst = false;
  }
  let guess = await Guess.create({round_id: req.body.round, card_id: req.body.currentQuestionId.id, status: statusOfAnswer, firstTry: tryFirst});
  res.json(guess.dataValues.status);
}

exports.stat = async (req, res)=> {
  let result = {};
  let attempts = await Guess.count({where: {round_id: { [Op.eq]: req.body.idRound}}});
  result.attemptsCount = attempts;
  let firstAttempts = await Guess.count({where: {round_id: { [Op.eq]: req.body.idRound}, firstTry: { [Op.eq]: true}}});
  result.firstAttemptsCount = firstAttempts;
  let topic = await Deck.findOne({attributes: ['topic'], where: {
    id: req.body.deckIndex
  }});
  result.topicName = topic.dataValues.topic;
  res.json(result);
}
