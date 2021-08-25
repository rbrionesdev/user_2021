import React from "react";

  const EditUser = (props) => {
    return (
      <div>
        <p>Edit User</p>
        <form action={`/users/${props.user.id}`} method="post">
          <input type="hidden" name="_method" value="patch" />
          <p>Name:</p>
          <input defaultValue={props.user.name} name='user[name]'/>
          <p>Last Name:</p>
          <input defaultValue={props.user.last_name} name='user[last_name]'/>
          <p>Age:</p>
          <input defaultValue={props.user.age} name='user[age]'/>
          <p>Phone:</p>
          <input defaultValue={props.user.phone} name='user[phone]'/>
          <p>Email:</p>
          <input defaultValue={props.user.email} name='user[email]'/>
          <p>DoB:</p>
          <input defaultValue={props.user.dob} name='user[dob]'/>
          <p>Address:</p>
          <input defaultValue={props.user.address} name='user[address]'/>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  };

export default EditUser;