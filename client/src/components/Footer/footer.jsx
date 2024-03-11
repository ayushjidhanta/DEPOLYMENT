import React from "react";
import { Link } from "react-router-dom";
function footer() {

  return (
    <div style={{ fontSize: 18 }}>
      <footer className="bg-green text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                    <label className="form-label" for="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
            Immerse yourself in an extraordinary epicurean journey with Himachal Harvest - Where Gastronomic Bliss Meets Nature's Majestic Splendor!
            </p>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Company</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/about" className="text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Legal
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Useful Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                     Help
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Advertise with us 
                    </a>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Management
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Explore Fruit Varieties</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Apple
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Mango
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Cherry
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Pearl
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "#efefef" }}>
          <a className="text-black" style={{textDecoration:"none"}} href="/home">
            Copyright &copy; Himachal&nbsp;Harvest
          </a>
        </div>
      </footer>
    </div>
  );
}

export default footer;
