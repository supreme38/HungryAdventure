const pg = require ('../config/database.js');

module.exports = {
  getProfile(req, res) {
    pg('users').where('email', req.query.email).then((results) => {
      let name = req.query.name,
        email = req.query.email,
        profilePicture = (JSON.parse(req.query.picture)).data.url;

      if (results.length < 1) {
        //create a new users
        pg('users').insert({
          name: name,
          email: email,
          profilePicture: profilePicture,
        }).then((data) => {
          let results = [];
          results.push({ name: name, email: email, profilePicture: profilePicture});
          console.log('Input New User', results);
          res.send(results);
        });
      } else {
        //User exists
        console.log(results);
        res.send(results);
      }
    });
  },
};

