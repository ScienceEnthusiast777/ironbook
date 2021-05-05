import React from "react";
import "./App.css";
import usersDB from "./users";

const usersData = JSON.parse(JSON.stringify(usersDB));

class App extends React.Component {
  state = {
    users: usersData,
    search: "",
  };

  searchHandler = (event) => {
    var target = event.target.value.toLowerCase();
    this.setState({
      search: target.replace(/ /g, ""),
    });
    
    console.log(this.state.search);
  };

  submitHandler = (event) => {
    event.preventDefault();
    // var target = event.target.value.toLowerCase();
    // this.setState({
    //   search: target
    // });
    // console.log(this.state.search)
    const dataCopy = JSON.parse(JSON.stringify(usersData));
    // const searchResult = [];
    const searchResult = dataCopy.filter(user=>{
      return user.firstName.toLowerCase().includes(this.state.search.toLocaleLowerCase())
    })

    // for (let i = 0; i < dataCopy.length; i++) {
    //   if (dataCopy[i].firstName.includes(String(this.state.search))) {
    //     searchResult.push(dataCopy[i]);
    //   }
    // }
    console.log('this',searchResult)
    this.setState({
      users : searchResult
    })
  };

  render() {
    const mappedUsersData = this.state.users.map((user, i) => (
      // const mappedUsersData = this.state.users.map((user, i) => (
      <tr key={i}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.campus}</td>
        <td>{user.role}</td>
        <td>{user.linkedin}</td>
      </tr>
    ));
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <label htmlFor="search">search</label>
          <input
            type="text"
            name="search"
            id="search"
            onChange={this.searchHandler}
          />
        </form>
        <table>
          <tbody>
            <tr>
              <td>
                <p>first name</p>
              </td>
              <td>
                <p>last name</p>
              </td>
              <td>
                <p>campus</p>
              </td>
              <td>
                <p>role</p>
              </td>
              <td>
                <p>links</p>
              </td>
            </tr>
            {mappedUsersData}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
