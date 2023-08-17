import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Privacy_Policy() {
  return (
    <>
    <Header/>
    <div>
      <h1 className='text-[#8089E1] text-center text-4xl font-bold'>Privacy Policy</h1>
      <p className='text-black mx-[7%] my-[4%] text-xl font-normal'>
      Following are the details that a2z— Password Manager has provided regarding the gathering and use of your data. The privacy statement provided by the developer has more specific information
<br/><br/>
A2z password manager collects the following information:-
<br/>
<ul className="ml-5 list-disc">
                  <li>
                  Personal information
                  </li>
                  <li>
                  Payment information
                  </li>
                  <li>
                  Authentication information
                  </li>
                  <li>
                  Location
                  </li>
                  <li>
                  Browser history
                  </li>
                  <li>
                  User activity
                  </li>

             
                </ul>
</p>

    </div>
    <Footer/>
    </>
  )
}
