import React from 'react'
import {Route,Routes,BrowserRouter}from 'react-router-dom';
import Home from './myComponent/Home'
import About_us from './myComponent/About_us'
import Disclaimer from './myComponent/Disclaimer'
import Privacy_Policy from './myComponent/Privacy_policy'
import TermsCondition from './myComponent/Terms&Condition'
import Contact_us from './myComponent/Contact_us'
import Blog from './myComponent/Blogs'
export default function Rout() {
  return (
    <>
 <Routes>
   <Route path="/" element={<Home/>}></Route>
   <Route path="/About_us" element={<About_us/>}></Route>
   <Route path="/Disclaimer" element={<Disclaimer/>}></Route>
   <Route path="/Privacy_Policy" element={<Privacy_Policy/>}></Route>
   <Route path="/TermsCondition" element={<TermsCondition/>}></Route>
   <Route path="/Contact_us" element={<Contact_us/>}></Route>
   <Route path="/Blog" element={<Blog/>}></Route>
 </Routes>
    </>
  )
}
