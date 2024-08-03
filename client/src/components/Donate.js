import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/donate.css";

const Donate = () => {
  const [donerData, setdonerData] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });
  let name, value;
  const inputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setdonerData({ ...donerData, [name]: value });
  };


// sending data to server
  const postData = async (e) => {
    e.preventDefault();

    const { fname, lname, address, city, state, zip,  email, phone} = donerData;
    const res = await fetch("/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        address,
        city,
        state,
        zip,
        email,
        phone
      }),
    });

  }
  return (
    <>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col">
            <div className="card my-4 shadow-3">
              <div className="row g-0">
              <form method="POST">
                <div className="col-xl-6 d-xl-block bg-image">
                  <img
                    src="https://mdbootstrap.com/img/Others/extended-example/delivery.jpg"
                    alt="Sample photo"
                    className="img-fluid"
                  />
                </div>

                
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-4 text-uppercase">Doner Info</h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="fname"
                            id="form3Example1m"
                            className="form-control form-control-lg"
                            value={donerData.fname}
                            onChange={inputs}
                          />
                          <label className="form-label" for="form3Example1m">
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="lname"
                            id="form3Example1n"
                            className="form-control form-control-lg"
                            value={donerData.lname}
                            onChange={inputs}
                          />
                          <label className="form-label" for="form3Example1n">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="address"
                        id="form3Example8"
                        className="form-control form-control-lg"
                        value={donerData.address}
                        onChange={inputs}
                      />
                      <label className="form-label" for="form3Example8">
                        Address
                      </label>
                    </div>

                    <div className="row">
                      <div
                        className="col-md-6 mb-4"
                        value={donerData.state}
                        onChange={inputs}
                      >
                        <select className="select" name="state">
                          <option value="1">State</option>
                          <option value="UP">Uttar-Pradesh</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div
                        className="col-md-6 mb-4"
                        value={donerData.city}
                        onChange={inputs}
                      >
                        <select className="select" name="city">
                          <option value="1">City</option>
                          <option value="Meerut">Meerut</option>
                          <option value="Modinagar">Modinagar</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        name="zip"
                        type="text"
                        id="form3Example3"
                        className="form-control form-control-lg"
                        value={donerData.zip}
                        onChange={inputs}
                      />
                      <label className="form-label" for="form3Example3">
                        Zip
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        name="email"
                        type="text"
                        id="form3Example2"
                        className="form-control form-control-lg"
                        value={donerData.email}
                        onChange={inputs}
                      />
                      <label className="form-label" for="form3Example2">
                        Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        name="phone"
                        type="phonenumber"
                        id="form3Example2"
                        className="form-control form-control-lg"
                        value={donerData.phone}
                        onChange={inputs}
                      />
                      <label className="form-label" for="form3Example2">
                        Phone Number
                      </label>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button
                        type="button"
                        className="btn btn-success btn-lg ms-2"
                        styles="background-color:hsl(210, 100%, 50%) "
                        onClick={postData}
                      >
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
