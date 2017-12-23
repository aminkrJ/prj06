import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'
import AboutSideMenu from './AboutSideMenu'

class Company extends Component {
  componentDidMount() {
    document.title = "Life Elixir is the first homemade food network with distributed kitchen"
  }

  render() {
    return (
      <div className="">
        <PageTitle title="About us" location={ {title: "About us", path:"/about"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <AboutSideMenu active={3} />
              </div>
              <div class="col-md-9">
                <p class="lead">The first homemade food network with distributed kitchens.</p>
                <p>In Life Elixir we believe a good food changes your physiology in cellular level which will affect your thoughts and consequently the actions you take.</p>

                <h4>Distributed kitchens</h4>
                <p>we empower passionate individuals with education, equipment, the and market they need to start their own restaurant business quickly. Like to join our maker's community, <Link to="./contact">contact us</Link> and start making money soon.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Company
