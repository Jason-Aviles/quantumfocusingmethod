import React from 'react';

const HeaderOne = () => {
  return (
    <header className="header">
    <div className="header__content">
      <h1 className="header__primary header__primary--color">
        Learn How To
      </h1>

      <h1 className="header__primary--bold  header__primary--color">
        Stop Overthinking
      </h1>
      <h3 className="header__third  header__primary--color">
        By Using This Free eBook
      </h3>

      <h4 className="header__fourth  header__primary--color">
        You Won't Have To Spend Your Entire Day <br />Worrying Over A
        Decision That Really<br /> Doesn't Matter. -Jeff Aviles
      </h4>
      <h3 className="header__third  header__primary--color">
        How does it works?
      </h3>

      <ul className="header__list  header__primary--color">
        <li className="header__item">
          {" "}
          Step One: Enter your email address.{" "}
        </li>
        <li className="header__item">Step Two: Click the button. </li>
        <li className="header__item">Step Three: Expect an email </li>

        <li className="header__item">
          ​Step Four: That's it. Happy Healing!{" "}
        </li>
      </ul>
      <input placeholder="name" className="header__input" />
      <input placeholder="email" type="email" className="header__input" />

      <button className="btn"> Yes!! i want a free book!</button>
    </div>
  </header>
  );
};

export default HeaderOne;