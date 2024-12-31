import '../App.css';


import React from "react";

export default function UserDetails({ user }) {
  return (
    <div className=" container  mt-5 ">
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">User Details</h5>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      </div>
    </div>
  );
}
