import React, { Component } from 'react';
import PageTitle from './PageTitle'

class Contact extends Component {

  render() {
    return (
      <div className="">
        <PageTitle title="Contact Us" location={ {title: "Contact Us", path:"/contact_us"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="nav-section-menu">
                </div>
              </div>
              <div class="col-md-9">
                <h2 class="title-divider">
                  <span>Contact <span class="font-weight-normal text-muted">Us</span></span>
                  <small>Ways to get in touch</small>
                </h2>
                <div class="row">
                  <div class="col-md-6">
                    <form id="contact-form" action="#" role="form">
                      <div class="form-group">
                        <label class="sr-only" for="contact-name">Name</label>
                        <input type="text" class="form-control" id="contact-name" placeholder="Name" />
                        <small id="contact-name-help" class="form-text text-muted">First and last names.</small>
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="contact-email">Email</label>
                        <input type="email" class="form-control" id="contact-email" placeholder="Email" />
                        <small id="contact-email-help" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="contact-message">Message</label>
                        <textarea rows="12" class="form-control" id="contact-message" placeholder="Message"></textarea>
                        <small id="contact-message-help" class="form-text text-muted">Your message and details.</small>
                      </div>
                      <input type="button" class="btn btn-primary" value="Send Message" />
                    </form>
                  </div>
                  <div class="col-md-6">
                    <p>
                      <abbr title="Phone"><i class="fa fa-phone"></i></abbr>
                       0435 123 714
                    </p>
                    <p>
                      <abbr title="Email"><i class="fa fa-envelope"></i></abbr>
                       support@lifelixir.com.au
                    </p>
                    <p>
                      <abbr title="Address"><i class="fa fa-home"></i></abbr>
                       12-14 Cecil St., Gordon, NSW, Sydney, 2072
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
