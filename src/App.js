import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading:true
  };
  componentDidMount() {
    setTimeout( () => {
      this.setState({isLoading: false});
    }, 6000);
  }
  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loadgin" : "we are Loading"}
      </div>
    );
  }
}

export default App;
