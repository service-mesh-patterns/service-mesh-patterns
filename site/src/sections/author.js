import React from "react";

// assets import

const Background = "../assets/images/author/Background.png";
import LeePhoto from "../assets/images/author/Lee.svg";
import NicPhoto from "../assets/images/author/Nic.svg";
import Github from "../assets/images/author/Github.svg";
import Twitter from "../assets/images/author/twitter.svg";
import LinkedIn from "../assets/images/author/linkedin.svg";
import Layer5 from "../assets/images/author/layer5.svg";
import Harshicorp from "../assets/images/author/Harshicorp.svg";
import Reviewer from "../assets/images/author/Reviewer.jpg";

// styles import
import AuthorStyleWrapper from "./author.style";



// ui import
import { StaticImage } from "gatsby-plugin-image";


const Author= () => {
  return (
    <AuthorStyleWrapper>
      <StaticImage className="background-image" src={Background} alt="background" />
      <section className="author-content">
        <h1 className="author-title">Meet our Authors</h1>
        <div className="aboutLee">
          <div className="aboutLee-1">
            <img className="LeePhoto" src={LeePhoto} alt="Lee" />
            <p className="descriptionlee"> Lee Calcote</p>
          </div>
          <div className="lee-paragraph">
            <p className="layer5-logo"> Founder and CEO, <img src={Layer5} /> </p>
            <p className="lee"> Lee Calcote is an innovative product and technology leader, passionate about empowering engineers and enabling organizations. As Founder of Layer5, he is at the forefront of the cloud native movement. Open source, advanced and emerging technologies have been a consistent focus through Calcote’s time at SolarWinds, Seagate, Cisco and Schneider Electric. An advisor, author, and speaker, Calcote is active in the community as a Docker Captain, Cloud Native Ambassador and GSoC, GSoD, and LFX Mentor.
            </p>
            <div className="socials">
              <img className="author-github" src={Github} alt="Github" />
              <img className="author-twitter" src={Twitter} alt="Twitter" />
              <img className="author-github" src={LinkedIn} alt="Linkedin" />
            </div>
          </div>
        </div>
        <section className="aboutNic">
          <div className="nic-paragraph">
            <p className="hashi-corp-logo"> Developer Advocate,</p>
            <img className= "harshi-logo" src={Harshicorp} alt="logo" />
            <p className="nic">Nic Jackson is a developer advocate at HashiCorp, and the author of “Building Microservices in Go”, a book which examines the best patterns and practices for building microservices with the Go. Nic is also a coauthor of the Service Mesh Patterns book.
            </p>
            <div className="socials-nic">
              <img className="author-github-nic" src={Github} alt="Github" />
              <img className="author-twitter-nic" src={Twitter} alt="Twitter" />
              <img className="author-github-nic" src={LinkedIn} alt="Linkedin" />
            </div>
          </div>
          <div className="aboutNic-1">
            <img className="nicphoto" src={NicPhoto} alt="Nic" />
            <p className="descriptionnic"> Nic Jackson </p>
          </div>
        </section>
        <section className="technical-review">
          <p className="technical-review-heading">with Technical Review by</p>
        </section>
        <section className="technical-review-profile-section">
          <div className="technical-review-profiles">
            <img className="Reviewer-1" src={Reviewer} alt="Matt"/>
            <p className="technical-review-para">Matt Young</p>
            <div className="socials-matt">
              <img className="author-github-matt" src={Github} alt="Github" />
              <img className="author-twitter-matt" src={Twitter} alt="Twitter" />
              <img className="author-github-matt" src={LinkedIn} alt="Linkedin" />
            </div>
          </div>
        </section>
        <section className="technical-review-profile-section">
          <div className="technical-review-profiles">
            <img className="Reviewer-1" src={Reviewer} alt="Matt"/>
            <p className="technical-review-para">Matt Young</p>
            <div className="socials-matt">
              <img className="author-github-matt" src={Github} alt="Github" />
              <img className="author-twitter-matt" src={Twitter} alt="Twitter" />
              <img className="author-github-matt" src={LinkedIn} alt="Linkedin" />
            </div>
          </div>
        </section>
        <section className="technical-review-profile-section">
          <div className="technical-review-profiles">
            <img className="Reviewer-1" src={Reviewer} alt="Matt"/>
            <p className="technical-review-para">Matt Young</p>
            <div className="socials-matt">
              <img className="author-github-matt" src={Github} alt="Github" />
              <img className="author-twitter-matt" src={Twitter} alt="Twitter" />
              <img className="author-github-matt" src={LinkedIn} alt="Linkedin" />
            </div>
          </div>
        </section>
      </section>
    </AuthorStyleWrapper>
  );
};

export default Author;