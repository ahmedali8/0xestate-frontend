import React from 'react';

import Image from 'next/image';
import Image1 from "../images/img1.png"
import Image2 from "../images/img2.png"
import Image3 from "../images/img3.png"
import Image4 from "../images/img4.png"
import Image5 from "../images/img5.png"
import { useAccount, useChainId, useContractWrite, usePrepareContractWrite, useProvider } from 'wagmi';
import { ethers, utils } from "ethers";


const cardsData = [
    {
        imageSrc: Image1,
        title: 'Card Title 1',
        description: 'This is the description for card 1.',
    },
    {
        imageSrc: Image2,
        title: 'Card Title 2',
        description: 'This is the description for card 2.',
    },
    {
        imageSrc: Image3,
        title: 'Card Title 3',
        description: 'This is the description for card 3.',
    },
];


const PropertyList = () => {
 const AvailableFraction1 = 80
 const AvailableFraction2 = 50
 const AvailableFraction3 = 30
 const contractAddress = "0x22694a7c00A98809A4E8f29D244D756E7977e991"
 const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const { address } = useAccount()

const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: 'mint',
    args: [
        address,
        "1000000000000000000"	
    ],
})

const { write } = useContractWrite(config)

function handleOnclick() {
    alert("Input amount");
    let amount = prompt("Please enter amount", "1");
    console.log("Debug", utils.parseEther("1"));
     

	

}
    return (
        <>
        <div className="container my-12 mx-24 px-9 md:px-0 ">
            <div className="flex flex-wrap -mx-1 lg:-mx-4 gap-1 ">
                <div className="gap-0 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 bg-white bg-opacity-90">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href="#">
                            <Image alt="Placeholder" width={720}
                                height={320} className="block h-auto w-full" src={Image1} />
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-black" href="#">
                                    Beeston Street, River Side
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                Lock Term: 1/3/29
                            </p>
                            <p className="text-grey-darker text-sm">
                                Available Fractions: {AvailableFraction1}
                            </p>
                        </header>

                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <Image alt="Placeholder" width={50}
                                    height={50} className="block rounded-full" src={Image2} />
                            </a>
                            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span className="hidden">Like</span>
                                <i className="fa fa-heart"></i>
                            </a>
                            <button onClick={ ()=> write()} className='buttoninline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8'>Buy Fraction </button>
                            
                        </footer>

                    </article>

                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 bg-white bg-opacity-90" >
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href="#">
                            <Image alt="Placeholder" className="block h-auto w-full" src={Image4} />
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-black" href="#">
                                   Greenford, UB6 102
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                Lock Term: 11/1/2025
                            </p>
                            <p className="text-grey-darker text-sm">
                                Available Fractions: {AvailableFraction2}
                            </p>
                        </header>

                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <Image alt="Placeholder" width={50}
                                    height={50} className="block rounded-full" src={Image2} />
                             
                            </a>
                            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span className="hidden">Like</span>
                                <i className="fa fa-heart"></i>
                            </a>
                            <button className='buttoninline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8'>Buy Fraction</button>

                        </footer>

                    </article>
                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 bg-white bg-opacity-90">

                    <article className="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <Image alt="Placeholder" width={720}
                                height={320} className="block h-auto w-full" src={Image5} />
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-black" href="#">
Bradford, BL9 8AU                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                Lock Term: 11/9/2024
                            </p>
                            <p className="text-grey-darker text-sm">
                                Available Fractions: {AvailableFraction3}
                            </p>
                        </header>

                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <Image alt="Placeholder" width={50}
                                    height={50} className="block rounded-full" src={Image1} />
                                
                            </a>
                            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span className="hidden">Like</span>
                                <i className="fa fa-heart"></i>
                            </a>
                            <button className='buttoninline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8'>Buy Fraction</button>

                        </footer>

                    </article>

                </div>
          
            </div>
        </div>
        </>
    );
};

export default PropertyList;
