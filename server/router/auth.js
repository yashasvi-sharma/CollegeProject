const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Authenticate = require("../middleware/Authenticate");

require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("hello world from router");
});

//Register router

router.post("/register", async (req, res) => {
  const { name, phone, email, password, cpassword } = req.body;
  if (!name || !email || !phone || phone<10|| !password || !cpassword) {
    return res
      .status(422)
      .json({ err: "Please enter all the required fields" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(441).json({ err: `email already exist` });
    }
    const user = new User({ name, phone, email, password, cpassword });
    await user.save();
    const sendEmail = async (e) => {
      console.log("inside SendEmail");
      e.preventDefault();
      emailjs
        .sendForm(
          "service_flwl90h",
          e.target.user.email,
          "user_GKpKzmCq1SzA1wL30R4FA"
        )
  
        .then(
          (user) => {
            console.log(user);
          },
          (error) => {
            console.log(error);
          }
        );
      console.log("done");
    };
    res.status(221).json({ message: `register sucessfully` });
  } catch (err) {
    console.log("outfrom there");
  }
});

//Login router

router.post("/login", async (req, res) => {
  let token;
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: `please enter the login creditials` });
  }

  const userLogin = await User.findOne({ email: email }); //email and password verify
  if (userLogin) {
    const isMatch = await bcrypt.compare(password, userLogin.password); //matching hashed password which user entered
    token = await userLogin.generateAuthToken();
    res.cookie(" newtoken", token),
      {
        expires: new Date(Date.now() + 258920000), //expiry time(1month) from now in milisecs
        httpOnly: true, //http also allow
      };
    if (!isMatch) {
      res.json({ error: `invalid password!!...fails` });
    } else {
      res.json({ message: `login sucessfully` });
    }
  } else {
    res.status(400).json({ error: `Invalid login-id` });
  }
});

//donate route
router.get("/donate", Authenticate, (req, res) => {
  const { fname, lname, address, city, state, zip,  email, phone} = req.body;
  console.log("hello!! from donate");
  //res.send(req.donerData);
});

//about route
router.get("/about", Authenticate, (req, res) => {
  console.log("hellow from about");
  res.send(req.rootUser);
});


//home and about
router.get("/getdata", Authenticate, (req, res) => {
  console.log("hellow from getdata");
  res.send(req.rootUser);
});

//logout route
router.get("/logout", (req, res) => {
  res.clearCookie("newtoken", { path: "/" });
  //res.redirect('/')
  console.log("cokkies deleetd");
  res.status(200).send("user logout sucessfully");
});

//

module.exports = router;
