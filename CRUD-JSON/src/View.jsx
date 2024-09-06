/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-lg">
              <div className="card-header bg-primary text-white text-center">
                <h1>User Profile</h1>
              </div>
              <div className="card-body">
                <h2 className="card-title text-center mb-4">{data.name}</h2>

                <div className="d-flex flex-column align-items-center">
                  <h4 className="mb-3">
                    <i className="bi bi-envelope"></i> Email: {data.email}
                  </h4>
                  <h4 className="mb-3">
                    <i className="bi bi-telephone"></i> Phone: {data.phone}
                  </h4>
                  <h4 className="mb-3">
                    <i className="bi bi-geo-alt"></i> Country: {data.country}
                  </h4>
                </div>
              </div>
              <div className="card-footer text-center">
                <Link to="/" className="btn btn-warning">
                  Go Back
                </Link>
                <Link to={`/edit/${id}`} className="btn btn-success mx-2">
                  Update Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
