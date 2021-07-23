
import Web3 from 'web3'
import GoldSeek from '../contracts/GoldSeek3.json'
import BigNumber from 'big-number'

const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Buy",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "seller",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Sell",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "WithDividend",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "WithPersonalEth",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "WithdrawrReferral",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DivSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DividendLargerPool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DividendPool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			}
		],
		"name": "ReferralBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SaleexistingPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TotalEthStaked",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TotalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_ReferralCommission",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_divCredits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_existingPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_holderBalances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_holderPaidOUt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_holderPersonalEth",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_referrerMapping",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			}
		],
		"name": "dividendBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ethereum",
				"type": "uint256"
			}
		],
		"name": "ethereumToTokens_",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "existingPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tamount",
				"type": "uint256"
			}
		],
		"name": "getSValues",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tamount",
				"type": "uint256"
			}
		],
		"name": "getTValues",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rateOfDiv",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "redeemBNBs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reinvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tTransferPUblic",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tfeepublic",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenPriceInitial_",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "valueforSale",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawDividend",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawPersonalEth",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawrReferral",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawrReferralAdmin",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]

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
				const SeekGoldAddress = GoldSeek.networks[networkId].address
				var contract = new web3.eth.Contract(GoldSeek.abi, SeekGoldAddress);
                
				SeekGoldContract = contract;
                const addresses = await web3.eth.getAccounts()
                address = addresses[0];
                thunkApi.dispatch(balance({
                    contract: SeekGoldContract,
                    address: address

                }))
				thunkApi.dispatch(divBalance({
                    contract: SeekGoldContract,
                    address: address

                }))
                return {
                    web3,
                    contract,
                    address,
					SeekGoldAddress,
                                                       }
            }else {console.log("error in loading web3")}
        } catch (error) {
            console.log("Error", error)
        }

    }
)

var dividendBalance2
var holderPersonalEth2
var referralBalance2
var getreferrer2

