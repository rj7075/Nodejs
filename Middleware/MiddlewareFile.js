module.exports = reqFilter = (req, resp, next) => {
  //defind here and used in routemiddlware
  if (!req.query.age) {
    resp.send("please Provide Age");
  } else if (req.query.age < 18) {
    resp.send("You can not acess this page please provide valid age");
  } else {
    next();
  }
};
