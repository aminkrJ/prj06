import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Benefits from './Benefits'

class Research extends Component {

  render() {
    return(
      <div id="content">
        <div class="container">
          <h2 class="text-center my-0 text-uppercase">
    Think smarter
          </h2>
          <hr class="mb-5 w-50 mx-auto" />
          <div class="row">
            <div class="col-md-6">
              <p>Thoughts and emotions are an emergent property of our biology. To think smarter thoughts and live a happier life, your whole biology - physical, emotional, and chemical - must be changed.
              </p>
              <a class='' name='nootropics'><h5 class='text-uppercase'>natural Nootropics</h5></a>
              <p>Outstanding all-natural plant, herb and root extracts that can improve your memory, elevate your mood, and enhance your learning capacity.</p>
              <a class='' name='adaptogens'><h5 class='text-uppercase'>Adaptogens</h5></a>
              <p>People who experience the fight-or-flight responses, cortisol rise which stimulates your sympathetic nervous system and your adrenal glands, on a regular basis, many times a day, may experience a state of constant stress, which can burn out your adrenal glands, stress your digestive tract and cause you to age more rapidly. Adaptogens are a unique class of healing plants help you respond to any influence or stressor, normalizing your physiological functions.</p>
              <a class='' name='brain-fats'><h5 class='text-uppercase'>Brain Fats</h5></a>
              <p>
     Fueling your brain with fat, in particular, encourages ketosis, which provides energy to the brain and helps protect against brain diseases, among other health benefits. A diet high in monounsaturated fats can also increase production of acetylcholine, a neurotransmitter that plays an important role in learning and memory. 
              </p>
              <a class='' name='gut-health'><h5 class='text-uppercase'>Gut Health</h5></a>
              <p>A troubled intestine can send signals to the brain, just as a troubled brain can send signals to the gut. Therefore, a person's stomach or intestinal distress can be the cause or the product of anxiety, stress, or depression. That's because the brain and the gastrointestinal (GI) system are intimately connected [2, 3, 4].</p>
              <a class='' name='clean-protein'><h5 class='text-uppercase'>Clean Protein</h5></a>
              <p>The body breaks down proteins into building blocks called amino acids. Amino acids are a major component in the hundreds of brain chemicals known as neurotransmitters. Neurotransmitters enable brain cells to communicate with each other. Examples of common neurotransmitters include dopamine, serotonin, GABA, norepinephrine, and endorphins.</p>
              <a class='' name='detox'><h5 class='text-uppercase'>Detox body & brain</h5></a>
              <p>Detoxification helps our body to get nutrition from the food we eat and get rid of toxins stored in our body. On the other hand, our brain has its own maintenance system called the glymphatic system, which uses the cells’ mitochondria to remove cellular waste from the brain. Cleansing your body and your brain from these contaminations can improve your brain function and overall well-being.</p>
            </div>
            <div class="col-md-6">
              <Benefits />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Research
