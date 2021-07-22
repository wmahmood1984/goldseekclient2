import { number } from 'assert-plus'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BuyFunction,SellFunction,WHPersonalEth,WHReferral,WHDiv,reInvest,RedeemBNB } from '../store/adoptSlice';
//import BigNumber from 'big-number'
import progress from '../img/progress.gif'
export default function ReadString(props) {

     const [success,setCopySuccess] = useState()
    const [textArea,setTextArea] = useState();
    const [amountExceeded, setAmountExceeded] = useState(false)

    

    const [Puramount,setPurAmount] = useState()
    const [sellAmount,setSellAmount]=useState()
    const dispatch = useDispatch()
    const balance = useSelector((state)=>{
      return Number(state.adoptReducer.balance);
    });


    const address = useSelector((state)=>{
      return state.adoptReducer.address;
    });
    
    const totalethStacked = useSelector((state)=>{
      return Number(state.adoptReducer.ethStaked);
    });



    const rate = useSelector((state)=>{
      return Number(state.adoptReducer.rate);
    });

    const dividendBalance = useSelector((state)=>{
      return Number(state.adoptReducer.dividendBalance);
    });
   

    const referralBalance = useSelector((state)=>{
      return Number(state.adoptReducer.ReferralBalance);
    });

    const _holderPersonalEth = useSelector((state)=>{
      return Number(state.adoptReducer.holderPersonalEth);
    });

    const web3 = useSelector((state)=>{
      return state.adoptReducer.web3;
    });
    

    function stringFunction(amount){
      
        if(amount && amount>0){return props.drizzle.web3.utils.toWei(amount.toString(),"ether")}

        else{return props.drizzle.web3.utils.toWei("0","ether")}
    }




  

  function numberWithCommas(x) {
    
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").slice(0, 7);
}

function numberWithCommas2(x) {
    var y = x.toFixed(4)
  return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").slice(0, 7);
}


const setValue = (e) => {
  e.preventDefault()
  dispatch(BuyFunction({referrer: props.referrer,value: Puramount}))
  setPurAmount("")
  };
  const purchaseAwait = useSelector((state)=>{
    return state.adoptReducer.PurAwait;
  });

  const arrayAwait = useSelector((state)=>{
    return state.adoptReducer.arrayAwait;
  });
  const Salerate = useSelector((state)=>{
    return Number(state.adoptReducer.saleRate)
  });
  const error = useSelector((state)=>{
    return state.adoptReducer.error
  });

  function showreferralFunction (){
    
    if(balance >0){return `https://goldseek2.surge.sh/${address}`}
    
    if (!purchaseAwait) {return null};

    return `https://goldseek2.surge.sh/${address}`
    
  }


  const getTxStatus = () => {
    if(purchaseAwait == null) return null

    else if (purchaseAwait == false) return 'Transaction is pending'

    else if (purchaseAwait == true) return 'Transaction Successful'
  };


const copyToClipboard =(e) => {
  textArea.select();
  document.execCommand('copy');
  // This is just personal preference.
  // I prefer to not show the whole text area selected.
  e.target.focus();
  setCopySuccess('Copied!' );
};


function setChange(amount){
    if(amount<=(balance)){setSellAmount(amount)}
    else {setAmountExceeded(true)}
    console.log("excess",amountExceeded)
   }


const setSellValue = (e) => {
  e.preventDefault()
  dispatch(SellFunction({value: sellAmount-1}))
  setSellAmount("")

  };
 

  const getSellTxStatus = () => {
    if(arrayAwait == null) return null 

    else if (arrayAwait == true) return <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2c",backgroundPosition:"0% 0%",color:"#FFFFFF",minHeight:"100px",width:"150px",margin:"0 570px", padding:"auto",display:"block",transform:"none",transition:"all 0s ease 0s", boxSizing:"border-box"}}>
      <p>Transaction is pending</p><br/><img style={{height:"70px"}} src={progress}></img></div>

    else if (error == true) return <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2c",backgroundPosition:"0% 0%",color:"#FFFFFF",minHeight:"50px",width:"150px",margin:"0 570px", padding:"auto",display:"block",transform:"none",transition:"all 0s ease 0s", boxSizing:"border-box"}}>
    <p>There is an error</p></div>
    else if (arrayAwait == false) return <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2c",backgroundPosition:"0% 0%",color:"#FFFFFF",minHeight:"50px",width:"150px",margin:"0 570px", padding:"auto",display:"block",transform:"none",transition:"all 0s ease 0s", boxSizing:"border-box"}}>
    <p>Transaction is Successful</p></div>

  };

  const getWithdrawTxStatus = () => {
    // // get the transaction states from the drizzle state
    // const { transactions, transactionStack } = props.drizzleState;
    
    // // get the transaction hash using our saved `stackId`
    // const txHash = transactionStack[PHstackID];

    // // if transaction hash does not exist, don't display anything
    // if (!txHash) return null;


    // // otherwise, return the transaction status
    // return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
  };


  const withdrawDividend = () => {
    

    dispatch(WHDiv({value: dividendBalance}))

  };

  const withdrawReferral = () => {


    dispatch(WHReferral({value: referralBalance}))

  };

  const withdrawPersonalEth = (e) => {
    e.preventDefault()
   
    dispatch(WHPersonalEth({value: _holderPersonalEth}))

  };

  const reinvest = () => {
   
    dispatch(reInvest())

  };

  const redeemBNB = () => {
   
    dispatch(RedeemBNB())

  };


    return (
        <div>
            <div style={{backgroundColor:"#020C2C", backgroundPosition:"0% 0%", color:"#FFFFFF", fontFamily:"sans-serif", fontSize:"16px", lineHeight:"24px", textDecoration:"none solid rgb(255,255,255)",textAlign:"center", wordSpacing:"0px", height:"220px", width:"1140px", margin:"200px 0 24px 24px", padding:"20px"}}>
            <h2>Share Your Referral Link And Get Paid 7% From Your Referrals
            Purchase And 3% From Their Referrals Purchase.</h2>
            <div style={{display:"flex", margin:"auto",alignContent:"center",marginLeft:"100px"}}>
            <form>
            
            <textarea
            style={{display:"block", height:"48px",width:"760px",border:"1px solid #4E5592", padding:"8px 16px 8px 16px", backgroundPosition:"0% 0%",backgroundColor:"#FFFFFF",color:"#8BA0E1", fontFamily:"sans-serif",fontSize:"20px",lineHeight:"30px",textDecoration:"none solid rgb(139,160,225)",}}
            ref={(textarea) => setTextArea(textarea)}
            value={showreferralFunction()}/>
            </form>

            {/* Logical shortcut for only displaying the 
            button if the copy command exists */
            document.queryCommandSupported('copy') &&
                <div             >
                <button 
                style={{display:"inline-block", height:"45px",width:"99px",border:"1px solid #FFFFFF", padding:"10px 32px 10px 32px", backgroundPosition:"0% 0%", backgroundColor:"#FFFFFF",color:"#14161A", fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb(20,20,26)", marginLeft:"20px"}}
                onClick={copyToClipboard}>Copy</button> 
                {success}
                </div>}
            </div>
            
            
            
             
            </div>
             
            <div style={{display:"flex"}}>
                <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2c",backgroundPosition:"0% 0%",color:"#FFFFFF",minHeight:"149px",width:"360px",margin:"0 0 24px 0", padding:"30px 0 40px 0",display:"block",transform:"none",transition:"all 0s ease 0s", boxSizing:"border-box",margin:"30px"}}>
                <h1>${numberWithCommas2(Number(totalethStacked/1000000000000000000*props.price))  }</h1>
                <h2>{numberWithCommas2(Number(totalethStacked/1000000000000000000))  }{'  '}BNB</h2>
                <h3>Total Client Capital</h3> 
                </div>


                <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2c",backgroundPosition:"0% 0%",color:"#FFFFFF", minHeight:"149px",width:"360px",margin:"0 0 24px 0", padding:"30px 0 40px 0",display:"block",transform:"none",transition:"all 0s ease 0s", boxSizing:"border-box",margin:"30px"}}>
                <h1 style={{margin:"1px"}}>{balance>1? balance:0 }</h1><br/>
                <h2 style={{margin:"1px"}}>Seek Gold Credits</h2><br/>
                <p style={{margin:"1px"}}> My Seek Gold Credit Value </p>
                <h2>${ (balance*rate/1000000000000000000).toFixed(2) }</h2>
                </div>
           
                <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2c",backgroundPosition:"0% 0%",color:"#FFFFFF",minHeight:"149px",width:"360px",margin:"0 0 24px 0", padding:"30px 0 40px 0",display:"block",transform:"none",transition:"all 0s ease 0s", boxSizing:"border-box",margin:"30px"}}>
                <div style={{display:"flex"}}>
                <span>
                  <h2>${(dividendBalance/1000000000000000000*props.price).toFixed(2) }</h2><br/>
                  <p>Your Dividend Earnings Value: {(dividendBalance/1000000000000000000).toFixed(4) } BNB</p>
                  <button onClick={()=>{withdrawDividend(dividendBalance)}}>withdraw Dividend</button>
                
                </span>
                <span>
                  <h2>${(referralBalance/1000000000000000000*props.price).toFixed(2) }</h2><br/>
                  <p>Your Referral Earnings Value: {(referralBalance/1000000000000000000).toFixed(4) } BNB</p>
                  <button onClick={()=>{withdrawReferral(referralBalance)}}>withdraw referral</button>
                </span>
                </div>
                
                <div>
                <button onClick={()=>{reinvest()}}>Re-invest dividend and Referral</button>
                </div>
                  </div>
                 
            </div>
            
            
            
            <div style={{display:"flex"}}>

                <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2c",backgroundPosition:"0% 0%",color:"#FFFFFF",minHeight:"149px",width:"360px",margin:"0 0 24px 0", padding:"30px 0 40px 0",display:"block",transform:"none",transition:"all 0s ease 0s", boxSizing:"border-box",margin:"30px"}}>
                <h2 style={{margin:"1px"}}>Buy BNB Credits</h2><br/>
                <h3 style={{margin:"1px"}}>(10% Dividend Distribution)</h3>         
                <label> Amount of BNBs <br/>
                <input value={Puramount} type="value"            
                  onChange={({ target }) => {setPurAmount(target.value)}}/></label><br/>
                <p>You will get { (Puramount*1000000000000000000/rate*.75).toFixed(0) } number of tokens</p>
                <p>Price BNB: {(rate/1000000000000000000).toFixed(6)}</p>
                <p>Price Dollar: ${(rate/1000000000000000000*props.price).toFixed(6)}</p>
                <button onClick={setValue}>BUY BNB CREDITS</button>
                {/* <div>{getTxStatus()}</div> */}
                </div>
            
                <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2c",backgroundPosition:"0% 0%",color:"#FFFFFF",minHeight:"149px",width:"360px",margin:"0 0 24px 0", padding:"30px 0 40px 0",display:"block",transform:"none",transition:"all 0s ease 0s", boxSizing:"border-box",margin:"30px"}}>
                <h2 style={{margin:"1px"}}>Sell BNB Credits</h2><br/>
                 <label>Amount of Credits<br/>
                  <input value={sellAmount} type="value" onChange={(e)=>{setChange(e.target.value)}}></input>
                </label>
                {amountExceeded? <p>You cannot sell more than your balance of {balance}</p>:
                <p>You will get <strong>{(Salerate/1000000000000000000*.93*sellAmount).toFixed(4)}</strong> amount of BNBs based on current price</p>}
                <p>Price BNB: {(Salerate/1000000000000000000).toFixed(6)}</p>
                <p>Price Dollar: ${(Salerate/1000000000000000000*props.price).toFixed(6)}</p>
                <button disabled={amountExceeded} onClick={setSellValue}>Sell BNB CREDITS</button>
                {/* <div>{getSellTxStatus()}</div> */}
                </div>

                <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2c",backgroundPosition:"0% 0%",color:"#FFFFFF",minHeight:"149px",width:"360px",margin:"0 0 24px 0", padding:"30px 0 40px 0",display:"block",transform:"none",transition:"all 0s ease 0s", boxSizing:"border-box",margin:"30px"}}>
              
                
                <p>     Your personal eth balance in BNB is {(_holderPersonalEth/1000000000000000000).toFixed(2) }</p><br/>
                <p>     Your personal eth balance in USD is ${(_holderPersonalEth/1000000000000000000*props.price).toFixed(2) }</p><br/>
                <button onClick={withdrawPersonalEth}>withdraw PersonaBNBs</button>
                {/* <div>{getSellTxStatus()}</div> */}
                <br/>


        
                </div>
               
            </div>
            <div>{getSellTxStatus()}</div>
            <div>
            <button  disabled={address!="0xb27A5715DeE0B91CC60da06c1bb860aBa44DB804"} onClick={redeemBNB}>Redeem BNB (by Owen Only during development phase)</button>
            </div> 
            

        
        </div>
    )
}

