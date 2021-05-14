import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">ID</th>
      <th scope="col">First Name  <button onClick={props.sortFirst}>Sort</button></th>
      <th scope="col">Last Name  <button onClick={props.sortLast}>Sort</button></th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {props.users.map((user, index) => (
          <tr>
          <td><img alt = "User Thumbnail" src = {user.picture.thumbnail}></img></td>
          <th scope="row">{index + 1}</th>
          <td>{user.name.first}</td>
          <td>{user.name.last}</td>
          <td>{user.cell}</td>
          <td>{user.email}</td>
        </tr>
        ))}
  </tbody>
</table>
  );
}

export default Table;
