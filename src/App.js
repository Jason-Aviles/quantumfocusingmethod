import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Footer from "./Footer";
import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";
import axios from "axios";

axios.defaults.headers.common = {
  ...axios.defaults.headers.common,
  "Access-Control-Allow-Origin": "https://thequantumfocusingmethod.com",
  "Content-Type": "application/json",
};

class App extends Component {
  state = {
    username: "",
    email: "",
  };

  render() {
    const onChangePdf = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    console.log(this, "props");

    const postFetch = (user) => {
      axios
        .post("https://cors-anywhere.herokuapp.com/https://quantumsmokingquitmethod.herokuapp.com/api/v1", user, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "accept, content-type",
            "Access-Control-Max-Age": "1728000",
            crossorigin: "true",
          },
        })
        .then((data) => {
          console.log(data, "here");
          this.props.history.push(
            `/submited${this.state.username}/${this.state.email} `
          );
        })
        .catch((err) => console.log(err));
    };

    const submitForm = (e) => {
      e.preventDefault();
      postFetch(this.state);
    };

    return (
      <div className="container">
        <Route
          exact
          path="/"
          render={(props) => (
            <FirstPage
              username={this.state.username}
              email={this.state.email}
              {...props}
              submitForm={submitForm}
              postFetch={postFetch}
              onChangePdf={onChangePdf}
            />
          )}
        />

        <Route
          exact
          path={`/submited${this.state.username}/${this.state.email} `}
          render={(props) => (
            <SecondPage
              username={this.state.username}
              email={this.state.email}
              {...props}
              submitForm={submitForm}
              postFetch={postFetch}
              onChangePdf={onChangePdf}
            />
          )}
        />

        <form onSubmit={submitForm} className="border">
          {" "}
          <input
            onChange={onChangePdf}
            value={this.state.username}
            name="username"
            placeholder="name"
            className="header__input"
          />
          <input
            onChange={onChangePdf}
            name="email"
            value={this.state.email}
            placeholder="email"
            type="email"
            className="header__input"
          />
          <button className="btn"> Yes!! i want a free book!</button>
        </form>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
