import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'
import AboutSideMenu from './AboutSideMenu'

class OurSmoothies extends Component {

  render() {
    return (
      <div className="">
        <PageTitle title="Our smoothies" location={ {title: "Our smoothies", path:"/our_smoothies"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <AboutSideMenu active={1} />
              </div>
              <div class="col-md-9">
                <p>

                </p>
                <p>We have harnessed the power of organic fruits and vegetables, superfoods, functional herbs and medicinal mushrooms to bring pioneering food for you. Our elevated foods are a complete meal which gives you essential nutrients and probiotics. We use the power of medicinal ingredients and superfoods so you don't need to integrate dietary supplements into your diet anymore.
</p>
  <p><b>Fruits.</b> Each food comes with a main flavor. You can choose if you rather organic fruits or non oragnic ones.</p>
  <p><b>Superfoods.</b> We only use certified organic superfoods for a specific purpose for each food. These superfoods along with herbs have medicinal effects on your body.</p>
  <p><b>Homemade almond milk.</b> We make our pure almond milk from organic or insecticide free almonds along with electrolyte-enhanced water.</p>
  <p><b>Filtered and electrolyte-enhanced water.</b> We either user coconut water or electrolyte-enhanced water in our food so you make sure when you’re exercising, or if you're outside on a hot day, your body is in a healthy condition. If you’re an athlete, this is essential for your optimal performance (<a href="https://www.ncbi.nlm.nih.gov/pubmed/12056182">1</a>, <a href="https://www.ncbi.nlm.nih.gov/pubmed/17883020">2</a>).</p>
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

export default OurSmoothies
