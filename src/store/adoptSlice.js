import Web3 from 'web3'
import GoldSeek from '../contracts/GoldSeek3.json'


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



var web3;
var SeekGoldContract
var address
export const initWeb3 = createAsyncThunk(
    "InitWeb3",
    async(a,thunkApi)=>{
        

        try {
            if(Web3.givenProvider){
                web3 = new Web3(Web3.givenProvider);
                await Web3.givenProvider.enable()
                const networkId = await web3.eth.net.getId()
                const SeekGoldAddress = "0x0f61Bf021A5B0cDA6A004d822e3c0b1ab03cB22F"
                var contract = new web3.eth.Contract(GoldSeek.abi, SeekGoldAddress);
                SeekGoldContract = contract;
                const addresses = await web3.eth.getAccounts()
                address = addresses[0];
                thunkApi.dispatch(balance({
                    contract: SeekGoldContract,
                    address: address

                }))
                return {
                    web3,
                    contract,
                    address,
                                                       }
            }else {console.log("error in loading web3")}
        } catch (error) {
            console.log("Error", error)
        }

    }
)


export const balance = createAsyncThunk("balance",
    async ({contract, address})=>{
 

        try {

            const balance = await contract.methods._holderBalances(address).call()
            const ethStaked = await contract.methods.TotalEthStaked().call()
            const rate = await contract.methods.existingPrice().call()
            const initialTokenPrice = await contract.methods.tokenPriceInitial_().call()
            const dividendBalance = await contract.methods.dividendBalance(address).call()
            const ReferralBalance = await contract.methods.ReferralBalance(address).call()
            const holderPersonalEth = await contract.methods._holderPersonalEth(address).call()

            console.log("balance",balance)
            
            return {balance,ethStaked,rate,initialTokenPrice,dividendBalance,ReferralBalance,holderPersonalEth}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )




export const BuyFunction = createAsyncThunk("BuyFunction",
    async ({referrer,value})=>{
        
       try {
            const result = await SeekGoldContract.methods.buy(referrer).send({from : address, value: web3.utils.toWei(value,"ether")})
            return result;
        } catch (error) {
            console.log("Error in BUy Function",error)
        }
    }
    )

export const SellFunction = createAsyncThunk("SellFunction",
async ({value})=>{
    
    try {
        const result = await SeekGoldContract.methods.sell(value).send({from : address})
        return result;
    } catch (error) {
        console.log("Error in Sell Function",error)
    }
}
)

export const WHPersonalEth = createAsyncThunk("WHPersonalEth",
async ({value})=>{
    console.log("per",value)
    try {
        const result = await SeekGoldContract.methods.withdrawPersonalEth(value.toString()).send({from : address})
        return result;
    } catch (error) {
        console.log("Error in withdraw Function",error)
    }
}
)


export const WHReferral = createAsyncThunk("WHReferral",
async ({value})=>{

    try {
        const result = await SeekGoldContract.methods.withdrawrReferral(value.toString()).send({from : address})
        return result;
    } catch (error) {
        console.log("Error in withdraw Function",error)
    }
}
)

export const WHDiv = createAsyncThunk("WHDiv",
async ({value})=>{
    try {
        const result = await SeekGoldContract.methods.withdrawDividend(value.toString()).send({from : address})
        return result;
    } catch (error) {
        console.log("Error in withdraw Function",error)
    }
}
)



const adoptSlice = createSlice({
    name: "AdopSlice",
    initialState: {
        web3: null,
        SeekGoldContract:null,
        address : null,
        balance: null,          
        arrayAwait : null,
        PurAwait : null,
        toggle: false,
        ethStaked: null,
        rate:null,
        initialTokenPrice:null,
        dividendBalance:null,
        ReferralBalance:null,
        holderPersonalEth:null,


    },
    reducers: {
        toggle : (state,actions)=>{
            state.toggle = !state.toggle;
        }
    },
    extraReducers: {
        [initWeb3.fulfilled] : (state,action)=>{
            state.web3 = action.payload.web3;
            state.SeekGoldContract = action.payload.SeekGoldContract;
            state.address = action.payload.address;


         },

         [balance.fulfilled] : (state,action)=>{
            state.balance = action.payload.balance;
            state.ethStaked=action.payload.ethStaked;
            state.rate=action.payload.rate;
            state.initialTokenPrice=action.payload.initialTokenPrice;
            state.dividendBalance=action.payload.dividendBalance;
            state.ReferralBalance=action.payload.ReferralBalance;
            state.holderPersonalEth=action.payload.holderPersonalEth;
            },

       
        [BuyFunction.pending] : (state,action)=>{
          
            state.PurAwait = false;
            state.toggle = !state.toggle;
        },
        [BuyFunction.fulfilled] : (state,action)=>{
          
            state.PurAwait = true;
            state.toggle = !state.toggle;

        },

        [SellFunction.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [SellFunction.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },

        [WHPersonalEth.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [WHPersonalEth.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },

        [WHReferral.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [WHReferral.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
        [WHDiv.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [WHDiv.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
       

    }
})

export const adopreducer = adoptSlice.reducer;
export const { toggle } = adoptSlice.actions
