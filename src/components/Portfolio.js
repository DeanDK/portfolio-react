import React from "react";

import Navigation from "./Navigation.js";
import First from "./Cards/First";

const Portfolio = () => {
  return (
    <div>
      <Navigation />
      <div className="xop-section">
        <ul className="xop-grid">
          <li>
            <div className="xop-box xop-img-1">
              <a href="#">
                <div className="xop-info">
                  <h3>Paint</h3>
                  <p>
                    Nulla commodo iaculis vulputate. Nullam enim mauris,
                    dignissim id est nec, mollis pretium nulla.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="xop-box xop-img-2">
              <a href="#">
                <div className="xop-info">
                  <h3>Soap</h3>
                  <p>
                    Nulla commodo iaculis vulputate. Nullam enim mauris,
                    dignissim id est nec, mollis pretium nulla.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="xop-box xop-img-3">
              <a href="#">
                <div className="xop-info">
                  <h3>Flowers</h3>
                  <p>
                    Nulla commodo iaculis vulputate. Nullam enim mauris,
                    dignissim id est nec, mollis pretium nulla.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="xop-box xop-img-4">
              <a href="#">
                <div className="xop-info">
                  <h3>Feathers</h3>
                  <p>
                    Nulla commodo iaculis vulputate. Nullam enim mauris,
                    dignissim id est nec, mollis pretium nulla.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="xop-box xop-img-5">
              <a href="#">
                <div className="xop-info">
                  <h3>Feathers</h3>
                  <p>
                    Nulla commodo iaculis vulputate. Nullam enim mauris,
                    dignissim id est nec, mollis pretium nulla.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="xop-box xop-img-6">
              <a href="#">
                <div className="xop-info">
                  <h3>Feathers</h3>
                  <p>
                    Nulla commodo iaculis vulputate. Nullam enim mauris,
                    dignissim id est nec, mollis pretium nulla.
                  </p>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
