import React, { Component } from 'react';
import PageTitle from './PageTitle'

class Contact extends Component {

  render() {
    return (
      <div className="">
        <PageTitle title="Contact Us" location={ {title: "Contact Us", path:"/contact"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="nav-section-menu">
                </div>
              </div>
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-6">
                    <form id="contact-form" action="https://formspree.io/support@lifelixir.com.au" method="POST" role="form">
                      <input type="hidden" name="_next" value="//lifelixir.com.au/thanks" />
                      <div class="form-group">
                        <label class="sr-only" for="contact-name">Name</label>
                        <input type="text" class="form-control" id="contact-name" placeholder="Name" name="name" />
                        <small id="contact-name-help" class="form-text text-muted">First and last names.</small>
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="contact-email">Email</label>
                        <input type="email" class="form-control" id="contact-email" placeholder="Email" name="_replyto" />
                        <small id="contact-email-help" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="contact-message">Message</label>
                        <textarea rows="12" class="form-control" id="contact-message" placeholder="Message" name="message"></textarea>
                        <small id="contact-message-help" class="form-text text-muted">Your message and details.</small>
                      </div>
                      <input type="submit" class="btn btn-primary" value="Send Message" />
                    </form>
                  </div>
                  <div class="col-md-6">
                <p>
                  <abbr title="Phone"><i class="fa fa-phone"></i></abbr>
                  &nbsp; (02) 8005 7976
                </p>
                <p>
                  <abbr title="Email"><i class="fa fa-envelope"></i></abbr>
                  &nbsp; support@lifelixir.com.au
                </p>
                <p>
                  <abbr title="Address"><i class="fa fa-home"></i></abbr>
                  &nbsp; 15/12 Cecil St., Gordon, NSW, 2072
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
