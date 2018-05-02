import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import api from './Api';
import NProgress from 'nprogress';
import moment from 'moment';
import { Helmet } from 'react-helmet';

class Source extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: { photo: { original: '' } },
    };
  }

  componentDidMount() {
    NProgress.start();

    api
      .get('/articles/' + this.props.match.params.slug)
      .then(response => {
        NProgress.done();

        this.setState({
          post: response.data,
        });
      })
      .catch(error => {
        NProgress.done();
      });
  }

  render() {
    return (
      <div id="content">
        <Helmet>
          <title>{this.state.post.title}</title>
          <meta name="description" content={this.state.post.title} />
          <meta name="keywords" content={this.state.post.category} />
          <meta name="og:type" content="article" />
          <meta name="og:title" content={this.state.post.title} />
          <meta name="og:description" content={this.state.post.description} />
          <meta name="og:image" content={this.state.post.photo.original} />
        </Helmet>
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="row blog-post">
                <div class="col-md-1 date-md" />
                <div class="col-md-11">
                  <div class="media-body">
                    <div class="sections" />
                    <h3 class="title media-heading">{this.state.post.title}</h3>
                    <div class="blog-content">
                      <div class="blog-media">
                        <img
                          src={this.state.post.photo.original}
                          alt={this.state.post.title}
                          class="img-fluid"
                        />
                      </div>
                      <p class="lead">{this.state.post.description}</p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: this.state.post.content,
                        }}
                        class=""
                      />
                    </div>
                    <div class="tag-cloud post-tag-cloud" />
                    <div class="block bg-faded p-3 post-block">
                      <div class="post-share social-media-branding" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Source;
