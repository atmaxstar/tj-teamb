import React from 'react'

const WeightCalorieInfo = () => {
  return (
    <div className='flex p-3 flex-row w-full'>
      <div className='flex items-center w-1/2 flex-col'>
        <p className='text-xl'>
            体重
        </p>
        <p className='text-teal-300 text-xl'>
            58kg
        </p>
      </div>
      <div className='flex items-center w-1/2 flex-col'>
        <p className='text-xl'>
            消費kcal
        </p>
        <p className='text-red-300 text-xl'>
            429.4kcal
        </p>
      </div>
    </div>
  )
}

export default WeightCalorieInfo
