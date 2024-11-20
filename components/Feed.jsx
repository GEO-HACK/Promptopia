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
   const handleSearchChange = (e) => {

   }

   useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();

      setPosts(data);

    }
    fetchPrompts();
   },[])
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
          data={posts}//posts that were set on the aync effect for  fetch
          handleTagClick= {() => {}}

      />

    </section>
  )
}

export default Feed
