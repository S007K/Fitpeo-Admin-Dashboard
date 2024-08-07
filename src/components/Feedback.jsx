import React, { useState } from 'react';
import { Rating } from '@mui/material';


function Feedback({avatar, name, comment}) {
    const [value, setValue] = useState(4);
  return (
    <div className='m-5 '>
      

      <div className='flex items-center gap-3 mb-2'>
      <div className='text-4xl'>{avatar}</div>
      <div className='text-white text-xl font-semibold'>{name}</div>
      </div>

        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      
      <div className='text-neutral-400'>{comment}</div>
      <div className='bg-neutral-700 width-[90%] h-[.1px] mt-3'></div>
    </div>
  );
}

export default Feedback