import React from 'react'
import GoldSeek from './contracts/GoldSeek3.json'
import logo from './img/site/1610956028.png'
import {  useSelector } from 'react-redux';
export default function Footer() {
    const address = useSelector((state)=>{
        return state.adoptReducer.SeekGoldAddress;
      });
    return (
        <div>
            <div>
                <img src={logo}></img>
            </div>
            <p>Contract address<a>{address}</a></p>
            <p>Copyright ©Seek BNB 2021. All rights reserved.</p>
        </div>
    )
}
