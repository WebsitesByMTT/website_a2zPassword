import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Disclaimer() {
  return (
    <>
    <Header/>
    <div>
      <h1 className='text-[#8089E1] text-center text-4xl font-bold'>Terms and conditions</h1>
      <p className='text-black mx-[7%] my-[4%] text-xl font-normal'>
      The information on a2z google password manager is just meant to provide general information.
<br/><br/>
We disclaim liability for any inaccuracies or omissions in the contents.
<br/><br/>
In no event shall a2z google password manager be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other tort, arising from or related to the use of the service or the contents of the service. We are the Best Password Manager Site that retains the right to add, remove, or change the website's contents at any time and without prior warning.
</p>
    </div>
    <Footer/>
    </>
  )
}
