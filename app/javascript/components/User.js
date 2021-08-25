import React from "react";

  const User = (props) => {
    return (
      <div style={{ border: "1px solid", margin: "40px" }}>
        <p>{props.user.name}</p>
        <p>{props.user.last_name}</p>
        <p>{props.user.age}</p>
        <p>{props.user.phone}</p>
        <p>{props.user.email}</p>
        <p>{props.user.dob}</p>
        <p>{props.user.address}</p>
      </div>
    );
  };


export default User;

