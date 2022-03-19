import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();
  const history = useHistory();

  const details = useSelector((state) => state);
  const currentContact = details.find((contact) => contact.id === parseInt(id));
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  // console.log(useParams());
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkName = details.find(
      (detail) => detail.id !== parseInt(id) && detail.name === name && name
    );

    const checkNumber = details.find(
      (detail) =>
        detail.id !== parseInt(id) && detail.number === number && number
    );

    const checkEmail = details.find(
      (detail) => detail.id !== parseInt(id) && detail.email === email && email
    );

    if (checkEmail) {
      return toast.error("This email is already Exist");
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

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: "Update_Contact", payload: data });
    toast.success("Student updated Successfully");
    history.push("/");
  };

  return (
    <div className="container mt-5">
     <div className="row">
       <div className="col">
       {currentContact ? (
        <>
          <div>
            <h1 className="display-5 my-4 text-centCer">Edit Students{id}</h1>
          </div>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
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
                    className="btn btn-success "
                    value="Update Student"
                  />

                  <Link to="/" className="btn btn-danger ">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-2 text-centCer">
          StudentContact with id{id} not exist
        </h1>
      )}
       </div>
     </div>
    </div>
  );
};

export default EditContact;
