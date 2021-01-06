const User = require("../models/user");
module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json(users);
  },
  newUser: async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();

    // lo respondemos
    res.status(200).json(user);
  },
  getUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);

    // Respuesta
    res.status(200).json(user);
  },
  replaceUser: async (req, res, next) => {
    const {userId} = req.params;
    const newUser = req.body;

    // consultamos para remplazar
    const oldUser = await User.findOneAndUpdate(userId, newUser)

    // respondemos 
    res.status(200).json(true)
  },
  updateUser: async(req,res,next)=>{
    const {userId} = req.params;
    const newUser = req.body

    // consultamos para actualizar
    const oldUser = await User.findByIdAndUpdate(userId, newUser)
  }
};
