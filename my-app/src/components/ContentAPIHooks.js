import React, {useState, useEffect} from 'react'
import axios from 'axios';
import API_KEY from '../secrets';
import css from './css/Content.module.css';
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'

function ContentAPIHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [savedPosts, setSavedPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);

  useEffect(()=> {
    const fetchImages = async () => {
      const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
      const fetchedPosts = response.data.hits;
      setIsLoaded(true)
      setSavedPosts (fetchedPosts)
      setSearchPosts (fetchedPosts)
    };
    fetchImages();
  }, [])

  const handleChange = (event) => {
    const search = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter(post => {
      return post.user.toLowerCase().includes(search);
    })
    setSearchPosts(filteredPosts);
  }
  
  return (
    <div className={css.Content}>
          <div className={css.TitleBar}>
              <h1>My Photos</h1>
              <form>
                <label>Search: <input 
                type='search'
                id='searchInput' 
                placeholder='By Author' 
                onChange={(event) => handleChange(event)}
                /></label>
              </form>
              <h4>posts found: {searchPosts.length}</h4>
          </div>
          <div className={css.SearchResults}>
          {isLoaded ? (<PostItemAPI savedPosts={searchPosts} />) : (<Loader />)}
          </div>
    </div>
  )
}

export default ContentAPIHooks