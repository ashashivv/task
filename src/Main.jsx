import React from "react";
import map from "../src/images/map.jpg";

const Main = () => {
  return (
    <>
      <div className="container overflow-hidden mt-5 ">
        <div className="row gx-5">
          <div className="col-md-8 col-12">
            <img
              src={map}
              className="img-fluid"
              alt="Map"
              className="map-img"
            />
          </div>
          <div class="col-12 col-md-4">
            <div className="info">
              <div className="address">
                <i class="fas fa-map-marker-alt"></i>
                <h6>Address</h6>
              </div>
              <p>Kawran bazar, dhaka 1230</p>
              <div className="mail">
                <i class="fas fa-envelope"></i>
                <h6>E-Mail</h6>
              </div>
              <p>company@gmail.com</p>
              <p className="your">yourname@gmail.com</p>
              <div className="time">
                <i class="far fa-clock"></i>
                <h6>Office-Time</h6>
              </div>
              <p>Mon-Wed 10:00am - 5:00 pm</p>
              <p>Thu-Sat 12:00pm - 8:00 pm</p>
              <p>Sunday Office Hoilday</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
