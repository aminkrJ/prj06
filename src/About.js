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
                    <Link to="/about" class="nav-link first active">
                      Our smoothies
                      <small>Carefully crafted</small>
                      <i class="fa fa-angle-right"></i>
                    </Link>
                    <Link to="/delivery" class="nav-link">
                      Delivery info
                      <small>Menu or bundles</small>
                      <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <p class="lead">Food for high performers.</p>
                <p>Food changes your physiology in cellular level which will effects your thoughts and consequently the actions you take in a daily basis.</p>
                <h4>What you get?</h4>
                <p>We have harnessed the power of organic fruits and vegetables, superfoods, functional herbs and medicinal mushrooms to bring pioneering smoothies for you. Our smoothies offer more diverse flavors using natural ingredients only, providing consumers with new and amazing experiences. LifeElixir is all about quality, care, passion, great ingredients, effectiveness and most importantly pronounced flavors.
</p>
  <p><b>Fruits.</b> Each smoothie comes with a main flavor. You can choose if you rather organic fruits or non oragnic ones.</p>
  <p><b>Superfoods.</b> We only use certified organic superfoods for a specific purpose for each smoothies. These superfoods along with herbs have medicinal effects on your body.</p>
  <p><b>Homemade almond milk.</b> We make our pure almond milk from organic or insecticide free almonds along with electrolyte-enhanced water.</p>
  <p><b>Filtered and electrolyte-enhanced water.</b> We either user coconut water or electrolyte-enhanced water in our smoothies so you make sure when you’re exercising, or if you're outside on a hot day, your body is in a healthy condition. If you’re an athlete, this is essential for your optimal performance (<a href="https://www.ncbi.nlm.nih.gov/pubmed/12056182">1</a>, <a href="https://www.ncbi.nlm.nih.gov/pubmed/17883020">2</a>).</p>
  <p>
                  <b>Herbs. </b>
                  Modern science has now shown that herbs do indeed carry remarkable health benefits. For example, cinnamon lowers blood sugar levels and has a powerful anti-Diabetic effect (<a href="https://www.ncbi.nlm.nih.gov/pubmed/16190627">1</a>, <a href="https://www.ncbi.nlm.nih.gov/pubmed/21538147">2</a>, <a href="https://www.ncbi.nlm.nih.gov/pubmed/19930003">3</a>), turmeric with powerful anti-inflammatory effects (<a href="https://www.ncbi.nlm.nih.gov/pubmed/17569207">1</a>, <a href="https://www.ncbi.nlm.nih.gov/pubmed/19594223">2</a>), ginger can treat Nausea and has anti-inflammatory properties (<a href="https://www.ncbi.nlm.nih.gov/pubmed/10793599">1</a>, <a href="https://www.ncbi.nlm.nih.gov/pubmed/20418184">2</a>)
  </p>
  <p><b>Medicinal Mushrooms.</b> Human use of medicinal mushrooms has a long history, and the valuable medicines of mushrooms are a vital element in protecting our health. Numerous studies show that mushrooms are vital, biologically active compounds with significant protective effects such as fighting cancer, improve immunity and lower inflammation, support energy and improve brain function.</p>
  <p><b>Probiotics. </b> Your body is full of bacteria, both good and bad. Probiotics are often called <b>good</b> or <b>helpful</b> bacteria because they help keep your gut healthy.</p>

                <h4>Customisable</h4>
                    <p>Each <Link to="/bundles">bundle</Link> can be customised. You can choose the type of yogurt(vegan or non vegan), nuts(activated or not activated), fruits(organic and non organic) in each order.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default About
