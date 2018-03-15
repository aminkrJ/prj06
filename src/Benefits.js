import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Benefits extends Component {
  render() {
    return (
        <div class="row no-gutters text-center mb-4">
          <div class="col-md-6  p-1">
            <a href= "/shop/tags/2" class="py-6 smart-drugs px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-5 rounded pos-relative">
              <h3 class="text-white mb-0 text-uppercase font-weight-bold text-letter-spacing-sm">
  nootropics
              </h3>
              <p class="text-white text-sm mb-0 text-capitalize">Natural & herbal brain enhancers</p>
            </a>
          </div>
          <div class="col-md-6  p-1">
            <a href="/shop/tags/12" class="py-6 ef-bg-02 px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-5 rounded pos-relative">
              <h3 class="text-white my-0 text-uppercase font-weight-bold text-letter-spacing-sm">
  Adaptogens
              </h3>
              <p class="text-white text-sm mb-0 text-capitalize">Reduce stress</p>
            </a>
          </div>
          <div class="col-md-6  p-1">
            <a href="/shop" class="py-6 ef-bg-03 px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-4 rounded pos-relative">
              <h3 class="text-white mb-0 text-uppercase font-weight-bold text-letter-spacing-sm">
                brain fats
              </h3>
              <p class="text-white text-sm mb-0 text-capitalize">The Rocket fuel</p>
            </a>
          </div>
          <div class="col-md-6  p-1">
            <a href="/shop/tags/5" class="py-6 gut-health px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-5 rounded pos-relative">
              <h3 class="text-white mb-0 text-uppercase font-weight-bold text-letter-spacing-sm">
  Gut health
              </h3>
              <p class="text-white text-sm mb-0 text-capitalize">The second brain</p>
            </a>
          </div>
          <div class="col-md-6 p-1">
            <a href="/shop/tags/13" class="py-6 antioxidant px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-5 rounded pos-relative">
              <h3 class="text-white mb-0 text-uppercase font-weight-bold text-letter-spacing-sm">
  Detox
              </h3>
              <p class="text-white text-sm mb-0 text-capitalize">Cleanse body & brain</p>
            </a>
          </div>
          <div class="col-md-6  p-1">
            <a href="/shop/tags/1" class="py-6 ef-bg-04 px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-5 rounded pos-relative">
              <h3 class="text-white mb-0 text-uppercase font-weight-bold text-letter-spacing-sm">
  Clean protein
              </h3>
              <p class="text-white text-sm mb-0 text-capitalize">Lean & strong</p>
            </a>
          </div>
        </div>
    )
  }
}

export default Benefits
