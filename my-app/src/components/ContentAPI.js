import React, { Component } from 'react'
import css from './css/Content.module.css'

import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

export class Content extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoaded: false,
        savedPosts:[],
        searchPosts: [],
      }
    }

    async fetchImages() {
      const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
      const fetchedPosts = response.data.hits;

      this.setState({
        isLoaded: true,
        searchPosts: fetchedPosts,
        savedPosts: fetchedPosts,
      })
    
    }
    
    handleChange = (event) => {
      const search = event.target.value.toLowerCase();
      const filteredPosts = this.state.savedPosts.filter(post => {
        return post.user.toLowerCase().includes(search);
      })
      this.setState({
        searchPosts: filteredPosts,
      })
    }
    componentDidMount() {
        this.fetchImages();
    } 

   

  render() {
    
    return (
      <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                  <label>Search: <input 
                  type='search'
                  id='searchInput' 
                  placeholder='By Author' 
                  onChange={(event) => this.handleChange(event)}
                  /></label>
                </form>
                <h4>posts found: {this.state.searchPosts.length}</h4>
            </div>
            <div className={css.SearchResults}>
            {this.state.isLoaded ? (<PostItemAPI savedPosts={this.state.searchPosts} />) : (<Loader />)}
            </div>
      </div>
    )
  }
}

export default Content