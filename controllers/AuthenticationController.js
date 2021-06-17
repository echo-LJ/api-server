const {User} = require('../models');

module.exports = {
  async register (req, res) {
    try{
      const user = await User.create(req.body);
      console.log(7, user);
      res.send(user.toJSON());
    }catch(err) {
      console.log(10, err);
      res.status(400).send({
        error: 'This email account is already in use.'
      });
    }
    
  }
};