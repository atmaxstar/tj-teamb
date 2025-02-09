import React from 'react'

interface Props {
  cal: number;
  weight: number;
}

const WeightCalorieInfo = ({cal, weight}: Props) => {
  return (
    <div className='flex p-3 flex-row w-full'>
      <div className='flex items-center w-1/2 flex-col'>
        <p className='text-xl'>
            体重
        </p>
        <p className='text-teal-300 text-xl'>
            {`${weight}kg`}
        </p>
      </div>
      <div className='flex items-center w-1/2 flex-col'>
        <p className='text-xl'>
            消費kcal
        </p>
        <p className='text-red-300 text-xl'>
            {`${cal}kcal`}
        </p>
      </div>
    </div>
  )
}

export default WeightCalorieInfo
