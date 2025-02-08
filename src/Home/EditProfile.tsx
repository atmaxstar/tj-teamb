import React from 'react'
import TagInput from './TagInput'

type EditProfileProps = {
  onSave: () => void;
};

const EditProfile: React.FC<EditProfileProps> = ({ onSave }) => {
  return (
      <div className="bg-white p-4 mt-4 flex flex-col items-center">
        <div className='mb-4'>
        <h3 className="text-xl font-bold text-center">記録</h3>
        </div>
        <div className="mb-8 w-[480px]">
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
        <div className="mb-8 w-[480px]">
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
            <div className="flex items-center mb-2 space-x-4">
            <label className="w-28" htmlFor="hip">
              ヒップ
            </label>
            <input
              id="hip"
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
            <label className="w-28" htmlFor="arm">
              二の腕
            </label>
            <input
              id="arm"
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
            <label className="w-28" htmlFor="calf">
              ふくらはぎ
            </label>
            <input
              id="calf"
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
        <div className="mb-8 w-[480px]">
          <h4 className="text-lg font-semibold mb-2">トレーニングの記録</h4>
          <TagInput />
        </div>
        <button onClick={onSave}
        className="bg-yellow-400 text-white py-3 w-40 rounded-lg"
        >
          保存</button>
      </div>
  )
}

export default EditProfile