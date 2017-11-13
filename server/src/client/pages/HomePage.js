import React, {Component} from 'react';

const Home = () => {
    return (
        <div>
          <div> I am the home component</div>
          <button onClick = {() => console.log('Hi There!!')}>Press me!!</button>
        </div>
    );
};

export default {
  component: Home
};
