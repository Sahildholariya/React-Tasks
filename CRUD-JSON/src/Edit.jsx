/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { edit } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = { name, email, phone, country };

    fetch(`http://localhost:4000/users/${edit}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((res) => {
        if (res) {
          alert("Updated...");
          navigate("/");
        }
      })
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/users/${edit}`)
        const data = await response.json();
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setCountry(data.country);
        }
        fetchData();
  }, []);
  
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center text-start">
          <div className="col-lg-6">
            <h1 className="text-center">Welcome to my website</h1>

            <div className="d-flex justify-content-between">
              <Link to={`/view/${edit}`} className="btn btn-warning my-3">
                Go Back
              </Link>
              <Link to="/" className="btn btn-info my-3">
                Back to Home
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
                  value={name}
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
                  value={email}
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
                  value={phone}
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
                  value={country}
                  name=""
                  id=""
                  placeholder="Country"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="UPDATE"
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

export default Edit;
