import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const details = useSelector((state) => state);
  const dispatch=useDispatch();
  // console.log(details);
  const history=useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkName = details.find((detail) =>
     detail.name === name && name);


     
    const checkMail = details.find((detail) =>
    detail.email === email && email);
    // console.log(checkMail);

    const checkNumber = details.find(
      (detail) => detail.number ===  parseInt(number));

    if (checkMail) {
      return toast.error("This email already Exist");
    }

    if (checkName) {
      return toast.error("This name already exist");
    }
    if (checkNumber) {
      return toast.error("This number already exist");
    }

    if (!name || !email || !number) {
      return toast.warning("Please fill in all details");
    }

    const data={
      id:details[details.length-1].id+1,
      name,
      email,
      number
      
    }
    dispatch({type:"ADD_Contact",payload:data});
    toast.success("Student added Successfully")
    history.push('/');


    console.log(data)
  };

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col">
      <div>
      <h1 className="display-3 my-5 text-center">Add Students</h1>
    </div>
    <div className="row">
      <div className=" shadow mx-auto p-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group ">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group pt-2">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group pt-2">
            <input
              type="number"
              placeholder="Phone Number"
              className="form-control"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <input
              type="submit"
              className="btn btn-block btn-dark btn-lg"
              value="Add Student"
            />
            <Link to="/" className="btn btn-outline-dark">
              {" "}
              To Home
            </Link>
          </div>
        </form>
      </div>
    </div>
      </div>
    </div>
    </div>
  );
};

export default AddContact;
