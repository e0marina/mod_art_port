const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const expiration = '2h';

module.exports = {
  signToken: function ({ email, id }) {
    const payload = { email, id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
