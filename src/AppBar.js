import React from 'react'
import { Link, useParams } from 'react-router-dom';
import logo from './img/seekgoldbnblogo.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { initWeb3 } from './store/adoptSlice';
const styles = {
    padding: "14px 0 14px 0",
    backgroundColor:"#020C2C", 
    backgroundPosition: "0% 0%",
    color:"#ffffff",            
    height:"130px",
    width:"1349px",
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
                        //  position:"fixed",   
            }

const boxstyle= {
    display:"block",
    fontFamily:"sans-serif",
    fontSize:"16px",
    color:"#ffffff",
    lineHeight:"24px",
    textDecoration:"none solid rgb(255,255,255)",
    textAlign:"center",
    verticalAlign:"middle",
    wordSpacing:"0px",                
    height:"38px",
    width:"115.4px",
    padding: "6px 12px 6px 12px",
    minHeight:"auto",
    minWidth:"auto",
}

export default function AppBar(props) {
    const address = useSelector((state)=>{
        return state.adoptReducer.address;
      });

    
    return (

        <div style={styles}>
            <div style={{height:"100px",width:"1140px",display:"flex"}}>
            <a href={"/"}><img style={{height:"150px",width:"285px",display:"block", backgroundPosition:"0% 0%", padding:"0px",margin:"0px"}} src={logo}></img></a>
            
            <div style={{height:"59px",width:"855px",display:"flex"}}>
            <Link style={boxstyle} to="HowItWorks">How It Works</Link>{'   '}
            <Link style={boxstyle} to="HowToGetStarted">How To Get Started</Link>{'   '}
            <div style={boxstyle}>{address}</div>
            </div>
            
            </div>
            
            
            
            

        </div>
    )
}
