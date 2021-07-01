import './App.css';
import { useState, useEffect } from 'react';
import Main from './components/Main';
import axios from 'axios'
import { Routes, Route} from 'react-router'
import Home from './HomeComponents/Home'
import AppBar from './AppBar';
import HowItWorks from './HomeComponents/HowItWorks';
import Footer from './Footer';
import HowToGetStarted from './HomeComponents/HowToGetStarted';
import { useDispatch, useSelector } from 'react-redux';
import { initWeb3,loadArray } from './store/adoptSlice';

function App() {
 

  const [price, setPrice] = useState()
  const dispatch = useDispatch()

  const toggle = useSelector((state)=>{
    return state.adoptReducer.toggle;
  });
  useEffect(() => {

    dispatch(initWeb3())


//    axios.get("https://api.pancakeswap.info/api/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8")
    axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD")
        //   // Handle a successful response from the server
           .then(response => {
        //           // Getting a data object from response that contains the necessary data from the server
                   const data = response.data;
                   setPrice(data.RAW.BNB.USD.PRICE)
        //           // Save the unique id that the server gives to our object
                  
           })
        //   // Catch and print errors if any
           .catch(error => console.error('On create student error', error));

           

  }, [toggle])




  return (
    
    <div className="App">
<AppBar ></AppBar>
<Routes >
  <Route path="/" element={<Home price={price}></Home>}></Route>
  <Route path="/:referrer" element={<Home price={price}></Home>}></Route>
  <Route path="main" element={<Main price={price} ></Main> }></Route>
  <Route path="main/:referrer" element={<Main  price={price} ></Main> }></Route>
  <Route path="HowItWorks" element={<HowItWorks />} ></Route>
  <Route path="HowToGetStarted" element={<HowToGetStarted />} ></Route>
</Routes>

<Footer></Footer>


    </div>)
}

export default App;
