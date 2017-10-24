import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <div data-toggle="sticky">
            <div className="header py-1 py-lg-0">
              <div className="header-inner container">
                <div className="header-brand">
                  <a className="header-brand-text header-brand-text-sm" href="#" title="Home">
                    <h1>
                      <span>Life</span>
                      Elixir
                    </h1>
                  </a>
                  <div className="header-divider d-none d-lg-block"></div>
                  <div className="header-slogan text-sm d-none d-lg-block">Food is medicine</div>
                </div>
                <div className="header-block order-12">
                  <a href="#top" className="btn btn-link btn-icon text-white op-6 header-btn float-right d-lg-none" data-toggle="jpanel-menu" data-target=".navbar-main" data-direction="right"> <i className="fa fa-bars"></i> </a>
                </div>
                <div className="navbar navbar-expand-md">
                  <div className="navbar-main collapse">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="highlighted">
          <div className="bg-white overlay overlay-gradient-flip overlay-op-8 text-center text-lg-left py-5 py-lg-10 flex-valign">
            <div>
              <div className="container pt-6">
                <h2 className="display-4 text-white mb-3">
                  <span className="font-weight-bold">Anti-inflammatory</span>
                </h2>
                <h4 className="text-white">
                  Free 7 day program and recipes
                </h4>
                <form className="row mb-2 w-auto w-lg-80 pos-relative align-items-center">
                  <div className="col-lg-9 mb-3">
                    <i className="fa fa-envelope-o text-white icon-2x pos-absolute pos-l mt-2 ml-3 d-none d-lg-block"></i>
                    <input className="form-control form-control-lg form-control-transparent form-control-dark text-center text-lg-left pl-lg-5" type="text" placeholder="Your email here" ></input>
                    <hr className="hr-inverse hr-lg mx-auto mt-1 mb-0" />
                  </div>
                  <div className="col-lg-3">
                    <a href="#content" className="btn btn-danger btn-rounded btn-lg px-5 py-lg-3 px-lg-5 d-lg-block">Download</a>
                  </div>
                </form>
                <h5 className="text-grey my-0 font-weight-normal">
                  Currently practicing by <span className="font-weight-bold">234 people</span>.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
