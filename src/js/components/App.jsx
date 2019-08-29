import React, { Component } from "react";
import data from "./data"
import Nav from "./Nav"
import Header from "./Header"
import Second from "./Second"
import Showcase from "./Showcase"
import Test from "./Test"
import Form from "./Form"
import Footer from "./Footer"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data:data
    };
  };
  render() { 
    return ( 
      <div>
        <Nav nav={this.state.data[0].nav}/>
        <Header header={this.state.data[0].header}/>
        <Second second={this.state.data[0].second} />
        <Showcase case={this.state.data[0].case} />
        <Test test={this.state.data[0].test} />
        <Form form={this.state.data[0].form}/>
        <Footer/>
      </div>
      
     );
  }
}
 
export default App;