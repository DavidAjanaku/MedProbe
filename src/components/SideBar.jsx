import React from 'react'
import HistoryTile from './HistoryTile'
import HistroyDate from './HistroyDate'

export default function SideBar() {
  return (
    <div className=' bg-blue-500 absolute w-2/4 z-10  mt-4 h-[90vh] sidebar   md:w-[20%] md:rounded-xl '>
<div className='ml-4 mr-4 mt-4 h-[80vh] overflow-scroll no-scrollbar'>
  <HistroyDate/>
  <HistoryTile title="  ACUTE RESPIRATORY DISTRESS SYNDROME"/>

  <HistoryTile title="ACNE" />
  <HistroyDate/>

  <HistoryTile title="ADDISONS DISEASE" />
  <HistoryTile title="DIAPHRAGM" />
  <HistoryTile title="FINGER" />
  <HistoryTile  title="GALLBLADDER" />
  <HistroyDate/>

<HistoryTile title="INTESTINES (SMALL AND LARGE)" />
<HistoryTile title="PANCREAS" />
<HistoryTile title="THYROID GLAND" />
</div>

    </div>
  )
}
