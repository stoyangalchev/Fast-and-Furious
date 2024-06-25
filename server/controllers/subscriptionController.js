const { subscriptionModel } = require("../models/Subscription");
const { errorHandler } = require("../utils/errorHandler");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const { email } = req.body;

  // Extract userId from the request (assuming it's stored in req.userId)
  const userId = req.userId;
  try {
    // Use Mongoose to find a subscription in the Subscription collection that matches the userId
    const existingSubscription = await subscriptionModel.findOne({
      user: userId,
    });

    // If a subscription is found, respond that the user is already subscribed
    if (existingSubscription) {
      return res.status(409).json({
        message: "User is already subscribed",
      });
    }

    
    await subscriptionModel.create(email);
    res.status(200).json({
      message: "Subscription created successfully",
      email,
    });
  } catch (error) {
    errorHandler(error, res, req);
  }
});
module.exports = router;
