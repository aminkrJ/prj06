import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'
import AboutSideMenu from './AboutSideMenu'
import globals from './globals'

class About extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <div className="">
        <PageTitle title="About us" location={ {title: "About us", path:"/about"} } />
        <div id="content">
          <div class="container">
            <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 class="text-center font-weight-bold my-0 text-slab">
      {globals.about.title}
            </h3>
            <hr class="mb-5 w-50 mx-auto" />
            <div class="row">
              <div class="col-md-6">
                <p class="lead">
      We design tonics and elixirs to heal and improve your body and your brain.
                </p>
                <p></p>
                <p class="">
      There is a direct connection between what we eat and how we feel. We may feel having occasional headaches, joint pains, bloating, brain fogs, chronic fatigues, leaky guts, depression, insomnia, being moody are normal but it is not. In fact it is our brain defence system for creating a new normal to burn less energy.
</p>
<p>
We all know about our mind-body connection and how our thoughts, beliefs can impact our biology. Body-mind connection  is another side of the coin. What we eat, our sleep, our nutrient level, our gut flora, infections to name a few will change the way our brain function.
</p>
                    <h4 class="mb-1 text-slab">
      About our founder
                    </h4>
                    <p>
Life Elixir was created by Amin Karaji: a software engineer and an entrepreneur. Amin had a great awakening when he discovered how our thoughts and beliefs change human behaviour and consequently our reality.
  </p>
  <p>
  Soon enough he realised that this is not only a one-way road. In fact, our body can massively impact our mind, conciseness, thoughts and even our values. Lifelixir is a journey of discovering nutritions to hack, heal, and boost your biology to get the peak performance of your body and brain.
                    </p>
              </div>
              <div class="col-md-6">
                <h4 class="mb-1 text-slab">What is Elixir of Life?</h4>
                <p>Some sources believed the <a href="https://en.wikipedia.org/wiki/Elixir_of_life" target="_blank">Elixir of Life</a> was a magic potion that was drunk from the Holy Grail to provide immortality. In the scriptures of the Hindus, the Elixir of Life is called Amrita. This was a drink for the gods made from the ocean of milk that provided immortality. In Greek texts, the gods drank Nectar or Ambrosia, which provided them with eternal life. Alchemists also present many theories, or symbolic representations and ciphers, on the Elixir of Life.
      </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
