import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import logo from '../img/site/1610956010.png'
import { useDispatch, useSelector } from 'react-redux';


const boxstyle= {
    display:"block",
    backgroundColor:"rgb(150,147,0)",
    fontFamily:"sans-serif",
    fontSize:"16px",
    fontWeight:"700",
    color:"white",
    lineHeight:"24px",
    textDecoration:"none solid rgb(255,255,255)",
    textAlign:"center",
    verticalAlign:"middle",
    wordSpacing:"0px",                
    height:"38px",
    margin:"auto",
    width:"115.4px",
    padding: "6px 12px 6px 12px",
    minHeight:"auto",
    minWidth:"auto",
}


export default function Home(props) {

    const balance = useSelector((state)=>{
        return state.adoptReducer.balance;
      });





   
  // using the saved `dataKey`, get the variable we're interested in


    const {referrer} = useParams()
    return (
        <div style={{marginTop:"200px" }}>
            <h1> Real Time BNB Dividends That Pay YOU Consistent Passive Income</h1>
            <p>protected by the blockchain, Seek Gold allows you 24 Hour Access To YOUR BNB Anytime You wish!</p>
            {referrer? 
            <Link 
            style={boxstyle} 
            to={`/main/${referrer}`}>ENTER NOW</Link> 
            
            :<Link 
            style={boxstyle}
            to="/main">ENTER NOW</Link>}

            <h2>What Is Seek Gold?</h2>
            <p>Seek Gold is a global financial sharing and support community and part of the Seek Rewards/Seek Coin Ecosystem.Seek Gold was developed to provide anyone across the globe a way to create a dependable, virtually no risk way to create passive income while retaining 100% control over their BNB. We reward members who share the contract with othersand the members who choose to simply collect dividends with no requirements whatsoever. Many members will use the dividends created through Seek Gold to invest in Seek Coin and Seek Rewards to create additional passive daily income. We invite you to join us and start creating real time BNB Dividends TODAY!</p>
            <div style={{display:"flex"}}>
            <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb(255,255,255)",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2C",backgroundPosition:"0% 0%",height:"605px",width:"306px",color:"#ffffff",padding:"34px 22px 34px 22px",display:"block",margin:"30px"}}>
                <h3>Real Time Dividends</h3>
                <p>You get paid real time dividends when depositors buy and sell Seek Gold. The fee to buy Seek Gold is 25%. The fee is distributed in the following manner, 10% is distributed immediately to all Seek Gold Holders including you, 10% is paid in commission to the two upline referrers and 5% is the admin fee. When you sell your seek gold credits 7% is released to all Seek Gold Holders as well.</p>
            </div>

            <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb(255,255,255)",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2C",backgroundPosition:"0% 0%",height:"605px",width:"306px",color:"#ffffff",padding:"34px 22px 34px 22px",display:"block",margin:"30px"}}>
                <h3>How Much Can I Earn by Depositing BNB?</h3>
                <p>You can earn BNB passively in three ways. 1) When people buy and sell Seek Gold YOU earn dividends in real time. 2) As the volume of people buying and selling increases the price to buy and sell Seek Gold will also rise. By monitoring the price periodically you can pick the perfect time to sell at a price h igher than you purchased for to receive increased profits! 3) As the price of BNB Rises so does the value of your Seek Gold! You get to benefit from all the appreciation of BNB on top of the other two profit streams. Most important is you ALWAYS retain instant access to all of your BNB at anytime at!</p>
            </div>

            <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb(255,255,255)",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2C",backgroundPosition:"0% 0%",height:"605px",width:"306px",color:"#ffffff",padding:"34px 22px 34px 22px",display:"block",margin:"30px"}}>
                <h3>Is my BNB Safe?</h3>
                <p>Your BNB is as safe as it would be in your own crypto wallet because it is literally on the blockchain. Not only can you withdraw your dividends at anytime you also have the opportunity to redeposit your dividends for future growth. Your funds are never locked up, you can withdraw dividends and can cash out all or part of your Seek Gold at any time. With Seek Gold YOU are in 100% control over your BNB at all times!</p>
            </div>
            </div>
            

            <div>
                <img src={logo}></img>
                <h1>SeekGold</h1>
                <p>Connected Wallet balance in BNB: {balance}</p>
                <p>Connected Wallet balance in USD: ${balance*props.price}</p>

            </div>

        </div>
    )
}
