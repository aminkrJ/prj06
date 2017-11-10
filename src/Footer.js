import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <footer id="footer" class="p-0">
        <div class="container pt-6 pb-5">
          <div class="row">

            <div class="col-md-4">
              <h4 class="text-uppercase text-white">
                Contact Us
              </h4>
              <address>
                <ul class="list-unstyled">
                  <li>
                    <abbr title="Phone"><i class="fa fa-phone fa-fw"></i></abbr>
      0435 123 714
                  </li>
                  <li>
                    <abbr title="Email"><i class="fa fa-envelope fa-fw"></i></abbr>
                    support@lifelixir.com.au
                  </li>
                  <li>
                    <abbr title="Address"><i class="fa fa-home fa-fw"></i></abbr>
                    12-14 Cecil St., Gordon, NSW, Sydney, 2072
                  </li>
                </ul>
              </address>
            </div>
            
            <div class="col-md-4">
              <h4 class="text-uppercase text-white">
                About Us
              </h4>
              <p>Electrolytes, natural cognitive compounds, antioxidants, live enzymes, vitamin and minerals are essentials which can be traced in every single LifeElixir drinks.</p>
            </div>
            
            <div class="col-md-4">
              <h4 class="text-uppercase text-white">
                Newsletter
              </h4>
              <p>Stay up to date with our latest news and product releases by signing up to our newsletter.</p>
              <form>
                <div class="input-group">
                  <label class="sr-only" for="email-field">Email</label>
                  <input type="text" class="form-control" id="email-field" placeholder="Email" />
                  <span class="input-group-btn">
                    <button class="btn btn-primary" type="button">Go!</button>
                  </span>
                </div>
              </form>
            </div>

          </div>
        </div>
        <hr class="my-0 hr-blank op-2" />
        <div class="bg-inverse-dark text-sm py-3">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <p class="mb-0">Copyright 2017 &copy; Personalised Nutrition</p>
              </div>
              <div class="col-md-6">
                <ul class="list-inline footer-links float-md-right mb-0">
                  <li class="list-inline-item"><Link to="/find_us">Find Us</Link></li>
                  <li class="list-inline-item"><Link to="/contact_us">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <a href="#top" class="btn btn-icon btn-inverse pos-fixed pos-b pos-r mr-3 mb-3 scroll-state-hidden" title="Back to top"><i class="fa fa-chevron-up"></i></a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
