const { subscriptionModel } = require("../models/Subscription");
const { errorHandler } = require("../utils/errorHandler");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const { email, userId, isSubscribed } = req.body;

  try {
    const existingSubscription = await subscriptionModel.findOne({
      user: userId,
    });

    if (existingSubscription) {
      return res.status(409).json({
        message: "You are already subscribed ",
      });
    }

    await subscriptionModel.create({
      email,
      user: userId,
      isSubscribed: isSubscribed,
    });
    res.status(200).json({
      message: "Subscription created successfully",
      email,
    });
  } catch (error) {
    errorHandler(error, res, req);
  }
});

router.get("/check/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const existingSubscription = await subscriptionModel.findOne({
      user: userId,
    });
    if (existingSubscription) {
      return res.status(200).json({
        isSubscribed: true,
      });
    } else {
      return res.status(200).json({
        isSubscribed: false,
      });
    }
  } catch (error) {
    errorHandler(error, res, req);
  }
});

module.exports = router;
