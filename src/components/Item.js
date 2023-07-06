import React from 'react';

function Item({ data }) {
  return (
    <div className='shadow-md bg-white text-center'>
      <p className='text-2xl  bg-blue-200 rounded text-blue-800 p-10'>{data.activity}</p>
    </div>
  )
}

export default Item