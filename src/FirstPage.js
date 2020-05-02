import React from 'react';
import HeaderOne from "./HeaderOne"
import bio from "./img/bio.png";
import cure from "./img/cure.png"
const FirstPage = (props) => {
  return (
    <>
     <header className="header">
    <form onSubmit={props.submitForm} className="header__content">
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
        <li id="top" className="header__item">Step Three: Expect an email </li>

        <li className="header__item">
          ​Step Four: That's it. Happy Healing!{" "}
        </li>
      </ul>
      <input
      
            onChange={props.onChangePdf}
            value={props.username}
            name="username"
            placeholder="name"
            className="header__input"
          />
          <input
          onChange={props.onChangePdf}
            name="email"
            value={props.email}
            placeholder="email"
            type="email"
            className="header__input"
          />
   
      <button className="btn"> Yes!! i want a free book!</button>
    </form>
  </header>
    <main className="main">
    <img className="bio-Img" alt="bio" src={bio} />
    <div className="main__content">
      <h1 className="header__primary--bold  header__primary--color">
        Hello, I'm Jeff Aviles
      </h1>

      <h2 className="skinny-h2 uppercase">
        I CAN HELP YOU REGAIN CONTROL OF YOUR LIFE THROUGH THIS EBOOK
      </h2>
      <br />

      <h2 className="skinny-h2 u-margin-bottom">
        I'm here to help you learn how you can permanently overcome your
        tendency <br />to overthink and worry by using this{" "}
        <span className="bold">FREE</span> Ebook.{" "}
        <span className="bold">Click Now!</span>
      </h2>

      <ul className="header__list  header__primary--color main__listCheck u-margin-bottom">
        <li className="header__item u-margin-bottom">
          <span className="checkMark">&#10003;</span> You don't need to be a
          master in meditation.{" "}
        </li>
        <li className="header__item u-margin-bottom">
          {" "}
          <span className="checkMark">&#10003;</span>
          You don't have to check into a Stress Center.{" "}
        </li>
        <li className="header__item u-margin-bottom">
          {" "}
          <span className="checkMark">&#10003;</span>
          You don't need several visits to the doctors' office.{" "}
        </li>

        <li className="header__item">
          {" "}
          <span className="checkMark">&#10003;</span>
          You don't even need to invest in countless books<br /> to get
          started and you can be on your way to <br />rid yourself of
          anxiety in just ONE Afternoon!{" "}
        </li>
      </ul>
      <a href="#top" className="btn"> Yes!! i want a free book!</a>
    </div>
  </main>
  <section className="rose ">
        <h1 className="header__primary--bold  header__primary--color">
          Hey, Gorgeous Worrier!
        </h1>

        <p className="rose__paragraph">
          {" "}
          Did you realized how data driven and complex society has become? If
          you’re like me then you have seen the signals of anxiety on the faces
          of everyone that is torn up about this mess. Whether your not able of
          getting out of bed in the morning, having to force yourself to say{" "}
          <span className="rose__paragraph--orange">
            "its not the end of the world”
          </span>{" "}
          over and over again or programming yourself to say that{" "}
          <span className="rose__paragraph--orange">everything is okay</span>.
          Or found yourself saying yeah what if this happens instead.
        </p>

        <p className="rose__paragraph">
          I’ve been in your position several times. I keep imagining what would
          life have been like if I had lived in simpler times or in the years of
          horseback riding. We have been bombarded with so much information:
          having to be{" "}
          <span className="rose__paragraph--orange">politically correct </span>
          every time, being worried about what others think of us, having the
          feeling that we have to be perfect all the time can be draining.
        </p>

        <p className="rose__paragraph">
          I can remember the last time I had to live life with this gripping
          feeling of stress induced anxiety. I was always thinking the worst was
          going to happen. This thinking style triggered{" "}
          <span className="rose__paragraph--orange">anxiety</span> in me and my
          problem grew to the{" "}
          <span className="rose__paragraph--orange">
            {" "}
            point of negatively affecting my life
          </span>{" "}
          over the years. See, at an earlier age of about 6, I developed a
          debilitating stuttering problem.I became so{" "}
          <span className="rose__paragraph--orange">self-conscious</span> about
          every word that I used that it caused me to even{" "}
          <span className="rose__paragraph--orange">stutter</span> more which
          crippled me to the point of{" "}
          <span className="rose__paragraph--orange">
            not wanting to make new friends, not wanting to raise my hand in
            class
          </span>{" "}
          and eventually{" "}
          <span className="rose__paragraph--orange">getting left back</span> in
          3rd grade because I had gotten to the point where I couldn’t think at
          all when the teacher told me to read out loud.
        </p>

        <p className="rose__paragraph">
          You might have thought that life wasn’t going to be as stressful as
          high school but if your like me, you have come to the realization that
          it is 10 times more intense. In this world you have to be smart,
          well-spoken, in shape, in a relationship and amongst all you have to
          be in a meaningful profession because your job is who you are. If you
          don’t have a meaningful profession than you don’t know yourself and if
          you don’t know yourself before all of that{" "}
          <span className="rose__paragraph--orange">
            {" "}
            – you will lose yourself.
          </span>{" "}
          So you may be constantly comparing yourself to others which causes you
          to feel horrible.
        </p>
        <p className="rose__paragraph">
          So, not only are we dealing with our{" "}
          <span className="rose__paragraph--orange">inner anxieties </span>but
          also with the anxiety of the world. The anxieties forced on us are
          created through Media Networks, Big Corporate Organizations and the
          Cultural Trends of today. But with the rise of Social Media and
          technological advancements, many people are{" "}
          <span className="rose__paragraph--orange">sleep deprived</span>{" "}
          because they are{" "}
          <span className="rose__paragraph--orange">
            constantly worried about something
          </span>{" "}
          that might happen tomorrow or replaying how they could have solved a
          problem earlier in the day –
        </p>
        <p className="rose__paragraph">
          {" "}
          You may be asking:{" "}
          <span className="rose__paragraph--orange">
            How can you solve this problem?{" "}
          </span>
        </p>
        <p className="rose__paragraph">
          Through my{" "}
          <span className="rose__paragraph--orange">
            Overthinking Cure Ebook,
          </span>{" "}
          I’m going to reveal a{" "}
          <span className="rose__paragraph--orange">well-kept solution </span>
          that will enable you to completely rid yourself of your problematic
          thinking patterns in just 2 to 4 hours time… almost{" "}
          <span className="rose__paragraph--orange">INSTANTLY!</span>And here’s
          the best part. You don’t need{" "}
          <span className="rose__paragraph--orange">
            countless hours of meditation,
          </span>{" "}
          prescription<span className="rose__paragraph--orange"> drugs</span>{" "}
          with alarming side-affects or innumerable self-help books!
        </p>

        <h2 className="u-margin-bottom header__third  rose__paragraph--orange">
          In Just 2 to 4 Hours !
        </h2>
        <img className="bio-Img u-margin-bottom" alt="bio" src={bio} />
        <h2 className="header__third  rose__paragraph--orange">
          Jeff Aviles, LCSW-C
        </h2>
        <p className="rose__paragraph rose__paragraph--light ">
          I'm here to help you learn how you can permanently overcome your
          tendency to overthink and worry by using this FREE Ebook. Sign up NOW!
        </p>
      </section>
      

      <form onSubmit={props.submitForm} className="border">
          {" "}
          <input
            onChange={props.onChangePdf}
            value={props.username}
            name="username"
            placeholder="name"
            className="header__input"
          />
          <input
          onChange={props.onChangePdf}
            name="email"
            value={props.email}
            placeholder="email"
            type="email"
            className="header__input"
          />
          <button className="btn"> Yes!! i want a free book!</button>
        </form>

          <main className="main">
        <div className="main__content--column">
        <h1 className="header__primary header__primary--color">
        What's Inside of 
          </h1>

          <h1 className="header__primary--bold  header__primary--color">
          this FREE eBook? 
          </h1>
          <h3 className="header__third  header__primary--color u-margin-bottom ">
          Scroll to learn more....
          </h3>


          <img className="bio-Img u-margin-bottom " alt="bio" src={cure} />

          <br />

      
          <div className="icon-box">

<div className="icon-box__first">
<ul className="icon-box__list">
<li className="icon-box__item"><i class=" fas fa-search icon-box__icon"></i>  <div className="icon-box__icon-text"> Identify Five Excuses you are making</div></li>
<li className="icon-box__item"><i class=" fas fa-brain icon-box__icon"></i><div className="icon-box__icon-text"> Reasons why you are making these excuses</div></li>
<li className="icon-box__item"><i class=" fas fa-grin-squint-tears icon-box__icon"></i><div className="icon-box__icon-text"> Best case scenario if you start taking action...</div></li>
<li className="icon-box__item"><i class=" fas fa-ban icon-box__icon "></i><div className="icon-box__icon-text"> Why is it important that you stop being afraid</div></li>

</ul>
</div>
<div className="icon-box__second">
<ul className="icon-box__list">
<li className="icon-box__item"><i class=" far fa-times-circle icon-box__icon"></i>  <div className="icon-box__icon-text">    Identify five failures you can become comfortable</div></li>
<li className="icon-box__item"><i class=" far fa-frown icon-box__icon"></i><div className="icon-box__icon-text"> Why people are afraid of failing </div></li>
<li className="icon-box__item"><i class=" fas fa-globe-asia icon-box__icon"></i><div className="icon-box__icon-text">How does society say about failure </div></li>


</ul>
</div>

</div>

         
        </div>
      </main>


      <form onSubmit={props.submitForm} className="border">
          {" "}
          <input
            onChange={props.onChangePdf}
            value={props.username}
            name="username"
            placeholder="name"
            className="header__input"
          />
          <input
          onChange={props.onChangePdf}
            name="email"
            value={props.email}
            placeholder="email"
            type="email"
            className="header__input"
          />
          <button className="btn"> Yes!! i want a free book!</button>
        </form>







          <main className="main">
        <div className="main__content--column">
        <h1 className="header__primary header__primary--color">
        How does it works?
          </h1>

  

          <br />

      
          <div className="icon-box">

<div className="icon-box__first">
<ul className="icon-box__list">
<li className="icon-box__item"><i class="fa_prepended fas fa-envelope icon-box__icon"></i>  <div className="  icon-box__icon-text"> STEP 1</div><div className="icon-box__icon-text"> ENTER YOUR EMAIL ADDRESS</div></li>
<li className="icon-box__item"><i class=" fa_prepended fas fa-mouse-pointer icon-box__icon"></i><div className="icon-box__icon-text"> STEP 2</div><div className="icon-box__icon-text"> CLICK THE BUTTON</div></li>
<li className="icon-box__item"><i class=" fa_prepended fas fa-check-circle icon-box__icon"></i><div className="icon-box__icon-text"> STEP 3</div><div className="icon-box__icon-text"> RECEIVE EBOOK FOR FREE</div></li>


</ul>
</div>


</div>

         
        </div>
      </main>



      
</>
  );
};

export default FirstPage;