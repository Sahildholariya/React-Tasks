/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleDelete = (u) => {
    let deleteItem = confirm("Are You Sure want To Delete This User");

    if (deleteItem) {
      fetch(`http://localhost:4000/users/${u.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers(users.filter((user) => user.id !== u.id));
        });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className="text-center">Welcome to my website</h1>

            <div>
              <Link to="/adduser" className="btn btn-warning my-3">
                Add
              </Link>
            </div>

            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Country</th>
                  <th>Actions</th>
                  {/* <th>Actions</th> */}
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user,index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.country}</td>
                    <td>
                      <Link to={`/view/${user.id}`} className="btn btn-info">
                        View
                      </Link>
                    </td>
                    {/* <td>
                      <Link
                        to={`/edit/${user.id}`}
                        className="btn btn-success mx-2"
                      >
                        Edit
                      </Link>
                    </td> */}
                    <td>
                      <Link
                        onClick={() => {
                          handleDelete(user);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
Home;
