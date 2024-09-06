/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = { name, email, phone, country };

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jsonData),
    }).then((res) => {
      if (res) {
        alert("Created...");
        navigate("/");
      }
    });
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center text-start">
          <div className="col-lg-6">
            <h1 className="text-center">Welcome to my website</h1>

            <div>
              <Link to="/" className="btn btn-warning my-3">
                Go Back
              </Link>
            </div>

            <form action="" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="my-2">
                  Name :
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  name=""
                  id=""
                  placeholder="Enter name"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="name" className="my-2">
                  Email :
                </label>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name=""
                  id=""
                  placeholder="Enter Email"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="name" className="my-2">
                  Phone :
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  name=""
                  id=""
                  placeholder="Enter Phone Number"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="name" className="my-2">
                  Country :
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  name=""
                  id=""
                  placeholder="Country"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="SUBMIT"
                  placeholder="Enter"
                  className="btn btn-primary mt-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
