import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/app/navigation/header";
import Footer from "@/app/navigation/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = { // Browser Tab Info
    title: "Ashley's Portfolio",
    description: "Portfolio created by Ashley Burns",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
