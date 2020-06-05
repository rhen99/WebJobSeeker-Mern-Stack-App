import React from "react";

function About() {
  return (
    <div className="container mt-5 push-footer">
      <h1>About Us</h1>
      <div className="page-section py-2">
        <h3>Why did I Created This App</h3>
        <p className="lead py-1">
          I created this app mainly to show my skills as a developer. This app
          was made with the MERN stack, I also made this because I feel the lack
          of job boards exclusive to programmers. This is only the first
          iteration of this app, I plan on adding features to it moving forward.
        </p>
      </div>
      <div className="page-section py-2">
        <h3>My Plans For The App</h3>
        <p className="lead py-1">
          I want this app to be a real commmercial app, so I plan on updating
          some stuff, and adding more features. I plan for this to have
          features, and tools for employers to hire good developers easily.
        </p>
      </div>
    </div>
  );
}

export default About;
