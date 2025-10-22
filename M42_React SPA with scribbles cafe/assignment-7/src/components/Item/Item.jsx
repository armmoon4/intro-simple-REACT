import React from 'react';

const Item = ({ item ,handleItem }) => {
    return (
        <div>
            <ul className="list bg-base-100 rounded-box shadow-md w-full max-w-2xl mx-auto my-2.5">
                {/* <li className="flex justify-between items-center p-4 pb-2 text-sm opacity-60 tracking-wide font-medium">
                    <div className="w-2/5">Items</div>
                    <div className="w-1/5 text-right">Current Bid</div>
                    <div className="w-1/5 text-right">Time Left</div>
                    <div className="w-1/5 text-right">Bid Now</div>
                </li> */}

                <li className="flex justify-between items-center p-4 border-t border-base-200">

                    {/* Column 1: Items (Image + Text) */}
                    <div className="w-2/5 flex items-center gap-4">
                        <div>
                            <img className="size-12 rounded-md object-cover" src={item.image} alt="Leica M3 Camera" />
                        </div>
                        <div>
                            <div className="font-semibold text-base-content">{item.title}</div>
                        </div>
                    </div>
                    <div className="w-1/5 text-right">
                        <div className="font-semibold text-base-content">${item.currentBidPrice}</div>
                    </div>

                    <div className="w-1/5 text-right">
                        <div className="text-sm opacity-80">{item.timeLeft} Days left</div>
                    </div>

                    <div className="w-1/5 flex justify-end">
                        <button onClick={()=> handleItem(item)} className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </button>
                    </div>

                </li>
            </ul>
        </div>
    );
};

export default Item;