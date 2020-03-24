import React, { Component } from "react";
import logo from "./Chuck.jpeg";

class Quote extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <img src={logo} alt="" />
        </div>

        <button type="button" id="displayQuote">
          Generate a Quote.
        </button>
        <form id="categoryChangeForm">
          <input defaultValue="animal" id="categoryInput" />
          <label id="catagorySelectLabel">Select a category</label>
          <button type="button" id="submitForm">
            Submit
          </button>
          <h1>The quote is: {this.props.quote}</h1>
        </form>
      </div>
    );
  }
}

export default Quote;
