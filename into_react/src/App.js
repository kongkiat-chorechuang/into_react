import React, { Component } from 'react';
// import Header from './Header';
import Content from './Content';
import {connect} from 'react-redux';
// import Footer from './Footer';


class App extends Component {
    render(){

      return(
          <div>
          
               <Content username={this.props.user.name}/>
               <button onClick={()=>this.props.setName('Kongkiat')}>Change</button>
               <input type="text" onChange={()=>this.props.setName(this.name)}/>
               {/* <h1><a href="header">Header</a></h1>
               <h1><a href="content">Contecnt</a></h1>
               <h1><a href="footer">Footer</a></h1> */}

          </div>
      );
    }
}
const mapStatetoPros = (state) =>{
    return  {
        user: state.user,
        employee: state.employee
    }
}

const mapDispathtoPros = (dispatch) =>{
    return  {
       setName : (name) =>{
           dispatch({
               type: "setName",
               payload: name
           });
       }
    }
}
export default connect(mapStatetoPros,mapDispathtoPros)(App);
