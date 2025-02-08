import React from 'react'

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-300 py-6 text-center">
        <p className='text-2xl'>2/8（土）</p>
        <p>今日の消費カロリー</p>
        <h1 className="text-5xl text-yellow-500 font-bold mt-2">789kcal</h1>
      </div>
      <div className="bg-white p-4 mt-4 flex flex-col items-center">
        <h3 className="text-xl font-bold text-center mb-4">記録</h3>
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-2">カラダの記録</h4>
          <div className="flex items-center mb-2 space-x-4">
            <label className="w-28" htmlFor="weight">
              体重
            </label>
            <input
              id="weight"
              type="text"
              placeholder="kg"
              className="border border-gray-300 p-2 mr-2 flex-1"
            />
            <button
              className="bg-black text-white px-3 py-2 rounded"
            >
              記録
            </button>
            </div>
            <div className="flex items-center mb-2 space-x-4">
            <label className="w-28" htmlFor="bodyFat">
              体脂肪率
            </label>
            <input
              id="bodyFat"
              type="text"
              placeholder="%"
              className="border border-gray-300 p-2 mr-2 flex-1"
            />
            <button
              className="bg-black text-white px-3 py-2 rounded"
            >
              記録
            </button>
            </div>
        </div>
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-2">体型記録</h4>
          <div className="flex items-center mb-2 space-x-4">
            <label className="w-28" htmlFor="chest">
              胸囲
            </label>
            <input
              id="chest"
              type="text"
              placeholder="cm"
              className="border border-gray-300 p-2 mr-2 flex-1"
            />
            <button
              className="bg-black text-white px-3 py-2 rounded"
            >
              記録
            </button>
            </div>
            <div className="flex items-center mb-2 space-x-4">
            <label className="w-28" htmlFor="waist">
              ウエスト
            </label>
            <input
              id="waist"
              type="text"
              placeholder="cm"
              className="border border-gray-300 p-2 mr-2 flex-1"
            />
            <button
              className="bg-black text-white px-3 py-2 rounded"
            >
              記録
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
