import React from "react";

  const User = (props) => {
    return (
      <div style={{ border: "1px solid", margin: "40px" }}>
        <h1>{props.user.name}</h1>
        <h1>{props.user.last_name}</h1>
        <h1>{props.user.age}</h1>
        <h1>{props.user.phone}</h1>
        <h1>{props.user.email}</h1>
        <h1>{props.user.dob}</h1>
        <h1>{props.user.address}</h1>
        <a href="/">Users</a>
      </div>
    );
  };


export default User;

