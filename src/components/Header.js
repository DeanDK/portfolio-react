import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      text: "Hi, i'm Dean. A 1JavaScript2 developer.",
      print: ""
    };
  }

  componentWillMount() {
    this.writeText();
  }

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
        <div className="container-header">
          <div className="typing-text">
            <h2 dangerouslySetInnerHTML={{ __html: this.state.print }} />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
