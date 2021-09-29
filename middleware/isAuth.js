const isAuth = (req, res, next) => {
  const date = new Date();

  if (
    date.getHours() >= 9 &&
    date.getHours() <= 17 &&
    date.getDay() > 0 &&
    date.getDay() <= 5
  ) {
    console.log("authorised");
    next();
  } else {
    res
      .status(401)
      .sendFile(__dirname.replace("middleware", "") + "/Public/error.html");
  }
};

module.exports = isAuth;
