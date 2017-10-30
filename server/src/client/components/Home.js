import React, {Component} from 'react';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div>
          <div> I am the home component</div>
          <button onClick = {() => console.log('Hi There!!')}>Press me!!</button>
        </div>
    );
  }
}

module.exports =  Home;
