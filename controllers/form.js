const User = require("../models/user");

exports.getForm = (req, res, next) => {
  res.render("form.html");
};

exports.getUser = (req, res, next) => {
  User.findAll()
    .then((result) => {
      res.render("users.ejs", {
        users: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postUserData = (req, res, next) => {
  const username = req.body.username;
  const phone = req.body.phone;
  const password = req.body.password;
  User.create({
    username: username,
    phone: phone,
    password: password,
  })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDelete = (req, res, next) => {
  const id = req.params.userId;
  User.findByPk(id)
    .then((user) => {
      return user.destroy();
    })
    .then((msg) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
