import React, { Component } from 'react';
import './App.css';
import Swatch from './Swatch.js';
import Label from './Label.js';

class Card extends Component {
    render() {
      return (
        <div className = "card">
            <Swatch/>
            <Label/>
        </div>
      );
    }
  }
  
  export default Card;