import React, { Component } from "react";

class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value); //what is typed
  }

  state = { term: "" };

  onInputClick() {
    // console.log("CLICKED");
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  //   state = {};
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              //   onClick={this.onInputClick}
              onChange={e => this.setState({ term: e.target.value })}
              //   onChange={e => console.log(e.target.value)}
              //   onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
