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
                <h2 class="title-divider">
                  <span>Contact <span class="font-weight-normal text-muted">Us</span></span>
                  <small>Ways to get in touch</small>
                </h2>
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
                  (02) 8005 7976
                </p>
                <p>
                  <abbr title="Email"><i class="fa fa-envelope"></i></abbr>
                  support@lifelixir.com.au
                </p>
                <p>
                  <abbr title="Address"><i class="fa fa-home"></i></abbr>
                  15/12 Cecil St., Gordon, NSW, 2072
                </p>

              <h4 class="title-divider py-3">
                <span>Social media</span>
              </h4>
              <ul class="list-unstyled social-media-branding">
                <li>
                  <a href="https://www.instagram.com/lifelixir/" class="social-link branding-instagram"><i class="fa fa-instagram fa-fw"></i> Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/LifeElixirAU/" class="social-link branding-facebook"><i class="fa fa-facebook-square fa-fw"></i> Facebook</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCJ4Hs8y51ixuzRHniphYPNQ" class="social-link branding-youtube"><i class="fa fa-youtube-play fa-fw"></i> YouTube</a>
                </li>
              </ul>
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
