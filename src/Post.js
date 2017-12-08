import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import api from './Api'
import NProgress from 'nprogress'
import moment from 'moment'

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: {photo: {original: ""}}
    }
  }

  componentDidMount() {
    NProgress.start()

    api.get("/articles/" + this.props.match.params.slug)
    .then((response) => {
      NProgress.done()

      this.setState({
        post: response.data
      })

      document.title = "Life Elixir, " + response.data.title
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  render() {
    return (

    <div id="content">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
              <div class="row blog-post">
                <div class="col-md-1 date-md">
                  <div class="date-wrapper"> <span class="date-m bg-primary">{moment(this.state.post.updated_at).format("MMMM")}</span> <span class="date-d">{moment(this.state.post.updated_at).format("DD")}</span>
        </div>
                  <p class="text-muted"> 
        </p>
                </div>
                <div class="col-md-11">
                  <div class="media-body">
                    <div class="sections"></div>
                    <h3 class="title media-heading">
              {this.state.post.title}
                    </h3>
                    
                    <ul class="list-inline meta text-muted">
                      <li class="list-inline-item"><i class="fa fa-calendar"></i> Mon 7th Jan 2013</li>
                      <li class="list-inline-item"><i class="fa fa-user"></i> <a href="#">Erin</a></li>
                    </ul>
                    
                    <div class="blog-content">
                      <div class="blog-media">
                        <img src={this.state.post.photo.original} alt={this.state.post.title} class="img-fluid" />
                      </div>
                      <p class="lead">{this.state.post.description}</p>
                      <p dangerouslySetInnerHTML={{__html: this.state.post.content}} class="text-muted text-sm" />
                    </div>
                    
                    <div class="tag-cloud post-tag-cloud">
                    </div>
                    
                    <div class="block bg-faded p-3 post-block">
                      <div class="post-share social-media-branding">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
