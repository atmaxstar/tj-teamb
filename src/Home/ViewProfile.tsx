import React from "react";
import { FaPencilAlt } from 'react-icons/fa';

type TrainingRecord = {
  name: string;
  weight: number;
  reps: number;
  sets: number;
};

type BodyData = {
  weight: number;
  bodyFat: number;
  chest: number;
  waist: number;
  hip: number;
  arm: number;
  calf: number;
};

type ProfileData = {
  bodyData: BodyData;
  trainingData: TrainingRecord[];
};

type ViewProfileProps = {
  profileData: ProfileData;
  onEdit: () => void;
};

const ViewProfile: React.FC<ViewProfileProps> = ({ profileData, onEdit }) => {
  const { bodyData, trainingData } = profileData;

  return (
    <div className="bg-white p-4 mt-4 flex flex-col items-center relative">
      <div className='mb-4'>
        <h3 className="text-xl font-bold text-center">記録</h3>
        <button
          onClick={onEdit}
          className="flex text-xl items-center absolute right-10 top-0 mt-2"
        >
          <span className="font-bold mr-1">編集する</span>
          <FaPencilAlt size={20} />
        </button>
      </div>

      {/* カラダの記録 */}
      <div className="mb-8 w-[375px]">
        <h4 className="text-lg font-semibold mb-2">カラダの記録</h4>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">体重</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {bodyData.weight} kg
          </span>
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">体脂肪率</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {bodyData.bodyFat} %
          </span>
        </div>
        </div>
        <div className="mb-8 w-[375px]">
        <h4 className="text-lg font-semibold mb-2">体型の記録</h4>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">胸囲</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {bodyData.chest} cm
          </span>
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">ウエスト</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {bodyData.waist} cm
          </span>
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">ヒップ</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {bodyData.hip} cm
          </span>
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">二の腕</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {bodyData.arm} cm
          </span>
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28">ふくらはぎ</label>
          <span className="flex-1 border-b border-gray-300 py-2">
            {bodyData.calf} cm
          </span>
        </div>
      </div>

      {/* トレーニングの記録 */}
      <div className="mb-8 w-[375px]">
        <h4 className="text-lg font-semibold mb-2">トレーニングの記録</h4>
        <div className="flex flex-col gap-2">
          {trainingData.map((record, idx) => (
            <div
              key={`${record.name}-${idx}`}
              className="p-3 border rounded bg-gray-50"
            >
              <div><strong>メニュー名:</strong> {record.name}</div>
              <div><strong>重量:</strong> {record.weight} kg</div>
              <div><strong>回数:</strong> {record.reps} 回</div>
              <div><strong>セット数:</strong> {record.sets} セット</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
