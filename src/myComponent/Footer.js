import React,{useState} from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <div className="bg-[#5c7eb6] pt-[3%] pb-[3%] bottom-0">
      <div className="flex flex-col lg:flex-row  gap-20 font-medium lg:mx-[7%] pb-[3%]">
        
        <div className="flex-1 ">
     <a href='/'><img src="./A2zpassword250x100.png"  alt="Logo" /></a>  
     </div>
     
      <div className=" text-white flex-1  ">
        <ul >    
          <li >
         <a href="/About_us"> About Us</a>
            </li>           
            <li className='pt-3'>
            <a href="/Blog">Blog </a>
            </li>
            <li className='pt-3'>
            <a href="/contact_us">Contact Us </a>
            </li>
        </ul>
       </div>
     <div className=" text-white flex-1  ">
        <ul>
          <li>
         <a href="/Privacy_Policy">Privacy Policy</a> 
          </li>                
            <li className='pt-3'>
            <a href="/Disclaimer">Disclaimer</a>
            </li> 
            <li className='pt-3'>
            <a href="/TermsCondition">Terms & Condition </a>
            </li>
        </ul>
       </div>
       <div className=" text-white flex-1">
        <ul className='' >
          <li className='inline-block' >
         <a href="/"><AiFillFacebook size={"2rem"} className="hover:scale-110"/></a> 
          </li>
          <li className='inline-block px-10' >
         <a href="/"> <AiFillTwitterSquare size={"2rem"} className="hover:scale-110"/></a>
            </li>
            <li className='inline-block' >
            <a href="/"><AiFillLinkedin size={"2rem"} className="hover:scale-110  rounded-xl"/></a>
            </li>
        </ul>
       </div>
      
       </div>
       <div className="border-t-2 border-gray-50">
            <h1 className="text-xl text-white text-center py-[3%] lg:pt-[1%]">© Copyright 2023, All Rights Reserved</h1>
       </div>
     </div>
    </>
  )
}
