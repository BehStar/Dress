import React from "react";
import { useState, useEffect, useContext, useRef } from "react";
import { CiEdit, CiBookmarkRemove } from "react-icons/ci";
import { WhichUserIsLoggedInContext, UsersContext } from "../../../Context";

const Address = () => {
  const [editToken, setEditToken] = useState(false);
  const [editInd, setEditInd] = useState();
  const txtAddress = useRef();
  const { whichUserLogIn, setWhichUserLogIn } = useContext(
    WhichUserIsLoggedInContext
  );
  const { users, setUsers } = useContext(UsersContext);
  //assign each address to the this variable(add-clearAll)
  const [addAddress, setAddAddress] = useState(() => {
    return whichUserLogIn.address || [];
  });
  //  btn add address in the addAddress state(just line up)
  const addAddressHandler = () => {
    if (txtAddress.current.value !== "") {
      if (editToken) {
        const editAdd = [...addAddress];
        editAdd[editInd] = txtAddress.current.value;
        setAddAddress(editAdd);
      } else {
        setAddAddress([...addAddress, txtAddress.current.value]);
      }
      txtAddress.current.value = "";
      setEditToken(false);
      setEditInd(-1);
    } else {
      alert("Please fill the address");
    }
  };
  // btn clear all addresses in the USERS-CONTEXT
  const clearAllAddressHandler = () => {
    const areUSureClearAll = window.confirm("Are you sure you want to clear");

    const clearAllAddress = users.map((user) => {
      if (areUSureClearAll) {
        setAddAddress([]);
        return { ...user, address: addAddress };
      } else {
        return user;
      }
    });
    setUsers(clearAllAddress);
  };
  //btn edit address
  const editAddressHandler = (ind) => {
    setEditToken(true);
    setEditInd(ind);
    console.log(editToken);
    txtAddress.current.value = addAddress[ind];
  };
  //btn remove address
  const removeAddressHandler = (ind) => {
    const areUSureRemove = window.confirm("Are you sure you want to remove");
    if (areUSureRemove) {
      let newAddress = [...addAddress];
      newAddress.splice(ind, 1);
      setAddAddress(newAddress);
    }
    console.log(addAddress);
  };
  //assign even add address (=== useState) in the WHICHUSERLOGIN-CONTEXT
  useEffect(() => {
    setWhichUserLogIn({ ...whichUserLogIn, address: addAddress });
    const updateUsers = users.map((user) => {
      if (user.id === whichUserLogIn.id) {
        return { ...user, address: addAddress };
      } else {
        return user;
      }
    });
    setUsers(updateUsers);
  }, [addAddress]);
  //USERS-CONTEXT harvaght change shod dar localStorage ham change shavd
  //fek konam useMemo bayad dar ayande estefade shavad
  useEffect(() => {
    localStorage.setItem("USERS", JSON.stringify(users));
  }, [users]);
  return (
    <div className="sub-comp-dash">
      <div className="container-sub-com-dash">
        <div className="address-comp">
          <div className="title-address">
            <h2>Your Address</h2>
          </div>
          <form
            className="add-address-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <textarea
              ref={txtAddress}
              className="address-text"
              placeholder="Enter your address..."
            />
            <div className="btn-group-address">
              <button onClick={() => addAddressHandler()}>Add</button>
              <button onClick={() => clearAllAddressHandler()}>
                Clear All
              </button>
            </div>
          </form>
          <ul className="addresses-list">
            {whichUserLogIn.address.map((eachAddress, ind) => {
              return (
                <li key={ind}>
                  <p>{eachAddress}</p>
                  <div className="icons-address">
                    <CiEdit
                      className="edit"
                      onClick={() => editAddressHandler(ind)}
                    />
                    <CiBookmarkRemove
                      className="close"
                      onClick={() => removeAddressHandler(ind)}
                    />
                  </div>
                </li>
              );
              // });
            })}

            {/* {addAddress.map((eachAdd, ind) => {
              return (
                <li key={ind}>
                  <p>{eachAdd}</p>
                  <div className="icons-address">
                    <CiEdit className="edit" />
                    <CiBookmarkRemove className="close" />
                  </div>
                </li>
              );
            })} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Address;
