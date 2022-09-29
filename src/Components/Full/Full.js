import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import './Full.css'

const Full = () => {
    const [gymItem, setGymItem] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGymItem(data))
    },[])
    return (
      <div className="full">
        <div className="main-body">
          <div className='card-main'>
            <Header></Header>
            <div className="cartParent">
              {gymItem.map((gym) => (
                <Cart key={gym.id} gym={gym}></Cart>
              ))}
            </div>
          </div>
          <div>
            <Profile></Profile>
          </div>
        </div>
      </div>
    );
};

export default Full;