import React, { Component } from "react";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.sortByFirstName = this.sortByFirstName.bind(this)
    this.sortByLastName = this.sortByLastName.bind(this)
    this.handleSearchChange = this.handleSearchChange(this)
  }

  state = {
    users: [],
    displayedUsers: [],
    keyword: ""
  };


  componentDidMount() {
    API.getUsers().then((results) => {
      console.log(results);

      const userList = results.data.results;

      this.setState({
        users: userList,
        displayedUsers: userList
      })
    });
  }

  sortByFirstName() {

    const userList = this.state.displayedUsers

    userList.sort(function (user1, user2) {
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
      displayedUsers: userList
    })

  }

  sortByLastName() {

    const userList = this.state.displayedUsers

    userList.sort(function (user1, user2) {
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
      displayedUsers: userList
    })

  }


  handleSearchChange(event) {
    this.setState({ keyword: event.target.value})
    let filteredList = filter();

    this.setState({ displayedUsers: filteredList});
  }

  filter() {
    const keyword = this.state.keyword.toLowerCase();
    return this.state.users.filter( user => {
      return (
        user.first.toLowerCase().includes(keyword) || user.last.toLowerCase().includes(keyword)
      )
    })
  }

  render() {
    return (
      <Wrapper>

        <Title />

        <SearchBox onChange={this.handleSearchChange}/>

        <Table users={this.state.displayedUsers} sortFirst={this.sortByFirstName} sortLast={this.sortByLastName} />

      </Wrapper>
    );
  }
}

export default App;
