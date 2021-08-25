import React from "react";

  const NewUser = () => {
    return (
      <div>
        <p>Create a New User</p>
        <form action="/users" method="post">
          <p>Name:</p>
          <input name='user[name]'/>
          <p>Last Name:</p>
          <input name='user[last_name]'/>
          <p>Age:</p>
          <input name='user[age]'/>
          <p>Phone:</p>
          <input name='user[phone]'/>
          <p>Email:</p>
          <input name='user[email]'/>
          <p>DoB:</p>
          <input name='user[dob]'/>
          <p>Address:</p>
          <input name='user[address]'/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  };

export default NewUser;