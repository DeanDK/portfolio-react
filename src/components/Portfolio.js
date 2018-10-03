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
                      Nulla commodo iaculis vulputate. Nullam enim mauris,
                      dignissim id est nec, mollis pretium nulla.
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
                      Nulla commodo iaculis vulputate. Nullam enim mauris,
                      dignissim id est nec, mollis pretium nulla.
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
                      Nulla commodo iaculis vulputate. Nullam enim mauris,
                      dignissim id est nec, mollis pretium nulla.
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
                      Nulla commodo iaculis vulputate. Nullam enim mauris,
                      dignissim id est nec, mollis pretium nulla.
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
                    <h3>Student Exhange</h3>
                    <p>
                      Nulla commodo iaculis vulputate. Nullam enim mauris,
                      dignissim id est nec, mollis pretium nulla.
                    </p>
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div
                className="xop-box xop-img-6"
                onClick={e => this.toggle("Feedback App - Personal Project")}
              >
                <Link to="#">
                  <div className="xop-info">
                    <h3>Feedback</h3>
                    <p>
                      Nulla commodo iaculis vulputate. Nullam enim mauris,
                      dignissim id est nec, mollis pretium nulla.
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
