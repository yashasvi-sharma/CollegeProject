import { React, useEffect, useState} from "react";
import "../components/about.css";
import { useNavigate } from "react-router-dom";
const About = () => {
  const [userData, setUserData]= useState({})
  
  let navigate = useNavigate();
  const callAboutPage = async () => {
    
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
      });

        const data = await res.json();
        setUserData(data)
      

        console.log(data);
        if (!res.status === 200) {
          const error = new Error (res.error);
          throw error;
        }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
     //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mb-4">Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="card testimonial-card">
              <div
                className="card-up"
                styles="background-color: #9d789b;"
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://image.shutterstock.com/z/stock-vector-businessman-icon-564112600.jpg"
                  alt="."
                  className="rounded-circle img-fluid"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Admin 1</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fas fa-quote-left pe-2"></i>CS Under Graduate from Meerut Institute of Engg. & Tech.
                  Meerut.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="card testimonial-card">
              <div
                className="card-up"
                styles="background-color: #7a81a8;"
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://image.shutterstock.com/z/stock-vector-businessman-icon-564112600.jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Admin 2</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fas fa-quote-left pe-2"></i>CS Under Graduate from Meerut Institute of Engg. & Tech.
                  Meerut            </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-0">
            <div className="card testimonial-card">
              <div
                className="card-up"
                styles="background-color: #dee2e6;"
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://image.shutterstock.com/z/stock-vector-businessman-icon-564112600.jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Admin 3</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fas fa-quote-left pe-2"></i>CS Under Graduate from Meerut Institute of Engg. & Tech.
                  Meerut                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
