import React from "react";
import { Link } from "react-router-dom";
function footer() {

  return (
    <div style={{ fontSize: 18 }}>
      <footer class="bg-green text-center text-white">
        <div class="container p-4">
          <section class="mb-4">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-google"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>

          <section class="">
            <form action="">
              <div class="row d-flex justify-content-center">
                <div class="col-auto">
                  <p class="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div class="col-md-5 col-12">
                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      class="form-control"
                    />
                    <label class="form-label" for="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>

                <div class="col-auto">
                  <button type="submit" class="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section class="mb-4">
            <p>
            Immerse yourself in an extraordinary epicurean journey with Himachal Harvest - Where Gastronomic Bliss Meets Nature's Majestic Splendor!
            </p>
          </section>

          <section class="">
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Company</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <Link to="/about" class="text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Legal
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Useful Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">
                     Help
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Advertise with us 
                    </a>
                  </li>
                  <li>
                    <Link to="/privacy" class="text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Management
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Explore Fruit Varieties</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">
                      Apple
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Mango
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Cherry
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Pearl
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div class="text-center p-3" style={{ backgroundColor: "#efefef" }}>
          <a class="text-black" style={{textDecoration:"none"}} href="/home">
            Copyright &copy; Himachal&nbsp;Harvest
          </a>
        </div>
      </footer>
    </div>
  );
}

export default footer;
