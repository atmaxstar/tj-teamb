import React, { useState } from 'react'
import imgUrl from './runnig.svg'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from 'react-calendar/dist/esm/shared/types.js';

const Record = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = (value: Value) => {
    if (value instanceof Date) {
      setDate(value);
    }
  };

  return (
    <div className='flex flex-col w-full justify-center'>
      
    <Calendar
      onChange={handleChange}
      value={date}
      tileContent={({ date, view }) =>
        view === "month" && date.getDate() === 15 ? (
            <div className='w-full relative h-full'>
                <img className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={imgUrl} alt="Running" style={{ width: 20, height: 20 }} />
            </div>
        ) : null
      }
    />

    <div className='flex flex-col justify-start w-full'>
      <p className='text-xl py-2'>部位</p>
      <div className=' bg-gray-200 w-full h-[2px]'/>
      <div className='p-2'>
        <div className='flex justify-between text-xl'>
            <p>胸</p>
            <div className='flex items-center gap-3'>
                <p>2/27</p>
                <p className='text-xs'>2日前</p>
            </div>
        </div>
        <div className='flex justify-between text-xl'>
            <p>肩</p>
            <div className='flex items-center gap-3'>
                <p>2/28</p>
                <p className='text-xs'>1日前</p>
            </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Record
