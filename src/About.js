import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                  <div class="nav nav-list">
                    <span class="nav-header">In This Section</span> 
                    <a href="about.html" class="nav-link first active">
                      About Us 
                      <small>Basic Version</small>
                      <i class="fa fa-angle-right"></i>
                    </a>
                    <a href="about-extended.html" class="nav-link">
                      About Us 
                      <small>Extended Version</small>
                      <i class="fa fa-angle-right"></i>
                    </a>
                    <a href="about-me.html" class="nav-link">
                      About Me 
                      <small>More About Me</small>
                      <i class="fa fa-angle-right"></i>
                    </a>
                    <a href="team.html" class="nav-link">
                      The Team 
                      <small>Team List</small>
                      <i class="fa fa-angle-right"></i>
                    </a>
                    <a href="team-grid.html" class="nav-link">
                      The Team 
                      <small>Team Grid</small>
                      <i class="fa fa-angle-right"></i>
                    </a>
                    <a href="team-member.html" class="nav-link">
                      Team Member 
                      <small>Individual Display</small>
                      <i class="fa fa-angle-right"></i>
                    </a>
                    <a href="contact.html" class="nav-link">
                      Contact Us
                      <small>How to get in touch</small>
                      <i class="fa fa-angle-right"></i>
                    </a>
                    <a href="contact.php" class="nav-link">
                      Contact Us (PHP)
                      <small>How to get in touch</small>
                      <i class="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <h2 class="title-divider">
                  <span>About <span class="font-weight-normal text-muted">Us</span></span>
                  <small>The quality of your food determines the quality of your thoughts.</small>
                </h2>
                <p>
Electrolytes, natural cognitive compounds, antioxidants, live enzymes, vitamin and minerals are essentials which can be traced in every single LifeElixir drinks. That’s why we believe integrating LifeElixir to your diet is imperative to an individual health and happiness.

</p>
                <p>We have harnessed the power of organic fruits and vegetables, superfoods, functional herbs and mushrooms to bring pioneering drinks for you. Our smoothies offer more diverse flavours using natural ingredients only, providing consumers with new and amazing experiences. Life Elixir is all about quality, care, passion, great ingredients, effectiveness and most importantly pronounced flavours.

</p>
  <p>Don’t worry if you are busy or don’t have time for long shopping lists, our mission is to deliver our smoothies, elixir and tonics readily to wherever you are.
  </p>

                <h4 class="mt-4">
      Suitable for all diets
                </h4>
                <p>
      We use all plant based ingredints in making our smoothies thus it is suitable for vegan and vegetarian diet. Besides, no chemicals or preservatives in our smoothies. With less carbs and more in healthy fats and protein it is a perfect meal for people with <Link to="https://en.wikipedia.org/wiki/Paleolithic_diet">Paleo diet</Link> and <Link to="https://en.wikipedia.org/wiki/Ketogenic_diet">Ketogenic diet</Link>. Moreover, we rather our water to be purified, electrolyte-enhanced and alkaline.
                </p>
                <h4 class="mt-4">
      Drink it next day or Uber it now!
                </h4>
                <p>We are committed to freshness thats why we have designed a new delivey system that guarantees quick delivery, less than 5h from production, accross Australia.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default About
