import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector(state => state);
  console.log(contacts);

const dispatch=useDispatch();


const deleteContact=(id)=>{
  dispatch({type:"Delete_contact",payload:id})
  toast.success("Contact deleted Successfully")

}



  return (
    <div className="container">
    
      <div className="row">
        <div className="col">
        <div className=" text-center">
        <Link to="/add" className="btn btn-outline-dark m-5">
          Add Contact
        </Link>
      </div>
      <div >
        <table className="table table-hover">
          <thead className="text-white bg-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((value, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.number}</td>
                <td>
                  <Link to={`/edit/${value.id}`} className="btn btn-small btn-primary  " >Edit</Link>
                  <button type="button" 
                  onClick={()=>deleteContact(value.id)}
                  
                  className="btn btn-small btn-danger mx-3" >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
