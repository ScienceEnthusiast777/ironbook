import React from "react";
import "./App.css";
import usersData from "./users";

class App extends React.Component {
  state = {};

  render() {
    const mappedUsersData = usersData.map((user) => (
        <tr key={user.lastName}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.campus}</td>
          <td>{user.role}</td>
          <td>{user.links}</td>
        </tr>
    ));
    return (
      <div className="App">
        <table>
        <thead>
          <tr>USERS</tr>
        </thead>
          <tr>
            <td>first name</td>
            <td>last name</td>
            <td>campus</td>
            <td>role</td>
            <td>links</td>
          </tr>
          {mappedUsersData}
        </table>
      </div>
    );
  }
}

export default App;
