import React from 'react'
import deleteCan from '/Users/user/Desktop/MyProjects/med-probe/public/assets/illustrations/delete.png'
import download from '/Users/user/Desktop/MyProjects/med-probe/public/assets/illustrations/download.png'
import message from '/Users/user/Desktop/MyProjects/med-probe/public/assets/illustrations/messagebubble.png'
import share from '/Users/user/Desktop/MyProjects/med-probe/public/assets/illustrations/share.png'

export default function HistoryTile(props) {
  return (
    <div>
      <div>
        <div className='flex  justify-between py-4 px-5 my-4 text-white bg-[#ffffff26;] border-white border-[1px] rounded-md cursor-pointer items-center '>
          <span>
          <img className='w-5 m4-1' src={message} alt="" />

          </span>
          <span className="overflow-hidden mx-1 whitespace-nowrap overflow-ellipsis w-[50%]">
          {props.title}
          </span>
          <span>
         <img className='w-5 mx-1' src={download} alt="" />
          </span>
          <span>
          <img className='w-5 mx-1' src={share} alt="" />

          </span>
          <span>
         <img className='w-5 mx-1' src={deleteCan} alt="" />
          </span>
        </div>
      </div>
    </div>
  )
}
