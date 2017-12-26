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
      <p>
We love food but we do not have enought time to think about it or make it ourselves. We tend to eat out or trust weekily meal programs online.  By studying the industry we realised that tones of nonsense additives, flavor enhancers and processes must be used to expand shelf life. Life Elixir is about homemade food without nasty additives and less processes to keep live anzymes.  
</p>
                <h4>Distributed kitchens</h4>
                <p>we empower passionate individuals with education, equipment, the and market they need to start their own restaurant business quickly. Like to join our maker's community, <Link to="./contact">contact us</Link> and start making healthy foods.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Company
