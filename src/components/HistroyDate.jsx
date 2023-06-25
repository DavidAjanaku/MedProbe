import React from 'react';

export default function HistroyDate() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div className='text-[#ced9f9] text-sm'>{formattedDate}</div>
  );
}
