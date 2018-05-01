import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames'
import PageTitle from './PageTitle'

class Privacy extends Component {
  render() {
    return (
      <div className="">
        <PageTitle title="Privacy Policy" location={ {title: "Privacy Policy", path:"/privacy-policy"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
  <div class="text-sm my-5">
<p>
This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from https://lifelixir.com.au (the “Site”).
</p>
<h4>PERSONAL INFORMATION WE COLLECT</h4>

<p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."</p>

<p>We collect Device Information using the following technologies:</p>

  <ul>
    <li>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
    </li>
    <li>
    “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
    </li>
  </ul>

<p>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.  We refer to this information as “Order Information.”</p>

<p>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>

<h4>HOW DO WE USE YOUR PERSONAL INFORMATION?</h4>

<p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to:</p>
<p>Communicate with you;</p>
<p>Screen our orders for potential risk or fraud; and</p>
<p>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</p>
<p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>

<h4>SHARING YOUR PERSONAL INFORMATION</h4>

<p>We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>

<h4>CHANGES</h4>
<p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>

<h4>CONTACT US</h4>
<p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at support@lifelixir.com.au or by mail using the details provided below:</p>

  <p>15/12-14 Cecil st., Gordon, Sydney, ACT, 2072, Australia</p>
  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Privacy
