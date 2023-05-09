import React from 'react'
import 'tailwindcss/tailwind.css';
import user from "/Users/user/Desktop/med-probe/public/assets/illustrations/profile pic boy.svg";



export default function Card() {
  return (
    <>
    <div className="card-wrapper  ">
        <div className="card-contents  text-center  my-bg-class  m-10 w-56 rounded-md cursor-pointer">
        <div className="card-container__contents p-4">

            <div className="card-contents__header mb-4">
           <img src={user} className='w-10 m-auto'/>
            </div>
            <div className="card-contents__texts  text-white  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum 
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
