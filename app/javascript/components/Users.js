import React from "react";

const Users = (props) => {
  return (
    <div>
      <h1>Users List</h1>
      {props.users.map((user) => {
        return (
          <div style={{ border: "1px solid", margin: "20px" }} key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Age: {user.age}</p>
            <p>Phone: {user.phone}</p>
            <p>e-mail: {user.email}</p>
            <p>Date of Birth: {user.dob}</p>
            <p>Address: {user.address}</p>
            <div>
              <a href={`/users/${user.id}`}>Show </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;