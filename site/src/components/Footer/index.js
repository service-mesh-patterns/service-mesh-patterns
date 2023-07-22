import React from "react";
import { Container, Row, Col } from "../Layout";
import SocialLinksColor from "../SocialLinks-Color";
import Button from "../Button";
import FooterWrapper from "./footer.style";
import PatternsLogo from "../../assets/images/brand/SVG/service-mesh-patterns-side_white.svg";

const Footer = () => {
  var currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <Container>
        <Row className="footer-head">
          <Col className="footer_logo-icons" sm={3}>
            <a href="/">
              <img src={PatternsLogo} className="footer-logo" alt="logo" />
            </a>
          </Col>
          <Col className="footer_logo-icons" sm={9}>
            <SocialLinksColor />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={3}>
            <p className="desc-info">
              Service mesh patterns help you get the most out of any service mesh.
              Each pattern can be used as a template and is customizable.
            </p>
          </Col>
          <Col className="sections_col" xs={12} lg={9}>
            <Row>
              <div className="footer-sections odd-col">
                <h3 className="section-title">
                  <a className="title-link" href="https://layer5.io/resources">
                    RESOURCES
                  </a>
                </h3>
                <ul className="section-categories">
                  <li>
                    <a className="category-link" href="https://layer5.io/learn/learning-paths">
                      Learning Paths
                    </a>
                  </li>
                  <li>
                    <a className="category-link" href="https://layer5.io/resources">
                      Resource Library
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/learn/service-mesh-books"
                    >
                      Service Mesh Books
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/learn/service-mesh-workshops"
                    >
                      Service Mesh Workshops
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/service-mesh-landscape"
                    >
                      Service Mesh Comparison
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/learn/service-mesh-labs"
                    >
                      Service Mesh Interactive Lab
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-sections even-col">
                <h3 className="section-title">
                  <a className="title-link" href="https://layer5.io/community">
                    COMMUNITY
                  </a>
                </h3>
                <ul className="section-categories">
                  <li>
                    <a className="category-link" href="https://layer5.io/blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="category-link" href="https://layer5.io/community/events">
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://discuss.layer5.io"
                    >
                      Forum
                    </a>
                  </li>
                  <li>
                    <a className="category-link" href="https://layer5.io/company/faq">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="category-link" href="https://layer5.io/careers/programs">
                      Internship Programs
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/community/handbook/writing-program"
                    >
                      Writing Program
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-sections odd-col">
                <h3 className="section-title">
                  <a className="title-link" href="https://layer5.io/projects">
                    SOLUTIONS
                  </a>
                </h3>
                <ul className="section-categories">
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/cloud-native-management/meshmap"
                    >
                      MeshMap
                      <span className="new-label">NEW</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/cloud-native-management/meshery"
                    >
                      Meshery
                    </a>
                  </li>
                  <li>
                    <a className="category-link" href="https://layer5.io/projects/nighthawk">
                      Nighthawk
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/docker-extension-meshery"
                    >
                      Docker Extension
                    </a>
                  </li>

                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/projects/service-mesh-performance"
                    >
                      Service Mesh Performance
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-sections even-col">
                <h3 className="section-title">
                  <a className="title-link" href="https://layer5.io/company/about">
                    COMPANY
                  </a>
                </h3>
                <ul className="section-categories">
                  <li>
                    <a className="category-link" href="https://layer5.io/company/news">
                      News
                    </a>
                  </li>
                  <li>
                    <a className="category-link" href="https://layer5.io/company/brand">
                      Brand
                    </a>
                  </li>
                  <li>
                    <a className="category-link" href="https://layer5.io/pricing">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="category-link" href="https://layer5.io/careers">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="category-link" href="https://layer5.io/partners">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a className="category-link" href="https://layer5.io/company/contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </Row>
            <Row className="subscribe">

              <form
                name="contactform"
                method="post"
                action="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&amp;id=6bb65defeb"
              >
                <div>
                  <span>Subscribe to our Newsletter</span>
                  <input
                    className="inputrow subscribe-email"
                    type="email"
                    placeholder="Email Address"
                    name="EMAIL"
                    id="mce-EMAIL-2"
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Please fill-in this field")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                    required
                  />
                  <Button
                    secondary
                    title="Subscribe"
                    aria-label="subscribe-us"
                    id="mc-embedded-subscribe-2"
                  />
                </div>
              </form>
            </Row>
          </Col>
        </Row>
        <Row>
          <div className="footer-bottom">
            <p className="copyright-text">
              {currentYear} Copyright ©Layer5, Inc | All Rights Reserved
            </p>

            <ul className="misc-links">
              <li className="edit-page">
                <a
                  href="https://github.com/service-mesh-patterns/service-mesh-patterns/blob/master/site/src/pages/index.js"
                  target="_blank"
                  rel="noreferrer"
                >
                  Edit This Page
                </a>
              </li>
              <li>
                <a
                  className="status-link"
                  href="https://layer5.statuspage.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  Layer5 Cloud Status <span className="pulse-icon"></span>
                </a>
              </li>
            </ul>
            <ul className="policies">
              <li>
                <a href="https://layer5.io/company/legal/privacy">Privacy</a>
              </li>
              <li>
                <a href="https://layer5.io/company/legal/terms-of-service">Terms</a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </FooterWrapper>
  );
};
export default Footer;
