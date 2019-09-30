import React, { Component } from "react";
import "./Meme.css";

class Meme extends Component {
  render() {
    return (
      <div className='containerMemes'>
        <div className='parent'>
          <span className='topText text-center'>{this.props.topText}</span>
          <img src={this.props.url} alt='altmemes' />
          <span className='botText text-center'>{this.props.bottomText}</span>
        </div>
        <button
          className='delButton'
          onClick={evt => this.props.handleDelete(evt, this.props.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Meme;
