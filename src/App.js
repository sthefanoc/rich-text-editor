import React, { Component } from 'react';
import './App.css';
import RichTextEditor from './components/RichTextEditor';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Rich Text Editor Example</h1>
        <h3>Created with Draft.Js</h3>
        <RichTextEditor />
      </div>
    )
  }
}
