import React from "react";

const Errorpage = () => {
  return (
    <div className="">
      <div className="d-flex p-6 justify-content-center align-items-center" id="main">
        <h1 className="mr-3 pr-3 align-top border-right inline-block mt-6">
          404
        </h1>
        <div className="inline-block align-middle">
          <h2 className="font-weight-normal lead" id="desc">
            The page you requested was not found.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
