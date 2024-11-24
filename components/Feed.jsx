"use client"

import { useState , useEffect} from 'react'

import PromptCard from './PromptCard'

//a private component only to this file
const PromptCardList = ({ data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout '>

      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick= {handleTagClick}
        />
      ) )}

    </div>
  )

}
 

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([])


 

   useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();

      setPosts(data);
      setFilteredPosts(data)

    }
    fetchPrompts();
   },[])

   const handleSearchChange = (e) => {

    const searchValue = e.target.value.toLowerCase();
    setSearchText(searchValue);

    const filtered = posts.filter(
      (post) => 
      post.creator.username.toLowerCase().includes(searchValue) || 
      post.tag.toLowerCase().includes(searchValue)
      
    )

    setFilteredPosts(filtered);

   }


  return (
    <section  className='feed '>

      <form className='relative w-full flex-center'>
        <input type="text"
        placeholder='Search for a tag or a username'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input  peer'
         />
         

      </form>
      <PromptCardList
          data={filteredPosts}//using the filtered post instead
          handleTagClick= {() => {}}

      />

    </section>
  )
}

export default Feed
