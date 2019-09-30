import React, { Component } from "react";
import { connect } from "react-redux";
import "./NewMemeForm.css"

class NewMemeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      topText: "",
      botText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.dispatch({
      type: "ADD",
      payload: this.state
    });
  }

  render() {
    return (
      <div className='NewMeme'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='url'>Url:</label>
          <input
            onChange={this.handleChange}
            value={this.state.url}
            name='url'
            type='type'/>
          <label htmlFor='topText'>Top Text:</label>
          <input
            onChange={this.handleChange}
            value={this.state.topText}
            name='topText'
            type='type'/>
          <label htmlFor='botText'>Bottom Text:</label>
          <input
            onChange={this.handleChange}
            value={this.state.botText}
            name='botText'
            type='type'/>
          <button id='newMeme'>Add Meme!</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewMemeForm);
