import React from 'react';

import  bio from "./img/bio.png"

function App() {
  return (
   <div className="container">

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
You Won't Have To Spend Your Entire Day  <br></br>Worrying Over A Decision That Really<br></br> Doesn't Matter. -Jeff Aviles

</h4>
<h3 className="header__third  header__primary--color">
How does it works?  

</h3>


<ul className="header__list  header__primary--color">
<li className="header__item"> Step One: Enter your email address.  </li>
<li className="header__item"> 
Step Two:  Click the button.    </li>
<li className="header__item"> 
Step Three:  Expect an email    </li>

<li className="header__item"> 
​Step Four: That's it. Happy Healing!   </li>



</ul>
<input placeholder="name"  className="header__input"/>
<input placeholder="email" type="email"  className="header__input"/>

<button className="btn"> Yes!! i want a free book!</button>
</div>
</header>
<main className="main">

<img className="bio-Img" alt="bio" src={bio}/>
<div className="main__content">
<h1 className="header__primary--bold  header__primary--color">
Hello, I'm Jeff Aviles
</h1>

<h2 className="skinny-h2 uppercase">I CAN HELP YOU REGAIN CONTROL OF YOUR LIFE THROUGH THIS EBOOK</h2>
<br></br>

<h2 className="skinny-h2 u-margin-bottom">I'm here to help you learn how you can permanently overcome your tendency  <br></br>to overthink and worry by using this <span className="bold">FREE</span> Ebook. <span className="bold">Click Now!</span></h2>



<ul className="header__list  header__primary--color main__listCheck u-margin-bottom">
<li className="header__item u-margin-bottom"><span className="checkMark">&#10003;</span> You don't need to be a master in meditation.  </li>
<li className="header__item u-margin-bottom"> <span className="checkMark">&#10003;</span>
You don't have to check into a Stress Center.   </li>
<li className="header__item u-margin-bottom"> <span className="checkMark">&#10003;</span>
You don't need several visits to the doctors' office.   </li>

<li className="header__item"> <span className="checkMark">&#10003;</span>
You don't even need to invest in countless books<br></br> to get  started and you can be on your way to <br></br>rid yourself of anxiety in just ONE Afternoon!   </li>



</ul>
<button className="btn"> Yes!! i want a free book!</button>
</div>




</main>

<section className="rose ">
<h1 className="header__primary--bold  header__primary--color">
Hey, Gorgeous Worrier!
</h1>

<p className="rose__paragraph"> Did you realized how data driven and complex society has become? If you’re like me then you have seen the signals of anxiety on the faces of everyone that is torn up about this mess. Whether your not able of getting out of bed in the morning, having to force yourself to say ‘its not the end of the world” over and over again or programming yourself to say that everything is okay. Or found yourself saying yeah what if this happens instead.</p>

<p className="rose__paragraph">I’ve been in your position several times. I keep imagining what would life have been like if I had lived in simpler times or in the years of horseback riding. We have been bombarded with so much information: having to be politically correct every time, being worried about what others think of us, having the feeling that we have to be perfect all the time can be draining.</p>

<p className="rose__paragraph">I can remember the last time I had to live life with this gripping feeling of stress induced anxiety. I was always thinking the worst was going to happen. This thinking style triggered anxiety in me and my problem grew to the point of negatively affecting my life over the years. See, at an earlier age of about 6, I developed a debilitating stuttering problem.I became so self-conscious about every word that I used that it caused me to even stutter more which crippled me to the point of not wanting to make new friends, not wanting to raise my hand in class and eventually getting left back in 3rd grade because I had gotten to the point where I couldn’t think at all when the teacher told me to read out loud.</p>

<p className="rose__paragraph">You might have thought that life wasn’t going to be as stressful as high school but if your like me, you have come to the realization that it is 10 times more intense. In this world you have to be smart, well-spoken, in shape, in a relationship and amongst all you have to be in a meaningful profession because your job is who you are. If you don’t have a meaningful profession than you don’t know yourself and if you don’t know yourself before all of that – you will lose yourself. So you may be constantly comparing yourself to others which causes you to feel horrible.</p>
<p className="rose__paragraph">So, not only are we dealing with our inner anxieties but also with the anxiety of the world. The anxieties forced on us are created through Media Networks, Big Corporate Organizations and the Cultural Trends of today. But with the rise of Social Media and technological advancements, many people are sleep deprived because they are constantly worried about something that might happen tomorrow or replaying how they could have solved a problem earlier in the day –</p>
<p className="rose__paragraph"> You may be asking: How can you solve this problem? </p>
<p className="rose__paragraph">Through my Overthinking Cure Ebook, I’m going to reveal a well-kept solution that will enable you to completely rid yourself of your problematic thinking patterns in just 2 to 4 hours time… almost INSTANTLY!And here’s the best part. You don’t need countless hours of meditation, prescription drugs with alarming side-affects or innumerable self-help books!</p>


<h2 className="u-margin-bottom header__third  header__primary--color">In Just 2 to 4 Hours !</h2>
<img className="bio-Img u-margin-bottom" alt="bio" src={bio}/>
<h2 className="header__third  header__light">Jeff Aviles, LCSW-C</h2>
<p className="rose__paragraph rose__paragraph--light ">I'm here to help you learn how you can permanently overcome your tendency to
overthink and worry by using this FREE Ebook. Sign up NOW!</p>
</section>

   </div>
  );
}

export default App;
