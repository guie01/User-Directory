import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API";

class App extends Component {
  constructor(props) {
    super(props);
    this.sortByFirstName = this.sortByFirstName.bind(this)
    this.sortByLastName = this.sortByLastName.bind(this)
  }
  // Setting this.state.friends to the friends json array
  state = {
    users: []
  };


  componentDidMount(){
    API.getUsers().then((results) => {
      console.log(results);

      const userList = results.data.results;

      this.setState({
        users: userList
      })
    });
  }

  sortByFirstName() {

    const userList = this.state.users

    userList.sort(function(user1, user2) {
      if (user1.name.first < user2.name.first) {
        return -1;
      }
      if (user1.name.first > user2.name.first) {
        return 1;
      }
    
      // names must be equal
      return 0;
      });

      this.setState({
        users: userList
      })

  }

  sortByLastName() {

    const userList = this.state.users

    userList.sort(function(user1, user2) {
      if (user1.name.last < user2.name.last) {
        return -1;
      }
      if (user1.name.last > user2.name.last) {
        return 1;
      }
    
      // names must be equal
      return 0;
      });

      this.setState({
        users: userList
      })

  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title></Title>
        
      <FriendCard users = {this.state.users} sortFirst = {this.sortByFirstName} sortLast = {this.sortByLastName}/>
      </Wrapper>
    );
  }
}

export default App;
