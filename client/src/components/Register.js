import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  
  //getting user data
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
    console.log(e);
  };

  //sending data to server
  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("invalid transcition");
      console.log("invalid tranction");
    } else {
      window.alert("Transcition sucessfull");
      console.log("Transaction sucess");
      navigate("/login");
    }
  };
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
console.log(user.email);
  return (
    <>
      <div className="justify-content-center">
        <section className="vh-100" styles="background-color: #eee;">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" styles="border-radius: 25px;">
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                name="name"
                                autoComplete="off"
                                id="form3Example1c"
                                className="form-control"
                                value={user.name}
                                onChange={handleInput}
                              />
                              <label
                                className="form-label"
                                htmlfor="form3Example1c"
                              >
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                name="email"
                                autoComplete="off"
                                id="form3Example3c"
                                className="form-control"
                                value={user.email}
                                onChange={handleInput}
                              />
                              <label
                                className="form-label"
                                htmlfor="form3Example3c"
                              >
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa fa-phone fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="tel"
                                name="phone"
                                autoComplete="off"
                                id="form4Example3c"
                                className="form-control"
                                value={user.phone}
                                onChange={handleInput}
                                title="Please enter exactly 10 digits"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                maxLength={10}
                              />
                              <label
                                className="form-label"
                                htmlfor="form4Example3c"
                              >
                                Phone number
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                name="password"
                                autoComplete="off"
                                id="form5Example4c"
                                className="form-control"
                                value={user.password}
                                onChange={handleInput}
                              />
                              <label
                                className="form-label"
                                htmlfor="form5Example4c"
                              >
                                Password
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                name="cpassword"
                                autoComplete="off"
                                id="form4Example4cd"
                                className="form-control"
                                value={user.cpassword}
                                onChange={handleInput}
                              />
                              <label
                                className="form-label"
                                htmlfor="form4Example4cd"
                              >
                                Confirm password
                              </label>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name=""
                              id="form2Example3c"
                            />
                            <label
                              className="form-check-label"
                              htmlfor="form2Example3"
                            >
                              I agree all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              onClick={postData}
                            >
                              Register
                            </button>
                          </div>

                        
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