export const balance = createAsyncThunk("balance",
    async ({contract,address})=>{

		
        try {

            const balance1 = await contract.methods._holderBalances(address).call()
            const ethStaked = await contract.methods.EthStaked().call()
            const rate = await contract.methods.existingPrice().call()
			const saleRate = await contract.methods.SaleexistingPrice().call()
            const initialTokenPrice = await contract.methods.tokenPriceInitial_().call()
			const AccountBalance = await contract.methods.AccountBalance().call()
			const getReferrer = await contract.methods._referrerMapping(address).call()
            const ReferralBalance = await contract.methods.ReferralBalance(address).call()
            const holderPersonalEth = await contract.methods._holderPersonalEth(address).call()
			//dividendBalance2 = dividendBalance
			holderPersonalEth2 = holderPersonalEth
			referralBalance2 = ReferralBalance
			getreferrer2 = getReferrer;



             return {balance1,ethStaked,rate,saleRate,initialTokenPrice, AccountBalance, ReferralBalance,holderPersonalEth}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const divBalance = createAsyncThunk("divBalance",
    async ({contract,address})=>{

		console.log("bal",contract.methods.dividendBalance(address))
        try {

			const dividendBalance = await contract.methods.dividendBalance(address).call()
			dividendBalance2 = dividendBalance
			
             return dividendBalance

        } catch (error) {
            console.log("Error in dividendBalance",error)
        }
    }
    )




export const BuyFunction = createAsyncThunk("BuyFunction",
    async ({referrer,value})=>{
 
		var tempAdd = getreferrer2 != '0x0000000000000000000000000000000000000000'? getreferrer2 : referrer == address? '0x0000000000000000000000000000000000000000' : referrer;
		console.log("referrer",referrer)
		console.log("tempadd",tempAdd)
       try {
            const result = await SeekGoldContract.methods.buy(tempAdd).send({from : address, value: web3.utils.toWei(value,"ether"), gas: 3000000})
            return result;
        } catch (error) {
            console.log("Error in BUy Function",error)
        }
    }
    )

export const SellFunction = createAsyncThunk("SellFunction",
async ({value})=>{
    
    try {
        const result = await SeekGoldContract.methods.sell(value).send({from : address, gas: 3000000})
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
        const result = await SeekGoldContract.methods.withdrawPersonalEth(holderPersonalEth2).send({from : address, gas: 3000000})
        return result;
    } catch (error) {
        console.log("Error in withdraw Function",error)
    }
}
)


export const WHReferral = createAsyncThunk("WHReferral",
async ({value})=>{

    try {
        const result = await SeekGoldContract.methods.withdrawrReferral(referralBalance2).send({from : address})
        return result;
    } catch (error) {
        console.log("Error in withdraw Function",error)
    }
}
)

export const reInvest = createAsyncThunk("reInvest",
async ()=>{

    try {
        const result = await SeekGoldContract.methods.reinvest().send({from : address})
        return result;
    } catch (error) {
        console.log("Error in withdraw Function",error)
    }
}
)

export const WHDiv = createAsyncThunk("WHDiv",
async ({value})=>{
    try {
		var amount = web3.utils.fromWei(dividendBalance2.toString(),"ether")
        console.log("value",amount)
        const result = await SeekGoldContract.methods.withdrawDividend(dividendBalance2).send({from : address})
        return result;
    } catch (error) {
        console.log("Error in withdraw Function",error)
    }
}
)
export const RedeemBNB = createAsyncThunk("RedeemBNB",
async ()=>{
    try {

        const result = await SeekGoldContract.methods.redeemBNBs().send({from : address})
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
		saleRate:null,          
        arrayAwait : null,
        PurAwait : null,
        toggle: false,
        ethStaked: null,
        rate:null,
        initialTokenPrice:null,
        dividendBalance:null,
        ReferralBalance:null,
        holderPersonalEth:null,
		error: null,
		SeekGoldAddress: null,
		AccountBalance: null,


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
			state.SeekGoldAddress = action.payload.SeekGoldAddress;


         },

         [balance.fulfilled] : (state,action)=>{
            state.balance = action.payload.balance1;
            state.ethStaked=action.payload.ethStaked;
            state.rate=action.payload.rate;
            state.initialTokenPrice=action.payload.initialTokenPrice;
			state.AccountBalance = action.payload.AccountBalance;
            state.ReferralBalance=action.payload.ReferralBalance;
            state.holderPersonalEth=action.payload.holderPersonalEth;
            state.saleRate = action.payload.saleRate;
		},

		[divBalance.fulfilled] : (state,action)=>{
			state.dividendBalance = action.payload;

		},

       
        [BuyFunction.pending] : (state,action)=>{
			state.arrayAwait = true;
            state.PurAwait = false;
            state.toggle = !state.toggle;
        },
		[BuyFunction.error] : (state,action)=>{
			state.error = true;
            state.toggle = !state.toggle;
        },
        [BuyFunction.fulfilled] : (state,action)=>{
			state.arrayAwait = false;
            state.PurAwait = true;
            state.toggle = !state.toggle;

        },

        [SellFunction.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
		[SellFunction.error] : (state,action)=>{
			state.error = true;
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
		[WHPersonalEth.error] : (state,action)=>{
			state.error = true;
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
		[WHReferral.error] : (state,action)=>{
			state.error = true;
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
		[WHDiv.error] : (state,action)=>{
			state.error = true;
            state.toggle = !state.toggle;
        },
        [WHDiv.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },


		[reInvest.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
		[reInvest.error] : (state,action)=>{
			state.error = true;
            state.toggle = !state.toggle;
        },
        [reInvest.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },


		[RedeemBNB.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
		[RedeemBNB.error] : (state,action)=>{
			state.error = true;
            state.toggle = !state.toggle;
        },
        [RedeemBNB.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
       
//
    }
})

export const adopreducer = adoptSlice.reducer;
export const { toggle } = adoptSlice.actions
