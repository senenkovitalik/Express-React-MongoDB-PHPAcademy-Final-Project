import React from 'react';
import Users from './users';

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.makeAJAX({
    //   method: 'GET',
    //   url: '/categories'
    // }, res => {
    //   console.log(res);
    //   this.setState({ categories: res })
    // });
    // this.setState({
    //   categories: ['Guitars', 'Amps', 'Combos', 'Strings', 'Effects']
    // })
  }

  render() {
    return (
      <Users />
    );
  }
}

export default UserContainer;