//modules imports
import React from "react";

//ui import
import Button from "../reusecore/Button/index";

//assets import
import PatternsLogo from "../assets/images/brand/SVG/service-mesh-patterns-side_white.svg";
import github from "../assets/images/socialIcons/github-light.svg";

//styles import
import {
  Footerdiv,
  Wrapperdiv,
  Patternsdiv,
  Resourcesdiv,
  Resourceslink,
  Maildiv,
  Copyrightdiv,
  Icondiv,
  Inputdiv,
} from "../sections/footer.style";

const Footer = () => {
  return (
    <Footerdiv>
      <Wrapperdiv>
        <Patternsdiv>
          <img alt="Patterns Logo" src={PatternsLogo} />
          <p>
            Layer5 helps organizations expect more from their infrastructure. We
            are enablers of the engineer and embrace developer-defined
            infrastructure.
          </p>
        </Patternsdiv>
        <Resourcesdiv>
          <h3>RESOURCES</h3>
          <Resourceslink>
            <a href="https://layer5.io/learn/learning-paths">Learning Paths</a>
            <a href="https://layer5.io/resources">Resource library</a>
            <a href="https://layer5.io/learn/service-mesh-books">
              Service Mesh Books
            </a>
            <a href="https://layer5.io/learn/service-mesh-workshops">
              Service Mesh Workshops
            </a>
            <a href="https://layer5.io/service-mesh-landscape">
              Service Mesh Comparison
            </a>
            <a href="https://layer5.io/learn/service-mesh-labs">
              Service Mesh Interativs lab
            </a>
          </Resourceslink>
        </Resourcesdiv>
        <Maildiv>
          <h3>
            Subcribe To Our <span>Mailling List</span>
          </h3>
          <from
            name="contactform"
            method="post"
            action="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&amp;id=6bb65defeb"
          >
            <Inputdiv>
              <input
                className="inputrow subscribe-email"
                type="email"
                placeholder="Email Address"
                name="EMAIL"
                id="mce-EMAIL"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please fill-in this field")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
              />
              <Button
                size="large"
                variant="contained"
                style={{ backgroundColor: "#00B39F" }}
              >
                Subscribe
              </Button>
            </Inputdiv>
          </from>
        </Maildiv>
      </Wrapperdiv>
      <Copyrightdiv>
        <p>@Layer5, Inc. Copyright 2022</p>
        <Icondiv>
          <a href="https://discuss.layer5.io" target="_blank" rel="noreferrer">
            <img
              height="30px"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTEgMTA0IDEwNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMzFmMjA7fS5jbHMtMntmaWxsOiNmZmY5YWU7fS5jbHMtM3tmaWxsOiMwMGFlZWY7fS5jbHMtNHtmaWxsOiMwMGE5NGY7fS5jbHMtNXtmaWxsOiNmMTVkMjI7fS5jbHMtNntmaWxsOiNlMzFiMjM7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5EaXNjb3Vyc2VfbG9nbzwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiPjxnIGlkPSJMYXllcl8zIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MS44NywwQzIzLjcxLDAsMCwyMi44MywwLDUxYzAsLjkxLDAsNTIuODEsMCw1Mi44MWw1MS44Ni0uMDVjMjguMTYsMCw1MS0yMy43MSw1MS01MS44N1M4MCwwLDUxLjg3LDBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNTIuMzcsMTkuNzRBMzEuNjIsMzEuNjIsMCwwLDAsMjQuNTgsNjYuNDFsLTUuNzIsMTguNEwzOS40LDgwLjE3YTMxLjYxLDMxLjYxLDAsMSwwLDEzLTYwLjQzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTc3LjQ1LDMyLjEyYTMxLjYsMzEuNiwwLDAsMS0zOC4wNSw0OEwxOC44Niw4NC44MmwyMC45MS0yLjQ3QTMxLjYsMzEuNiwwLDAsMCw3Ny40NSwzMi4xMloiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik03MS42MywyNi4yOUEzMS42LDMxLjYsMCwwLDEsMzguOCw3OEwxOC44Niw4NC44MiwzOS40LDgwLjE3QTMxLjYsMzEuNiwwLDAsMCw3MS42MywyNi4yOVoiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0yNi40Nyw2Ny4xMWEzMS42MSwzMS42MSwwLDAsMSw1MS0zNUEzMS42MSwzMS42MSwwLDAsMCwyNC41OCw2Ni40MWwtNS43MiwxOC40WiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTI0LjU4LDY2LjQxQTMxLjYxLDMxLjYxLDAsMCwxLDcxLjYzLDI2LjI5YTMxLjYxLDMxLjYxLDAsMCwwLTQ5LDM5LjYzbC0zLjc2LDE4LjlaIi8+PC9nPjwvZz48L3N2Zz4="
              alt="forum"
            />
          </a>
          <a
            className="mail_icon"
            href="mailto:community@layer5.io"
            target="_blank"
            rel="noreferrer"
          >
            <img
              height="30px"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeD0iMCIgeT0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjY1LjUgMTk5IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNjUuNSAxOTkiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiMwMGIzOWZ9PC9zdHlsZT48cGF0aCBkPSJNMjYwLjQsNjUuN2MyLTEuNiw1LTAuMSw1LDIuNHYxMDZjMCwxMy43LTExLjEsMjQuOS0yNC45LDI0LjlIMjQuOUMxMS4yLDE5OSwwLDE4Ny45LDAsMTc0LjF2LTEwNgljMC0yLjYsMy00LDUtMi40YzExLjYsOSwyNywyMC41LDc5LjksNTguOWMxMC45LDgsMjkuNCwyNC44LDQ3LjgsMjQuN2MxOC41LDAuMiwzNy4zLTE3LDQ3LjgtMjQuNwlDMjMzLjQsODYuMiwyNDguOCw3NC43LDI2MC40LDY1Ljd6IE0xMzIuNywxMzIuN2MxMiwwLjIsMjkuMy0xNS4xLDM4LjEtMjEuNWM2OC44LTQ5LjksNzQtNTQuMyw4OS45LTY2LjdjMy0yLjMsNC44LTYsNC44LTkuOHYtOS44CWMwLTEzLjctMTEuMS0yNC45LTI0LjktMjQuOUgyNC45QzExLjIsMCwwLDExLjEsMCwyNC45djkuOGMwLDMuOCwxLjgsNy40LDQuOCw5LjhjMTUuOSwxMi40LDIxLjEsMTYuOCw4OS45LDY2LjcJQzEwMy40LDExNy41LDEyMC43LDEzMi45LDEzMi43LDEzMi43TDEzMi43LDEzMi43eiIgY2xhc3M9InN0MCIvPjwvc3ZnPg=="
              alt="mail"
            />
          </a>
          <a href="http://slack.layer5.io/" target="_blank" rel="noreferrer">
            <img
              className="slack"
              height="30px"
              src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOC44NDMgMTIuNjUxYy0xLjM5MiAwLTIuNTIxIDEuMTI5LTIuNTIxIDIuNTIxdjYuMzA2YzAgMS4zOTIgMS4xMjkgMi41MjEgMi41MjEgMi41MjFzMi41MjEtMS4xMjkgMi41MjEtMi41MjF2LTYuMzA2Yy0uMDAxLTEuMzkyLTEuMTMtMi41MjEtMi41MjEtMi41MjF6IiBmaWxsPSIjZTkxZTYzIi8+PHBhdGggZD0ibS4wMTkgMTUuMTcyYzAgMS4zOTMgMS4xMyAyLjUyMyAyLjUyMyAyLjUyM3MyLjUyMy0xLjEzIDIuNTIzLTIuNTIzdi0yLjUyM2gtMi41MjFjLS4wMDEgMC0uMDAxIDAtLjAwMiAwLTEuMzkzIDAtMi41MjMgMS4xMy0yLjUyMyAyLjUyM3oiIGZpbGw9IiNlOTFlNjMiLz48cGF0aCBkPSJtOC44NDYtLjAwMWMtLjAwMSAwLS4wMDIgMC0uMDAzIDAtMS4zOTMgMC0yLjUyMyAxLjEzLTIuNTIzIDIuNTIzczEuMTMgMi41MjMgMi41MjMgMi41MjNoMi41MjF2LTIuNTIzYzAtLjAwMSAwLS4wMDMgMC0uMDA1LS4wMDEtMS4zOTEtMS4xMjgtMi41MTgtMi41MTgtMi41MTh6IiBmaWxsPSIjMDBiY2Q0Ii8+PHBhdGggZD0ibTIuNTI1IDExLjM3aDYuMzE4YzEuMzkzIDAgMi41MjMtMS4xMyAyLjUyMy0yLjUyM3MtMS4xMy0yLjUyMy0yLjUyMy0yLjUyM2gtNi4zMThjLTEuMzkzIDAtMi41MjMgMS4xMy0yLjUyMyAyLjUyM3MxLjEzIDIuNTIzIDIuNTIzIDIuNTIzeiIgZmlsbD0iIzAwYmNkNCIvPjxwYXRoIGQ9Im0yMS40NTcgNi4zMjNjLTEuMzkxIDAtMi41MTggMS4xMjctMi41MTggMi41MTh2LjAwNSAyLjUyM2gyLjUyMWMxLjM5MyAwIDIuNTIzLTEuMTMgMi41MjMtMi41MjNzLTEuMTMtMi41MjMtMi41MjMtMi41MjNjLS4wMDEgMC0uMDAyIDAtLjAwMyAweiIgZmlsbD0iIzRjYWY1MCIvPjxwYXRoIGQ9Im0xMi42NDEgMi41MjJ2Ni4zMjVjMCAxLjM5MiAxLjEyOSAyLjUyMSAyLjUyMSAyLjUyMXMyLjUyMS0xLjEyOSAyLjUyMS0yLjUyMXYtNi4zMjVjMC0xLjM5Mi0xLjEyOS0yLjUyMS0yLjUyMS0yLjUyMS0xLjM5MiAwLTIuNTIxIDEuMTI5LTIuNTIxIDIuNTIxeiIgZmlsbD0iIzRjYWY1MCIvPjxnIGZpbGw9IiNmZjk4MDAiPjxwYXRoIGQ9Im0xNy42ODIgMjEuNDc2YzAtMS4zOTItMS4xMjktMi41MjEtMi41MjEtMi41MjFoLTIuNTIxdjIuNTIzYy4wMDEgMS4zOTEgMS4xMjkgMi41MTkgMi41MjEgMi41MTlzMi41MjEtMS4xMjkgMi41MjEtMi41MjF6Ii8+PHBhdGggZD0ibTIxLjQ3OSAxMi42NDloLTYuMzE4Yy0xLjM5MyAwLTIuNTIzIDEuMTMtMi41MjMgMi41MjNzMS4xMyAyLjUyMyAyLjUyMyAyLjUyM2g2LjMxOGMxLjM5MyAwIDIuNTIzLTEuMTMgMi41MjMtMi41MjNzLTEuMTMtMi41MjMtMi41MjMtMi41MjN6Ii8+PC9nPjwvc3ZnPg=="
              alt="slack"
            />
          </a>
          <a href="https://twitter.com/layer5" target="_blank" rel="noreferrer">
            <img
              className="twitter"
              height="30px"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iQ2FwYV8xIiB4PSIwIiB5PSIwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIj48cGF0aCBzdHlsZT0iZmlsbDojMDNhOWY0IiBkPSJNNTEyLDk3LjI0OGMtMTkuMDQsOC4zNTItMzkuMzI4LDEzLjg4OC02MC40OCwxNi41NzZjMjEuNzYtMTIuOTkyLDM4LjM2OC0zMy40MDgsNDYuMTc2LTU4LjAxNgljLTIwLjI4OCwxMi4wOTYtNDIuNjg4LDIwLjY0LTY2LjU2LDI1LjQwOEM0MTEuODcyLDYwLjcwNCwzODQuNDE2LDQ4LDM1NC40NjQsNDhjLTU4LjExMiwwLTEwNC44OTYsNDcuMTY4LTEwNC44OTYsMTA0Ljk5MgljMCw4LjMyLDAuNzA0LDE2LjMyLDIuNDMyLDIzLjkzNmMtODcuMjY0LTQuMjU2LTE2NC40OC00Ni4wOC0yMTYuMzUyLTEwOS43OTJjLTkuMDU2LDE1LjcxMi0xNC4zNjgsMzMuNjk2LTE0LjM2OCw1My4wNTYJYzAsMzYuMzUyLDE4LjcyLDY4LjU3Niw0Ni42MjQsODcuMjMyYy0xNi44NjQtMC4zMi0zMy40MDgtNS4yMTYtNDcuNDI0LTEyLjkyOGMwLDAuMzIsMCwwLjczNiwwLDEuMTUyCWMwLDUxLjAwOCwzNi4zODQsOTMuMzc2LDg0LjA5NiwxMDMuMTM2Yy04LjU0NCwyLjMzNi0xNy44NTYsMy40NTYtMjcuNTIsMy40NTZjLTYuNzIsMC0xMy41MDQtMC4zODQtMTkuODcyLTEuNzkyCWMxMy42LDQxLjU2OCw1Mi4xOTIsNzIuMTI4LDk4LjA4LDczLjEyYy0zNS43MTIsMjcuOTM2LTgxLjA1Niw0NC43NjgtMTMwLjE0NCw0NC43NjhjLTguNjA4LDAtMTYuODY0LTAuMzg0LTI1LjEyLTEuNDQJQzQ2LjQ5Niw0NDYuODgsMTAxLjYsNDY0LDE2MS4wMjQsNDY0YzE5My4xNTIsMCwyOTguNzUyLTE2MCwyOTguNzUyLTI5OC42ODhjMC00LjY0LTAuMTYtOS4xMi0wLjM4NC0xMy41NjgJQzQ4MC4yMjQsMTM2Ljk2LDQ5Ny43MjgsMTE4LjQ5Niw1MTIsOTcuMjQ4eiIvPjwvc3ZnPg=="
              alt="twitter"
            />
          </a>
          <a
            href="https://github.com/layer5io"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <img
              height="30px"
              src={github}
              //src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeD0iMCIgeT0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjc0LjEgMjY3LjMiIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI3NC4xIDI2Ny4zIj48cGF0aCBkPSJNMTM3LjEsMEM2MS40LDAsMCw2MS4zLDAsMTM2LjlDMCwxOTYsMzcuOCwyNDguNCw5My44LDI2N2M2LjgsMS4zLDkuMy0zLDkuMy02LjZjMC0zLjMtMC4xLTExLjktMC4yLTIzLjMJYy0zOC4xLDguMy00Ni4xLTE4LjQtNDYuMS0xOC40Yy02LjItMTUuOC0xNS4yLTIwLTE1LjItMjBjLTEyLjQtOC41LDAuOS04LjMsMC45LTguM2MxMy43LDEsMjEsMTQuMSwyMSwxNC4xCWMxMi4yLDIwLjksMzIuMSwxNC45LDM5LjksMTEuNGMxLjItOC45LDQuOC0xNC45LDguNy0xOC4zYy0zMC40LTMuNS02Mi40LTE1LjItNjIuNC02Ny43Yy0wLjItMTMuNiw0LjgtMjYuOCwxNC4xLTM2LjgJYy0xLjQtMy41LTYuMS0xNy40LDEuMy0zNi4zYzAsMCwxMS41LTMuNywzNy43LDE0YzExLjItMy4xLDIyLjctNC42LDM0LjMtNC42YzExLjYsMC4xLDIzLjEsMS42LDM0LjMsNC42CWMyNi4yLTE3LjcsMzcuNi0xNCwzNy42LTE0YzcuNSwxOC45LDIuOCwzMi44LDEuNCwzNi4zYzkuMywxMCwxNC4zLDIzLjIsMTQuMSwzNi44YzAsNTIuNi0zMiw2NC4yLTYyLjUsNjcuNgljNC45LDQuMiw5LjMsMTIuNiw5LjMsMjUuNGMwLDE4LjMtMC4yLDMzLjEtMC4yLDM3LjZjMCwzLjcsMi41LDcuOSw5LjQsNi42YzcxLjgtMjQsMTEwLjUtMTAxLjcsODYuNS0xNzMuNQlDMjQ4LjMsMzcuNywxOTYsMCwxMzcuMSwwTDEzNy4xLDB6Ii8+PC9zdmc+"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/layer5"
            target="_blank"
            rel="noreferrer"
          >
            <img
              classN="linkedin"
              height="30px"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzA2OSIgZD0ibTQ3NS4wNzQyMTkgMGgtNDM4LjE0ODQzOGMtMjAuMzk0NTMxIDAtMzYuOTI1NzgxIDE2LjUzMTI1LTM2LjkyNTc4MSAzNi45MjU3ODF2NDM4LjE0ODQzOGMwIDIwLjM5NDUzMSAxNi41MzEyNSAzNi45MjU3ODEgMzYuOTI1NzgxIDM2LjkyNTc4MWg0MzguMTQ4NDM4YzIwLjM5NDUzMSAwIDM2LjkyNTc4MS0xNi41MzEyNSAzNi45MjU3ODEtMzYuOTI1Nzgxdi00MzguMTQ4NDM4YzAtMjAuMzk0NTMxLTE2LjUzMTI1LTM2LjkyNTc4MS0zNi45MjU3ODEtMzYuOTI1Nzgxem0tMjkzLjQ2NDg0NCAzODdoLTYyLjM0NzY1NnYtMTg3LjU3NDIxOWg2Mi4zNDc2NTZ6bS0zMS4xNzE4NzUtMjEzLjE4NzVoLS40MDYyNWMtMjAuOTIxODc1IDAtMzQuNDUzMTI1LTE0LjQwMjM0NC0zNC40NTMxMjUtMzIuNDAyMzQ0IDAtMTguNDA2MjUgMTMuOTQ1MzEzLTMyLjQxMDE1NiAzNS4yNzM0MzctMzIuNDEwMTU2IDIxLjMyODEyNiAwIDM0LjQ1MzEyNiAxNC4wMDM5MDYgMzQuODU5Mzc2IDMyLjQxMDE1NiAwIDE4LTEzLjUzMTI1IDMyLjQwMjM0NC0zNS4yNzM0MzggMzIuNDAyMzQ0em0yNTUuOTg0Mzc1IDIxMy4xODc1aC02Mi4zMzk4NDR2LTEwMC4zNDc2NTZjMC0yNS4yMTg3NS05LjAyNzM0My00Mi40MTc5NjktMzEuNTg1OTM3LTQyLjQxNzk2OS0xNy4yMjI2NTYgMC0yNy40ODA0NjkgMTEuNjAxNTYzLTMxLjk4ODI4MiAyMi44MDA3ODEtMS42NDg0MzcgNC4wMDc4MTMtMi4wNTA3ODEgOS42MDkzNzUtMi4wNTA3ODEgMTUuMjE0ODQ0djEwNC43NWgtNjIuMzQzNzVzLjgxNjQwNy0xNjkuOTc2NTYyIDAtMTg3LjU3NDIxOWg2Mi4zNDM3NXYyNi41NTg1OTRjOC4yODUxNTctMTIuNzgxMjUgMjMuMTA5Mzc1LTMwLjk2MDkzNyA1Ni4xODc1LTMwLjk2MDkzNyA0MS4wMTk1MzEgMCA3MS43NzczNDQgMjYuODA4NTkzIDcxLjc3NzM0NCA4NC40MjE4NzR6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPjwvZz48L3N2Zz4="
              alt="linkedin"
            />
          </a>
          <a
            className="youtube_icon"
            href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="youtube"
              height="30px"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeD0iMCIgeT0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDM1OC41IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgMzU4LjUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOnJlZH0uc3Qxe2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGQ9Ik01MDEuNSw1Ni4xYy01LjktMjEuOS0yMy4yLTM5LjItNDUuMS00NS4xQzQxNi4zLDAsMjU2LDAsMjU2LDBTOTUuNywwLDU1LjcsMTAuNQljLTIxLjUsNS45LTM5LjIsMjMuNi00NS4xLDQ1LjVDMCw5Ni4yLDAsMTc5LjIsMCwxNzkuMnMwLDgzLjUsMTAuNSwxMjMuMWM1LjksMjEuOSwyMy4yLDM5LjIsNDUuMSw0NS4xYzQwLjUsMTEsMjAwLjMsMTEsMjAwLjMsMTEJczE2MC4zLDAsMjAwLjMtMTAuNWMyMS45LTUuOSwzOS4yLTIzLjIsNDUuMS00NS4xQzUxMiwyNjIuNyw1MTIsMTc5LjcsNTEyLDE3OS43UzUxMi40LDk2LjIsNTAxLjUsNTYuMXoiIGNsYXNzPSJzdDAiLz48cGF0aCBkPSJNMjA1LDI1NmwxMzMuMy03Ni44TDIwNSwxMDIuNVYyNTZ6IiBjbGFzcz0ic3QxIi8+PC9zdmc+"
              alt="youtube"
            />
          </a>
          <a
            className="docker_icon"
            href="https://hub.docker.com/u/layer5/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="docker"
              height="30px"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeD0iMCIgeT0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDYwIDMyMi4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjAgMzIyLjEiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiMwOTljZWN9PC9zdHlsZT48ZyBpZD0iX3gzOV83LWRvY2tlciI+PGc+PGc+PHJlY3Qgd2lkdGg9IjQ3LjUiIGhlaWdodD0iNDMuMiIgeD0iMjA0IiB5PSI1Mi4zIiBjbGFzcz0ic3QwIi8+PHJlY3Qgd2lkdGg9IjQ3LjUiIGhlaWdodD0iNDIuNyIgeD0iMjA0IiB5PSIxMDQuMSIgY2xhc3M9InN0MCIvPjxyZWN0IHdpZHRoPSI0Ny41IiBoZWlnaHQ9IjQzLjIiIHg9IjE0Ny45IiB5PSI1Mi4zIiBjbGFzcz0ic3QwIi8+PHJlY3Qgd2lkdGg9IjQ3LjUiIGhlaWdodD0iNDIuNyIgeD0iMjYwLjIiIHk9IjEwNC4xIiBjbGFzcz0ic3QwIi8+PHJlY3Qgd2lkdGg9IjQ3LjUiIGhlaWdodD0iNDMuNiIgeD0iMjA0IiBjbGFzcz0ic3QwIi8+PHJlY3Qgd2lkdGg9IjQ3LjUiIGhlaWdodD0iNDMuMiIgeD0iOTEuNyIgeT0iNTIuMyIgY2xhc3M9InN0MCIvPjxyZWN0IHdpZHRoPSI0Ny41IiBoZWlnaHQ9IjQyLjciIHg9IjE0Ny45IiB5PSIxMDQuMSIgY2xhc3M9InN0MCIvPjxwYXRoIGQ9Ik00NTAuNCwxMjQuMWMtMTAuNC03LTM0LjItOS41LTUyLjUtNmMtMi40LTE3LjItMTItMzIuMy0yOS41LTQ1LjhsLTEwLjEtNi43bC02LjcsMTAuMSBjLTEzLjIsMjAtMTYuOCw1Mi45LTIuNyw3NC42Yy02LjMsMy40LTE4LjUsOC0zNC44LDcuN0gxLjhjLTYuMywzNi41LDQuMiw4My45LDMxLjYsMTE2LjVDNjAsMzA2LDEwMCwzMjIuMSwxNTIuMywzMjIuMSBjMTEzLjEsMCwxOTYuOS01Mi4xLDIzNi0xNDYuOGMxNS40LDAuMyw0OC42LDAuMSw2NS42LTMyLjVjMS4xLTEuOCw0LjctOS41LDYuMS0xMi4zTDQ1MC40LDEyNC4xeiIgY2xhc3M9InN0MCIvPjxwb2x5Z29uIHBvaW50cz0iODMuMiAxMDQuMSA4My4xIDEwNC4xIDM1LjcgMTA0LjEgMzUuNyAxNDYuOCA4My4yIDE0Ni44IiBjbGFzcz0ic3QwIi8+PHJlY3Qgd2lkdGg9IjQ3LjUiIGhlaWdodD0iNDIuNyIgeD0iOTEuNyIgeT0iMTA0LjEiIGNsYXNzPSJzdDAiLz48L2c+PC9nPjwvZz48L3N2Zz4="
              alt="docker"
            />
          </a>
        </Icondiv>
      </Copyrightdiv>
    </Footerdiv>
  );
};

export default Footer;
