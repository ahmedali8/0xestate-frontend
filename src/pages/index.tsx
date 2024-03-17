import { useEffect, useState } from 'react'
import { BigNumber } from 'ethers'
import { decode } from '@/lib/wld'
import ContractAbi from '@/abi/Contract.abi'
import { ConnectKitButton } from 'connectkit'
import { IDKitWidget, ISuccessResult } from '@worldcoin/idkit'
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'
import PropertyList from './property_list'
import img1 from "../images/img1.png"
import Image from 'next/image'
import axios from 'axios'
import Header from './header'

export default function Home() {

	const { address } = useAccount()
	const [proof, setProof] = useState<ISuccessResult | null>(null)

	const { config } = usePrepareContractWrite({
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDR as `0x${string}`,
		abi: ContractAbi,
		enabled: proof != null && address != null,
		functionName: 'verifyAndExecute',
		args: [
			address!,
			proof?.merkle_root ? decode<BigNumber>('uint256', proof?.merkle_root ?? '') : BigNumber.from(0),
			proof?.nullifier_hash ? decode<BigNumber>('uint256', proof?.nullifier_hash ?? '') : BigNumber.from(0),
			proof?.proof
				? decode<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>(
					'uint256[8]',
					proof?.proof ?? ''
				)
				: [
					BigNumber.from(0),
					BigNumber.from(0),
					BigNumber.from(0),
					BigNumber.from(0),
					BigNumber.from(0),
					BigNumber.from(0),
					BigNumber.from(0),
					BigNumber.from(0),
				],
		],
	})

	const { write } = useContractWrite(config)
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 	  try {
	// 		const response = await axios.get("/api/hello");
	// 		console.log("response", response);
	// 	  } catch (error) {
	// 		console.error(error);
	// 		// Handle error appropriately
	// 	  }
	// 	};
	
	// 	// Fetch data initially
	// 	fetchData();
	
	// 	// Set interval to fetch data every 10 seconds
	// 	const intervalId = setInterval(fetchData, 30000);
	
	// 	// Cleanup function to clear interval
	// 	return () => {
	// 	  clearInterval(intervalId);
	// 	};
	//   }, []); // Pass an empty dependency array to run only once
	

	return (
		<main>
			        <Header address={address?.toString()}/>

			{address ? (
				proof ? (
					// <button onClick={write}>submit tx</button>
					<PropertyList />
				) : (
					<>
					<div className='container-landing'>
						<div className="mx-auto max-w-8xl py-24 sm:px-6  lg:px-20">
							<div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
								<svg
									viewBox="0 0 1024 1024"
									className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
									aria-hidden="true"
								>
									<circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
									<defs>
										<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
											<stop stopColor="#7775D6" />
											<stop offset={1} stopColor="#E935C1" />
										</radialGradient>
									</defs>
								</svg>
								<div className="mx-auto max-w-sm text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
									<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
										Fractionalized Asset
										<br />
										with Power of LP’s.
									</h2>
									<p className="mt-6 text-lg leading-8 text-gray-300">
										Redefines asset fractionalization by leveraging Blockchain and Uniswap V4 Hooks            </p>
									<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">

										<IDKitWidget
											signal={address}
											action="your-action"
											onSuccess={setProof}
											app_id={process.env.NEXT_PUBLIC_APP_ID!}
										>
											{({ open }) => <a href='#'
												className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
												onClick={open}>verify with world id</a>}
										</IDKitWidget>

									</div>
								</div>
								<div className="relative mt-16 h-80 lg:mt-0">
									<Image
										className="absolute left-12 top-0 bo w-[33rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
										src={img1}
										alt="App screenshot"
										width={1824}
										height={1080} />
								</div>
							</div>
						</div>
					</div>

					</>
				)
			) : (
				<main>

				<div className="bg-white">
						<div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
							<div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
								<svg
									viewBox="0 0 1024 1024"
									className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
									aria-hidden="true"
								>
									<circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
									<defs>
										<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
											<stop stopColor="#7775D6" />
											<stop offset={1} stopColor="#E935C1" />
										</radialGradient>
									</defs>
								</svg>
								<div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
									<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
										Fractionalized Asset
										<br />
										with Power of LP’s.
									</h2>
									<p className="mt-6 text-lg leading-8 text-gray-300">
										Redefines asset fractionalization by leveraging Blockchain and Uniswap V4 Hooks            </p>
									<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
									
									<ConnectKitButton/>
									</div>
								</div>
								<div className="relative mt-16 h-80 lg:mt-0">
									<Image
										className="absolute left-12 top-0 bo w-[33rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
										src={img1}
										alt="App screenshot"
										width={1824}
										height={1080} />
								</div>
							</div>
						</div>
					</div>
					</main>
			)}
		</main>
	)
}
