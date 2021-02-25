import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
render() {
    return (
    <div>
        <h1>Hello from Django and React</h1>
    </div>);
}
}

export default hot(App);
