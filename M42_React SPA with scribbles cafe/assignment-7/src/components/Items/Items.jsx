import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = ({handleItem}) => {

    const [items , setItems] = useState([])

    useEffect(()=> {
        fetch('auctiondata.json')
        .then(res => res.json())
        .then(data => setItems(data))

    } , [])

    // console.log(items)

    return (
        <div>

         <div className="all-items">
        {
            items.map((item)=> <Item key={item.id} handleItem={handleItem} item={item}></Item>)
        }
         </div>

        </div>
    );
};

export default Items;