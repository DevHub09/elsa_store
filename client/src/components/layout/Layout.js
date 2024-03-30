import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Toaster} from 'react-hot-toast';

// import {Helmet} from "react-helmet"...// layyout har page may use howa ha to isi liye  hum meta tags ismay use k
const Layout = ({children}) => {
  return (
    <div>
      {/* <Helmet>
        <meta charSet='utf-8'/>
        <title>my title</title>   //seo 
      </Helmet> */}

      <Header/>
      <main style={{minHeight:"70vh"}}>
        <Toaster/>
      {children}
      </main>
     <Footer/>
    </div>
  )
}
export default Layout