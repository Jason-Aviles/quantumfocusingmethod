import React, { useState } from "react";
import { Route } from "react-router-dom";
import Footer from "./Footer";
import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";
import axios from "axios";
function App(props) {
  const [Info, setInfo] = useState({ username: "", email: "" });
  //https://quantumsmokingquitmethod.herokuapp.com/api/v1

  const onChangePdf = (e) => {
    setInfo({ [e.target.name]: e.target.value });
  };
  console.log(Info.username);

  const postFetch = (user) => {
    axios
      .post(
        "https://quantumsmokingquitmethod.herokuapp.com/api/v1",
        user
      )
      .then((data) => {
        console.log(data);
        props.history.push(`/submited${Info.username}/${Info.email} `);
      })
      .catch((err) => console.log(err));
  };

  const submitForm = (e)=>{
e.preventDefault()
postFetch(Info)
  }

  return (
    <div className="container">
      <Route exact path="/" component={FirstPage} />
      {/* <FirstPage/> */}

      <Route exact path={`/submited${Info.username}/${Info.email} `} component={SecondPage} />

      <form onSubmit={submitForm} className="border">
        {" "}
        <input
          onChange={onChangePdf}
          value={Info.username}
          name="username"
          placeholder="name"
          className="header__input"
        />
        <input
          name="email"
          value={Info.email}
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

export default App;
