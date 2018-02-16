var bcrypt = require('bcrypt');

exports.cryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) 
        return reject(err);

      bcrypt.hash(password, salt, (err, hash) => {
        return resolve(hash);
      });
    });
  });
};

exports.comparePassword = (plainPass, hashword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainPass, hashword, (err, isPasswordMatch) => {
      if (err) 
        return reject(err);
      return resolve(isPasswordMatch);
    });
  });
};