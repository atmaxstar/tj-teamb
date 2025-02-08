import React from "react";
import { FaPencilAlt } from 'react-icons/fa';

type ViewProfileProps = {
  onEdit: () => void;
};

// 実際にはAPIやContextからデータを取得する想定
const mockData = {
  weight: "60kg",
  bodyFat: "15%",
  chest: "85cm",
  waist: "70cm",
  hip: "90cm",
  arm: "25cm",
  calf: "35cm",
  trainingTags: ["ベンチプレス", "スクワット", "ランニング"],
};

const ViewProfile: React.FC<ViewProfileProps> = ({ onEdit }) => {
  return (
    <div className="bg-white p-4 mt-4 flex flex-col items-center">
     <div className='mb-4 relative'>
      <h3 className="text-xl font-bold text-center">記録</h3>
     </div>
      <button
        onClick={onEdit}
        className="flex text-xl items-center absolute right-12"
      ><span className="text-bold">編集する</span>
        <FaPencilAlt size={20} />
      </button>

      {/* カラダの記録 */}
      <div className="mb-8 w-[480px]">
        <h4 className="text-lg font-semibold mb-2">カラダの記録</h4>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">体重</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {mockData.weight}
          </span>
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">体脂肪率</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {mockData.bodyFat}
          </span>
        </div>
      </div>

      {/* 体型記録 */}
      <div className="mb-8 w-[480px]">
        <h4 className="text-lg font-semibold mb-2">体型記録</h4>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">胸囲</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {mockData.chest}
          </span>
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">ウエスト</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {mockData.waist}
          </span>
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">ヒップ</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {mockData.hip}
          </span>
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">二の腕</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {mockData.arm}
          </span>
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">ふくらはぎ</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {mockData.calf}
          </span>
        </div>
      </div>

      {/* トレーニングの記録 */}
      <div className="mb-8 w-[480px]">
        <h4 className="text-lg font-semibold mb-2">トレーニングの記録</h4>
        <div className="flex flex-wrap gap-2">
          {mockData.trainingTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
