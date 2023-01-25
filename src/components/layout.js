import React from 'react'
import Footer from "@/components/footer"
import Navbar from './navbar'

function layout({children}) {
  return (
    <div className=''>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default layout
