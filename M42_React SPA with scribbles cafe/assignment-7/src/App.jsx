import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Herosection from './components/Herosection/Herosection'
import Items from './components/Items/Items'
import Navbar from './components/Navbar/Navbar'
import { LiaCommentSlashSolid } from 'react-icons/lia'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
function App() {

  const [markItem, setMarkItem] = useState([]);
  const [totalbid, setBidamount] = useState(0);

  const handleItem = (item) => {
    setMarkItem([...markItem, item]);
    toast("Item Added to list");
    setBidamount(totalbid + item.currentBidPrice);
  }

  const handleRemoveFavorite = (itemId, itemPrice) => {
    setMarkItem(markItem.filter(item => item.id !== itemId));
    toast("Item Removed From list");
    setBidamount(totalbid - itemPrice);
  }

  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <ToastContainer />
      <div className='max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-6'>
        <div>
          <h2 className='text-2xl font-bold pb-2'>Active Auctions</h2>
          <p>Discover and bid on extraordinary items</p>
        </div>
        <div className="main-container flex flex-col lg:flex-row gap-8 mt-6">
          <div className="left-container w-full lg:w-[70%]">
            <Items key={handleItem.id} handleItem={handleItem}></Items>
          </div>
          <div className="right-container w-full lg:w-[30%]">
            <div className="rounded-2xl shadow-lg p-6 w-full max-w-sm mx-auto font-sans lg:max-w-full">

              {/* Header */}
              <div className="flex items-center mb-6 border-b pb-4">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                <h2 className="text-2xl font-bold ml-2">Favorite Items</h2>
              </div>

              <div className="space-y-4">
                {/* --- Items --- */}
                {
                  markItem.map((marked) => <div key={marked.id} className="flex items-center pb-4 border-b border-gray-100">
                    {/* ... (item mapping code remains the same) ... */}
                    <img src={marked.image} alt={marked.title} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-grow ml-4 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">{marked.title}</h3>
                      <div className="flex space-x-4 text-sm text-gray-600 mt-1">
                        <span>${marked.currentBidPrice}</span>
                        <span>Bids: 12</span>
                      </div>
                    </div>
                    <button onClick={() => handleRemoveFavorite(marked.id, marked.currentBidPrice)} className="p-2 rounded-full hover:bg-gray-100">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>)
                }
              </div>
              <div className="border-t-2 border-gray-200 mt-6 pt-4 flex justify-between items-center">
                <span className="text-lg font-semibold">Total bids Amount</span>
                <span className="text-2xl font-bold">${totalbid}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </>
  )
}

export default App
