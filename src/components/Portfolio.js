import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation.js";
import Modal from "./Modals/modal";

class Portfolio extends Component {
  state = {
    modal: false,
    card: ""
  };

  toggle = e => {
    this.setState({
      modal: !this.state.modal,
      card: e
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <Modal modal={this.state.modal} card={this.state.card} />
        <div className="xop-section">
          <ul className="xop-grid">
            <li>
              <div
                className="xop-box xop-img-1"
                onClick={e =>
                  this.toggle("Translate app for Jumpseller Customers")
                }
              >
                <Link to="#">
                  <div className="xop-info">
                    <h3>Translate</h3>
                    <p>
                      Translate web app help customers manually translate most
                      common e-commerce terms to any desired lanugage
                    </p>
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div
                className="xop-box xop-img-2"
                onClick={e =>
                  this.toggle("Mailchimp App for Jumpseller Software")
                }
              >
                <Link to="#">
                  <div className="xop-info">
                    <h3>Mailchimp</h3>
                    <p>
                      Mailchimp web app helps customers to improve their
                      marketing automation and connect with their audience
                    </p>
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div
                className="xop-box xop-img-3"
                onClick={e =>
                  this.toggle("File Upload With ReactJS and multer")
                }
              >
                <Link to="#">
                  <div className="xop-info">
                    <h3>File Upload</h3>
                    <p>
                      File uploading with ReactJS and multer Node.js middleware
                    </p>
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div
                className="xop-box xop-img-4"
                onClick={e =>
                  this.toggle("Product List for Jumpseller Software")
                }
              >
                <Link to="#">
                  <div className="xop-info">
                    <h3>Product List</h3>
                    <p>
                      List of all products associated with Jumpseller store.
                    </p>
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div
                className="xop-box xop-img-5"
                onClick={e =>
                  this.toggle(
                    "Student Knowledge Exchange Platform - Web app for VIA University College"
                  )
                }
              >
                <Link to="#">
                  <div className="xop-info">
                    <h3>SKEP</h3>
                    <p>
                      SKEP is a web app that helps VIA students upload their
                      project/internship experiences and share them with other
                      students.
                    </p>
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div
                className="xop-box xop-img-6"
                onClick={e =>
                  this.toggle(
                    "Blog With RoR based on the Jordan Hudgens course"
                  )
                }
              >
                <Link to="#">
                  <div className="xop-info">
                    <h3>Portfolio</h3>
                    <p>
                      First Portfolio developed while following the Jordan
                      Hudengs course
                    </p>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Portfolio;
