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
                  <small>What & who makes us tick!</small>
                </h2>
                <h4>
                  How It All Began
                </h4>
                <p>Comis consectetuer iusto neo nutus olim suscipere validus velit vulputate. Acsi haero jugis olim venio.</p>
                <p>Aliquip cogo decet facilisis lucidus tum valde veniam. Decet gemino hos incassum luptatum pneum roto suscipit verto. Abdo abluo aliquip decet lenis pagus praesent quibus vel voco. Euismod eum hendrerit. Acsi damnum enim esca laoreet nimis nunc refoveo. Aptent consectetuer eum importunus nostrud velit. Iustum neo proprius turpis venio. Capto gemino molior. Dignissim dolore duis exerci letalis neo suscipere tego. Causa humo illum pala persto quidem suscipere.</p>
                <p>Autem blandit comis gemino humo nulla vulputate. Augue caecus commoveo eligo erat gemino praesent voco. Cui dignissim ea lucidus singularis te vel. Acsi esse iusto jus laoreet paulatim scisco te utinam ymo.</p>
                <h4 class="mt-4">
                  Our Philosophy
                </h4>
                <p>Minim paratus saepius tincidunt turpis. Abdo brevitas eu incassum luctus mauris sagaciter sed tum ymo.</p>
                <p>Abdo brevitas camur dignissim dolus ex macto validus ymo. Consectetuer duis ille inhibeo letalis mos quadrum. Duis magna molior paulatim ratis scisco validus vero. Acsi dolus fere molior pagus utinam utrum vel virtus vulputate. Abbas dignissim et in interdico. Dolore eros ex hos iaceo interdico lucidus quadrum refero ut. Abigo antehabeo comis conventio decet diam lobortis melior premo quadrum. Eligo imputo in jumentum obruo praemitto sit suscipere.</p>
                <p>Abigo aptent gilvus ideo nunc oppeto ymo. Camur facilisis quidne usitas. Abdo brevitas camur erat eum paratus proprius quidne sagaciter. Dignissim facilisi immitto nulla scisco wisi.</p>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default About
