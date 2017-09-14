import React, { Component } from "react";
import "./App.css";
import Swatch from "./Swatch.js";
import Label from "./Label.js";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }

  changeColor(event) {
    this.setState({
      color: event.target.value
    });
  }
  render() {
    let swatchColor = {
      backgroundColor: this.state.color
    };
    return (
      <div
        className="card"
        style={swatchColor}
        onChange={this.changeColor.bind(this)}
      >
        <Swatch />
        <Label />
      </div>
    );
  }
}
