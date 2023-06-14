import React from "react";
import "./Cards.css";
import moreAction from "../img/more-action.png";
function Cards() {
  return (
    <div>
      {" "}
      <div className="card shadow-sm">
        <div className="card-body px-2">
          <div className="row">
            <div className="col-6 d-flex">
              <img className="p-2 post-profile-pic" alt="profile pic" src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
              <div className="mt-2">
                <p className="fs-6 fw-bold">Title</p>
                <p className="location">Description</p>
              </div></div>
            <div className="col-6 ">
              <img alt="More Actions" className="float-end fs-3 p-2 mt-2" src={moreAction} />


            </div>
          </div>
          <div className="row">
            <div className="col-12"><img src="https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Winter Image" style={{borderRadius:"15px"}} className="img-fluid p-2" /></div>
          </div>
          <div className="row my-3">
            <div className="col-6 d-flex "><i class=" ps-2 fs-4 fa-regular fa-heart"></i>
            <i class="ps-3 fs-4 fa-regular fa-comment"></i>
            <i class="ps-3 fs-4 fa-solid fa-location-arrow"></i>
            </div>
            <div className="col-6"><span className="float-end fs-6 fw-bold pe-2">200 Likes</span></div>
          </div>
          <div className="row">
            <div className="col-12"><span className="text-muted">2 Hours Ago</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
