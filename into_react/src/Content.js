import React, { Component } from 'react';

class Content extends Component{
    render(){
  
      return(
          <div>
              <h1>Coursed React : {this.props.username}</h1>
          </div>
      );
    }
  }

  export default Content;