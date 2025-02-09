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
          <img src={imgUrl} alt="Running" style={{ width: 20, height: 20 }} />
        ) : null
      }
    />

    <div className='flex flex-col justify-start w-full'>
      <p className='text-xl'>部位</p>
      <div className='flex justify-between text-xl'>
        <p>胸</p>
        <div className='flex gap-3'>
          <p>2/27</p>
          <p className='text-xs'>2日前</p>
        </div>
      </div>
      <div className='flex justify-between text-xl'>
        <p>肩</p>
        <div className='flex gap-3'>
          <p>2/28</p>
          <p className='text-xs'>1日前</p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Record
