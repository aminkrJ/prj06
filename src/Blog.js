import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import api from './Api'
import NProgress from 'nprogress'
import moment from 'moment'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    NProgress.start()

    api.get("/articles")
    .then((response) => {
      NProgress.done()

      this.setState({
        articles: response.data
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  renderArticles() {
    return(
      this.state.articles.map((article, index) => {
       return(
        <div class="col-sm-6 col-md-4 grid-item">
          <div class="blog-post">
            <div class="blog-media">
              <Link to={"/blog/" + article.slug}>
                <img src={article.photo.medium} alt={article.title} class="img-fluid" />
              </Link>
            </div>
            <div class="mt-4">
              <div class="date-wrapper date-wrapper-horizontal">
<span class="date-m bg-primary">{moment(article.updated_at).format("MMMM")}</span>
<span class="date-d">{moment(article.updated_at).format("D")}</span> </div>
              <div class="tags"></div>
              <h4 class="timeline-item-title">
                <Link to={"/blog/" + article.slug}>{article.title}</Link>
              </h4>
              <p class="timeline-item-description">{article.description}</p>
              <Link to={"/blog/" + article.slug} class="btn btn-link"><i class="fa fa-arrow-circle-right"></i> Read more</Link>
            </div>
          </div>
        </div>
       )
      })
    )
  }


  render() {
    return (
    <div id="content">
      <div class="container">
        <h2 class="title-divider">
          <span>Company <span class="font-weight-normal text-muted">Blog</span></span>
          <small></small>
        </h2>
        <div class="row">
          <div class="col-md-9">
            <div class="blog-roll blog-grid">
              <div class="row">
              {this.renderArticles()}
              </div>
            </div>
          </div>
          <div class="col-md-3 sidebar-right">
            <div class="mb-4">
              <h4 class="title-divider">
                <span>Follow Us On</span>
              </h4>
              <ul class="list-unstyled social-media-branding">
                <li>
                  <a href="https://www.instagram.com/lifelixir/" class="social-link branding-instagram"><i class="fa fa-instagram fa-fw"></i> Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/LifeElixirAU/" class="social-link branding-facebook"><i class="fa fa-facebook-square fa-fw"></i> Facebook</a>
                </li>
                <li>
                  <a href="#" class="social-link branding-youtube"><i class="fa fa-youtube-play fa-fw"></i> YouTube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Blog