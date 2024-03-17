export const ESTATE_ABI = [
	{
		"inputs": [
			{
				"internalType": "contract IPoolManager",
				"name": "_poolManager",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_appId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_actionId",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "BalanceGreaterThanThreshold",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "hooks",
				"type": "address"
			}
		],
		"name": "HookAddressNotValid",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "HookNotImplemented",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidNullifier",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidPool",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LockFailure",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotPoolManager",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotSelf",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "Currency",
						"name": "currency0",
						"type": "address"
					},
					{
						"internalType": "Currency",
						"name": "currency1",
						"type": "address"
					},
					{
						"internalType": "uint24",
						"name": "fee",
						"type": "uint24"
					},
					{
						"internalType": "int24",
						"name": "tickSpacing",
						"type": "int24"
					},
					{
						"internalType": "contract IHooks",
						"name": "hooks",
						"type": "address"
					}
				],
				"internalType": "struct PoolKey",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "int24",
						"name": "tickLower",
						"type": "int24"
					},
					{
						"internalType": "int24",
						"name": "tickUpper",
						"type": "int24"
					},
					{
						"internalType": "int256",
						"name": "liquidityDelta",
						"type": "int256"
					}
				],
				"internalType": "struct IPoolManager.ModifyLiquidityParams",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "BalanceDelta",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "afterAddLiquidity",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "Currency",
						"name": "currency0",
						"type": "address"
					},
					{
						"internalType": "Currency",
						"name": "currency1",
						"type": "address"
					},
					{
						"internalType": "uint24",
						"name": "fee",
						"type": "uint24"
					},
					{
						"internalType": "int24",
						"name": "tickSpacing",
						"type": "int24"
					},
					{
						"internalType": "contract IHooks",
						"name": "hooks",
						"type": "address"
					}
				],
				"internalType": "struct PoolKey",
				"name": "",
				"type": "tuple"
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
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "afterDonate",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "Currency",
						"name": "currency0",
						"type": "address"
					},
					{
						"internalType": "Currency",
						"name": "currency1",
						"type": "address"
					},
					{
						"internalType": "uint24",
						"name": "fee",
						"type": "uint24"
					},
					{
						"internalType": "int24",
						"name": "tickSpacing",
						"type": "int24"
					},
					{
						"internalType": "contract IHooks",
						"name": "hooks",
						"type": "address"
					}
				],
				"internalType": "struct PoolKey",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "uint160",
				"name": "",
				"type": "uint160"
			},
			{
				"internalType": "int24",
				"name": "",
				"type": "int24"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "afterInitialize",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "Currency",
						"name": "currency0",
						"type": "address"
					},
					{
						"internalType": "Currency",
						"name": "currency1",
						"type": "address"
					},
					{
						"internalType": "uint24",
						"name": "fee",
						"type": "uint24"
					},
					{
						"internalType": "int24",
						"name": "tickSpacing",
						"type": "int24"
					},
					{
						"internalType": "contract IHooks",
						"name": "hooks",
						"type": "address"
					}
				],
				"internalType": "struct PoolKey",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "int24",
						"name": "tickLower",
						"type": "int24"
					},
					{
						"internalType": "int24",
						"name": "tickUpper",
						"type": "int24"
					},
					{
						"internalType": "int256",
						"name": "liquidityDelta",
						"type": "int256"
					}
				],
				"internalType": "struct IPoolManager.ModifyLiquidityParams",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "BalanceDelta",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "afterRemoveLiquidity",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "Currency",
						"name": "currency0",
						"type": "address"
					},
					{
						"internalType": "Currency",
						"name": "currency1",
						"type": "address"
					},
					{
						"internalType": "uint24",
						"name": "fee",
						"type": "uint24"
					},
					{
						"internalType": "int24",
						"name": "tickSpacing",
						"type": "int24"
					},
					{
						"internalType": "contract IHooks",
						"name": "hooks",
						"type": "address"
					}
				],
				"internalType": "struct PoolKey",
				"name": "key",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "bool",
						"name": "zeroForOne",
						"type": "bool"
					},
					{
						"internalType": "int256",
						"name": "amountSpecified",
						"type": "int256"
					},
					{
						"internalType": "uint160",
						"name": "sqrtPriceLimitX96",
						"type": "uint160"
					}
				],
				"internalType": "struct IPoolManager.SwapParams",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "BalanceDelta",
				"name": "bal",
				"type": "int256"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "afterSwap",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "Currency",
						"name": "currency0",
						"type": "address"
					},
					{
						"internalType": "Currency",
						"name": "currency1",
						"type": "address"
					},
					{
						"internalType": "uint24",
						"name": "fee",
						"type": "uint24"
					},
					{
						"internalType": "int24",
						"name": "tickSpacing",
						"type": "int24"
					},
					{
						"internalType": "contract IHooks",
						"name": "hooks",
						"type": "address"
					}
				],
				"internalType": "struct PoolKey",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "int24",
						"name": "tickLower",
						"type": "int24"
					},
					{
						"internalType": "int24",
						"name": "tickUpper",
						"type": "int24"
					},
					{
						"internalType": "int256",
						"name": "liquidityDelta",
						"type": "int256"
					}
				],
				"internalType": "struct IPoolManager.ModifyLiquidityParams",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "beforeAddLiquidity",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "Currency",
						"name": "currency0",
						"type": "address"
					},
					{
						"internalType": "Currency",
						"name": "currency1",
						"type": "address"
					},
					{
						"internalType": "uint24",
						"name": "fee",
						"type": "uint24"
					},
					{
						"internalType": "int24",
						"name": "tickSpacing",
						"type": "int24"
					},
					{
						"internalType": "contract IHooks",
						"name": "hooks",
						"type": "address"
					}
				],
				"internalType": "struct PoolKey",
				"name": "",
				"type": "tuple"
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
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "beforeDonate",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "Currency",
						"name": "currency0",
						"type": "address"
					},
					{
						"internalType": "Currency",
						"name": "currency1",
						"type": "address"
					},
					{
						"internalType": "uint24",
						"name": "fee",
						"type": "uint24"
					},
					{
						"internalType": "int24",
						"name": "tickSpacing",
						"type": "int24"
					},
					{
						"internalType": "contract IHooks",
						"name": "hooks",
						"type": "address"
					}
				],
				"internalType": "struct PoolKey",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "uint160",
				"name": "",
				"type": "uint160"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "beforeInitialize",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "Currency",
						"name": "currency0",
						"type": "address"
					},
					{
						"internalType": "Currency",
						"name": "currency1",
						"type": "address"
					},
					{
						"internalType": "uint24",
						"name": "fee",
						"type": "uint24"
					},
					{
						"internalType": "int24",
						"name": "tickSpacing",
						"type": "int24"
					},
					{
						"internalType": "contract IHooks",
						"name": "hooks",
						"type": "address"
					}
				],
				"internalType": "struct PoolKey",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "int24",
						"name": "tickLower",
						"type": "int24"
					},
					{
						"internalType": "int24",
						"name": "tickUpper",
						"type": "int24"
					},
					{
						"internalType": "int256",
						"name": "liquidityDelta",
						"type": "int256"
					}
				],
				"internalType": "struct IPoolManager.ModifyLiquidityParams",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "beforeRemoveLiquidity",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "Currency",
						"name": "currency0",
						"type": "address"
					},
					{
						"internalType": "Currency",
						"name": "currency1",
						"type": "address"
					},
					{
						"internalType": "uint24",
						"name": "fee",
						"type": "uint24"
					},
					{
						"internalType": "int24",
						"name": "tickSpacing",
						"type": "int24"
					},
					{
						"internalType": "contract IHooks",
						"name": "hooks",
						"type": "address"
					}
				],
				"internalType": "struct PoolKey",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "bool",
						"name": "zeroForOne",
						"type": "bool"
					},
					{
						"internalType": "int256",
						"name": "amountSpecified",
						"type": "int256"
					},
					{
						"internalType": "uint160",
						"name": "sqrtPriceLimitX96",
						"type": "uint160"
					}
				],
				"internalType": "struct IPoolManager.SwapParams",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "beforeSwap",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buyThreshold",
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
		"name": "getHookPermissions",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bool",
						"name": "beforeInitialize",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "afterInitialize",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "beforeAddLiquidity",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "afterAddLiquidity",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "beforeRemoveLiquidity",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "afterRemoveLiquidity",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "beforeSwap",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "afterSwap",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "beforeDonate",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "afterDonate",
						"type": "bool"
					}
				],
				"internalType": "struct Hooks.Permissions",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isWIDVerificationTurnedOn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "lockAcquired",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "nonpayable",
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
		"name": "poolManager",
		"outputs": [
			{
				"internalType": "contract IPoolManager",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sellThreshold",
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
				"name": "_buyThreshold",
				"type": "uint256"
			}
		],
		"name": "setBuyThreshold",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_isWIDVerificationTurnedOn",
				"type": "bool"
			}
		],
		"name": "setIsWIDVerificationTurnedOn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_sellThreshold",
				"type": "uint256"
			}
		],
		"name": "setSellThreshold",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "whitelisted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]