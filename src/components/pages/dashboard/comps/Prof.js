import React from "react";
import { useContext } from "react";
import { WhichUserIsLoggedInContext } from "../../../Context";

const Prof = () => {
  const { whichUserLogIn } = useContext(WhichUserIsLoggedInContext);

  return (
    <div className="sub-comp-dash">
      <div className="container-sub-com-dash">
        <h2>Information User</h2>
        <div className="profile-info">
          <div className="row-info">
            <span className="title-info">Username:</span>
            <span className="user-info">{whichUserLogIn.username}</span>
          </div>
          <div className="row-info">
            <span className="title-info">Email:</span>
            <span className="user-info">{whichUserLogIn.email}</span>
          </div>
          <div className="row-info">
            <span className="title-info">Address:</span>
            <ul className="address-list">
              {whichUserLogIn.address?.map((eachAddress, ind) => {
                return <li key={ind}>{eachAddress}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prof;
