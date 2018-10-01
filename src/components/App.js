import React, { Component } from "react";

import Header from "./Header.js";

class App extends Component {
  state = {
    text: "Hi! I am Dean. JS junior developer. Good to see you here : ) ",
    print: ""
  };

  componentWillMount = () => {
    this.writeText();
  };

  interaction = () => {
    Array.from(document.getElementsByClassName("letter")).forEach(letter => {
      letter.addEventListener("mouseover", e => {
        letter.classList.add("hovered");
      });
      letter.addEventListener("animationend", e => {
        letter.classList.remove("hovered");
      });
    });
  };

  writeText() {
    const formatedText = this.state.text.split("");
    let print = "";

    const loop = setInterval(() => {
      if (formatedText.length >= 1) {
        if (formatedText[0] === "1") {
          print += "<mark>";
          formatedText.shift();
        } else if (formatedText[0] === "2") {
          print += "</mark>";
          formatedText.shift();
        } else {
          print += formatedText.shift();
          this.setState({ print });
        }
      } else {
        clearInterval(loop);
      }
    }, 90);
  }
  render() {
    return (
      <div>
        <div id="links">
          <button className="purple">About</button>
          <button className="blue">Portfolio</button>
          <button className="green">Contact</button>
        </div>
        <div id="content">
          <div id="name">
            <span className="logo" onMouseEnter={this.interaction}>
              <span id="d" className="letter">
                D
              </span>
              <span id="e" className="letter">
                E
              </span>
              <span id="a" className="letter">
                A
              </span>
              <span id="n" className="letter">
                N
              </span>
            </span>
            <span className="logo">
              <span id="b" className="letter">
                B
              </span>
              <span id="o" className="letter">
                O
              </span>
              <span id="z" className="letter">
                Z
              </span>
              <span id="i" className="letter">
                i
              </span>
              <span id="c" className="letter">
                C
              </span>
            </span>
          </div>
        </div>

        <Header />
      </div>
    );
  }
}

export default App;
