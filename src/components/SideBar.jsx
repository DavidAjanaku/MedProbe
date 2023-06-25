import React from 'react'
import HistoryTile from './HistoryTile'
import HistroyDate from './HistroyDate'

export default function SideBar() {
  return (
    <div className=' bg-blue-500 absolute w-2/4 z-10  mt-4 h-[90vh] sidebar w-[100%]  md:w-[20%] md:rounded-xl '>
<div className='ml-4 mr-4 mt-4 h-[80vh] overflow-scroll'>
  <HistroyDate/>
  <HistoryTile/>

  <HistoryTile/>
  <HistroyDate/>

  <HistoryTile/>
  <HistoryTile/>
  <HistoryTile/>
  <HistoryTile/>
  <HistroyDate/>

<HistoryTile/>
<HistoryTile/>
<HistoryTile/>
</div>

    </div>
  )
}
