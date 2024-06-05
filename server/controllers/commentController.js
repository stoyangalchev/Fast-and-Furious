const { commentModel } = require('../models/Comment');
const { errorHandler } = require("../utils/errorHandler");

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const comments = await commentModel.find({}).lean();
    res.status(200).json(comments)
  } catch (error) {
    errorHandler(error, res, req);
  }
})

router.post('/', async(req, res) => {
  const data  = req.body;
    try {
        await commentModel.create(data);
        res.status(200).json(data);
    } catch (error) {
        errorHandler(error, res, req);
    }
})

module.exports = router;
/*const createComment = async (req, res) => {
    const data  = req.body;
    try {
        await commentModel.create(data);
        res.status(200).json(data);
    } catch (error) {
        errorHandler(error, res, req);
    }
}

const getComments = async (req, res) => {
  try {
    const comments = await commentModel.find({}).lean();
    res.status(200).json(comments)
  } catch (error) {
    errorHandler(error, res, req);
  }
}
module.exports = {
    createComment,
    getComments
}*/