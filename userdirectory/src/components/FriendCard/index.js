import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">ID</th>
      <th scope="col">First Name  <button onClick={props.sortFirst}>Sort</button></th>
      <th scope="col">Last Name</th>
    </tr>
  </thead>
  <tbody>
    {props.users.map((user, index) => (
          <tr>
          <td><img src = {user.picture.thumbnail}></img></td>
          <th scope="row">{index + 1}</th>
          <td>{user.name.first}</td>
          <td>{user.name.last}</td>
        </tr>
        ))}
  </tbody>
</table>
  );
}

export default FriendCard;
