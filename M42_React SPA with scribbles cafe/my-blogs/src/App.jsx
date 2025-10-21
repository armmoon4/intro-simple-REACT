/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
const [bookmakred , setBookmarked] = useState([]);
const [readingCount , setReadingCount] = useState(0);

  const handleBookMark = (blog)=> {
      setBookmarked([...bookmakred , blog])
  }


  const handleMarkasRead = (time , id)=> {
    setReadingCount(readingCount + time)
    handleFromBookmark(id)
  }

  const handleFromBookmark = (id) => {
      const remaingBookmark = bookmakred.filter((mark)=> mark.id !== id)
      setBookmarked(remaingBookmark);
  } 

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">

          <Blogs handleBookMark={handleBookMark} handleMarkasRead={handleMarkasRead}></Blogs>
        </div>

        <div className="right-container w-[30%]">
        <h1>Reading Time : {readingCount}</h1>
        <h1>Bookmarked Count : {bookmakred.length}</h1>
        {
          bookmakred.map((marked)=> <p key={marked.id} className='bg-red-500 p-2 shadow m-2 rounded-2xl'>{marked.title}</p>)
        }
        </div>
      </div>
    </>
  )
}

export default App
