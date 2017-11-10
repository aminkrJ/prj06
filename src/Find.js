import React, { Component } from 'react';
import PageTitle from './PageTitle'

class Find extends Component {

  render() {
    return (
      <div className="">
        <PageTitle title="Find Us" location={ {title: "Find Us", path:"/find_us"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="nav-section-menu">
                </div>
              </div>
              <div class="col-md-9">
                <h2 class="title-divider">
                  <span>Events <span class="font-weight-normal text-muted"></span></span>
                </h2>
                <div class="timeline timeline-left">
                  <div class="timeline-marker"></div>
                  <div class="timeline-item timeline-item-first animated fadeIn de-02">
                    <div class="timeline-item-date">19th Nov 2017</div>
                    <h5 class="timeline-item-title">
      Marrickville vegan market, Sydney
                    </h5>
                    <p class="timeline-item-description">The market will be a go-to for food, coffee, homewares and vegan-friendly fashion. Start with burgers or Middle Eastern street food before moving into ice-cream, chocolate and cheese.</p>
                  </div>
                  <div class="timeline-marker timeline-marker-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default Find
