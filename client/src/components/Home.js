import React, {useState, useEffect}from "react";

const Home =  () => {
  const [userName,setUserName]= useState('')
  const userHomePage = async () => {
    
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

        const data = await res.json();
        setUserName(data.name)
        console.log(data);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
     //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <div>
      <section class="vh-200" styles="background-color: #eee;">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-9 col-xl-7">
              <div class="card" styles="border-radius: 25px;">
                <div class="card-body p-5">
                  <div class="text-center mb-4 pb-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-quotes/bulb.png"
                      alt="Bulb"
                      width="100"
                    />
                    <div  class="lead font-italic">Welcome!!!    <span className="h5 ">{userName}</span></div>
                  </div>

                  <figure class="text-center mb-0">
                  <h4 class="display-6">Our Mission</h4>
                    <blockquote class="blockquote">
                      <p class="pb-3">
                        <i class="fas fa-quote-left fa-xs text-primary"></i> <>
                        <span class="lead font-italic">
                        Many people living in extreme poverty live in India.<br></br>
                        It is difficult for poor or low-income people to pay for their medication and health care.
                         As a result, they live in various diseases and as a result the number of deaths increases daily. 
                         On the other hand, there are a number of people who are overdosing on drugs even after they have stopped taking medication.
                          Here, we have set up a website for donating medicines to NGO’s.
                           This program will help people to donate their unused medicines to NGO’s and NGO’s can distribute them to people who need them.
                            This site will help reduce the cost of national health services by making better use of unused drugs and helping poor or low-income people to get better health care. The site was also assisted in assessing the availability of essential medicines for nearby NGO’s
                         
                         
                         
                         
                         
                        
                        </span>
                        <i class="fas fa-quote-right fa-xs text-primary"></i></>
                      </p>
                    </blockquote>
                    <figcaption class="blockquote-footer mb-0">
                      Team Divya kiran
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
