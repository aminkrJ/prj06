import React, { Component } from 'react';
import PageTitle from './PageTitle'

class About extends Component {

  render() {
    return (
      <div className="">
        <PageTitle title="About Us" location={ {title: "About Us", path:"/about"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="nav-section-menu">
                </div>
              </div>
              <div class="col-md-9">
                <h2 class="title-divider">
                  <span>About <span class="font-weight-normal text-muted">Us</span></span>
                  <small></small>
                </h2>
                <p>
Electrolytes, natural cognitive compounds, antioxidants, live enzymes, vitamin and minerals are essentials which can be traced in every single LifeElixir drinks. That’s why we believe integrating LifeElixir to your diet is imperative to an individual health and happiness.

</p>
                <p>We have harnessed the power of organic fruits and vegetables, superfoods, functional herbs and mushrooms to bring pioneering drinks for you.
</p>
  <p>Don’t worry if you are busy or don’t have time for long shopping lists, our mission is to deliver our smoothies, elixir and tonics readily to wherever you are right now!
  </p>

                <h4 class="mt-4">
                  Make it at home
                </h4>
                <p>We deliver ingredients to your doorstep. Simply choose the program and you will recieve the ingredinets and recipes to make fresh smoothies and elixirs at home.</p>

                <h4 class="mt-4">
                  LifeElixir programs
                </h4>
                <p><b>Tast is important but we offer more.</b> By studying current scientific researches and interviewing leaders we connected the dots to outline perfect plans for <b>getting result</b>. We have designed programs to help people from enhancing body and mind performance to healing illnesses. It is recommended to integrate these recipes to your daily diet to get the most out of it.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default About
