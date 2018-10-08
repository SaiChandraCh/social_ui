import React, { Component } from 'react';

class UserList extends Component{
      
  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('/socials/admin/getUsers',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      } 
    });
    const body = await response.json();
    this.setState({ groups: body, isLoading: false });
    console.log(this.state.groups)
  }
  render(){
    const {groups, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    return(
      <div className="App-intro">
        <h2>Users List</h2>
        {groups.map(group =>
          <div key={group.id}>
            {group.firstName}
          </div>
        )}
      </div>
    );
  }
}
export default UserList;