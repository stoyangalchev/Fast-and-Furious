const { carModel } = require("./../models/Car");
const { errorHandler } = require("../utils/errorHandler");
const {ValidationError} = require("../utils/createValidationError") 

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const cars = await carModel.find({}).lean();
    res.status(200).json(cars);
  } catch (err) {
    errorHandler(err, res, req);
  }
})

router.post('/', async (req, res) => {
  const data = req.body;
  try {
   await carModel.create(data);
    res.status(200).json(data);
  } catch (error) {
    return errorHandler(error, res, req);
  }
})

router.get('/:carId', async (req, res) => {
  const { carId } = req.params;
  try {
    const car = await carModel.findById(carId);
    if (!car) {
      throw new ValidationError("There is no such car in our database!");
    }
    res.status(200).json({ car: car.toObject() });
  } catch (error) {
    errorHandler(error, res, req);
  }
})

router.put('/:carId', async (req, res) => {
  const { carId } = req.params;
  const data = req.body;
  try {
    const car = await carModel.findByIdAndUpdate(carId, data, {runValidators: true, new: true})
    res.status(200).json({car: car.toObject()});
  } catch (error) {
    errorHandler(error, res, req)
  }
})

router.delete('/:carId', async (req, res) => {
  const {carId} = req.params;

  try {
    await carModel.findByIdAndDelete(carId);
    res.status(200).json({carId});
  } catch (error) {
    errorHandler(error, req, req)
  }
})

router.patch('/:carId', async (req, res) => {
  const { carId } = req.params;
  const {userId, likes, likedBy} = req.body;

  try {
    const car = await carModel.findById(carId);
    car.likes = likes;
    if(car.likedBy.includes(userId)){
      throw new ValidationError('You have liked this car already!')
    }
    car.likedBy.push(likedBy);
    const updatedcar = await carModel.findByIdAndUpdate(carId, car)
    res.status(200).json({updatedcar: updatedcar.toObject()});
  } catch (error) {
    errorHandler(error, res, req)
  }
})

module.exports = router;


