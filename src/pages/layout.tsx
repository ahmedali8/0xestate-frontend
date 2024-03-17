import '../styles/globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Modal from "./Modal";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Estate',
    description: 'Fractionalized assets with LP`s',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        <Modal/>
        </body>
        </html>
    )
}