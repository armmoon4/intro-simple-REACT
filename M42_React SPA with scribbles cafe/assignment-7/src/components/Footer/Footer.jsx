import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <h2 className='text-2xl text-blue-500 flex'>Auction<span className='text-amber-400 '>Gallery</span></h2>
                <div className='flex text-xl'>
                    <h3>Bid.</h3>
                    <h3>Win.</h3>
                    <h3>Own.</h3>
                </div>
                <nav className="grid grid-flow-col gap-7">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Auctions</a>
                    <a className="link link-hover">Categories</a>
                    <a className="link link-hover">How to Works </a>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} AuctionHub. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;