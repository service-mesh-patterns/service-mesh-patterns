import React from "react";
import { authorsData } from "./author-data";
import { technicalReviewers } from "./technical-reviewers";
import Container from "../../components/Layout/Container";

// assets import
import Github from "../../assets/images/author/Github.svg";
import Twitter from "../../assets/images/author/twitter.svg";
import LinkedIn from "../../assets/images/author/linkedin.svg";

// styles import
import AuthorStyleWrapper from "./author.style";


const Author= () => {
  return (
    <AuthorStyleWrapper>
      <Container>
        <section className="author-content">
          <h1 className="page-title">Meet our Authors</h1>
          {authorsData.map((author, index) => (
            <section className={`author ${index % 2 == 0 ? "left" : "right"}`} key={index}>
              <div className="author-img">
                <img src={author.img} alt={author.name} />
                <p>{author.name}</p>
              </div>
              <div className="author-desc">
                <h3>
                  {author.designation},
                  <img src={author.org} alt={author.orgname} />
                </h3>
                <p>{author.about}</p>
                <div className="author-social">
                  <a href={author.github} target="_blank" rel="noreferrer">
                    <img src={Github} alt="GitHub profile of author" />
                  </a>
                  <a href={author.linkedin} target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt="LinkedIn profile of author" />
                  </a>
                  <a href={author.twitter} target="_blank" rel="noreferrer">
                    <img src={Twitter} alt="Twitter profile of author" />
                  </a>
                </div>
              </div>
            </section>
          ))}
          <section className="technical-review">
            <h2>with Technical Review by</h2>
            {technicalReviewers.map((reviewer, index) => (
              <div className="reviewers-section" key={index}>
                <img src={reviewer.img} alt={reviewer.name} className="reviewer-img"/>
                <h3 className="reviewer-name">{reviewer.name}</h3>
                <div className="reviewer-socials">
                  <a href={reviewer.github} target="_blank" rel="noreferrer">
                    <img src={Github} alt="GitHub profile of reviewer" />
                  </a>
                  <a href={reviewer.linkedin} target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt="LinkedIn profile of reviewer" />
                  </a>
                  <a href={reviewer.twitter} target="_blank" rel="noreferrer">
                    <img src={Twitter} alt="Twitter profile of reviewer" />
                  </a>
                </div>
              </div>
            ))}
          </section>
        </section>
      </Container>
    </AuthorStyleWrapper>
  );
};

export default Author;