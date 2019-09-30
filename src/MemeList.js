import React, { Component } from "react";
import { connect } from "react-redux";
import Meme from "./Meme";
import "./MemeList.css";

class MemeList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(evt, id) {
    evt.preventDefault();

    this.props.dispatch({
      type: "DELETE",
      payload: id
    });
  }

  render() {
    let memeArray = this.props.memes.map(m => (
      // <form className="meme-box" id={m.id} onSubmit={this.handleDelete}>
      <Meme
        key={m.id}
        id={m.id}
        bottomText={m.botText}
        topText={m.topText}
        url={m.url}
        handleDelete={this.handleDelete}
      />
      // <button>Delete</button>
      // </form>
    ));

    return <div className="memeList">{memeArray}</div>;
  }
}

function mapStateToProps(state) {
  return { memes: state.memes };
}

const connectToState = connect(mapStateToProps);

export default connectToState(MemeList);
