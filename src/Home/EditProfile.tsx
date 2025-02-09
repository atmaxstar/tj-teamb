import React, { useState } from 'react'
import TagInput from './TagInput';

// 親から受け取るpropsの型
type EditProfileProps = {
  profileData: {
    bodyData: {
      weight: number;
      bodyFat: number;
      chest: number;
      waist: number;
      hip: number;
      arm: number;
      calf: number;
    };
    trainingData: {
      name: string;
      weight: number;
      reps: number;
      sets: number;
    }[];
  };
  onSave: (updatedData: EditProfileProps['profileData']) => void;
};

const EditProfile: React.FC<EditProfileProps> = ({ profileData, onSave }) => {
  // 親から受け取ったデータをローカルで一時的に編集するためにコピー
  const [editedBody, setEditedBody] = useState(profileData.bodyData);
  const [editedTraining, setEditedTraining] = useState(profileData.trainingData);

  // 例: 体重の入力が変わったら数値に変換して state 更新
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof editedBody
  ) => {
    const value = parseFloat(e.target.value); // floatにパース
    // NaNチェックして必要であれば0などに置き換え
    const safeValue = isNaN(value) ? 0 : value;

    setEditedBody((prev) => ({
      ...prev,
      [field]: safeValue,
    }));
  };

  // 保存ボタン押下時
  const handleSaveClick = () => {
    onSave({
      bodyData: editedBody,
      trainingData: editedTraining,
    });
  };

  return (
    <div className="bg-white p-4 mt-4 flex flex-col items-center">
      <div className='mb-4'>
        <h3 className="text-xl font-bold text-center">記録編集</h3>
      </div>

      {/* カラダの記録 */}
      <div className="mb-8 w-[480px]">
        <h4 className="text-lg font-semibold mb-2">カラダの記録</h4>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28" htmlFor="weight">体重</label>
          <input
            id="weight"
            type="number"
            step="0.1"
            placeholder="kg"
            className="border border-gray-300 p-2 mr-2 flex-1"
            value={editedBody.weight}
            onChange={(e) => handleInputChange(e, 'weight')}
          />
        </div>

        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28" htmlFor="bodyFat">体脂肪率</label>
          <input
            id="bodyFat"
            type="number"
            step="0.1"
            placeholder="%"
            className="border border-gray-300 p-2 mr-2 flex-1"
            value={editedBody.bodyFat}
            onChange={(e) => handleInputChange(e, 'bodyFat')}
          />
        </div>

        <div className="mb-8 w-[480px]"></div>
        <h4 className="text-lg font-semibold mb-2">体型の記録</h4>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28" htmlFor="chest">胸囲</label>
          <input
            id="chest"
            type="number"
            step="0.1"
            placeholder="cm"
            className="border border-gray-300 p-2 mr-2 flex-1"
            value={editedBody.chest}
            onChange={(e) => handleInputChange(e, 'chest')}
          />
        </div>

        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28" htmlFor="waist">ウエスト（cm）</label>
          <input
            id="waist"
            type="number"
            step="0.1"
            placeholder="cm"
            className="border border-gray-300 p-2 mr-2 flex-1"
            value={editedBody.waist}
            onChange={(e) => handleInputChange(e, 'chest')}
          />
        </div>

        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28" htmlFor="hip">ヒップ（cm）</label>
          <input
            id="hip"
            type="number"
            step="0.1"
            placeholder="cm"
            className="border border-gray-300 p-2 mr-2 flex-1"
            value={editedBody.hip}
            onChange={(e) => handleInputChange(e, 'chest')}
          />
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28" htmlFor="arm">二の腕（cm）</label>
          <input
            id="arm"
            type="number"
            step="0.1"
            placeholder="cm"
            className="border border-gray-300 p-2 mr-2 flex-1"
            value={editedBody.arm}
            onChange={(e) => handleInputChange(e, 'chest')}
          />
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <label className="w-28" htmlFor="calf">ふくらはぎ（cm）</label>
          <input
            id="calf"
            type="number"
            step="0.1"
            placeholder="cm"
            className="border border-gray-300 p-2 mr-2 flex-1"
            value={editedBody.calf}
            onChange={(e) => handleInputChange(e, 'chest')}
          />
        </div>
      </div>

      {/* トレーニングの記録（TagInputなど） */}
      <div className="mb-8 w-[480px]">
        <h4 className="text-lg font-semibold mb-2">トレーニングの記録</h4>
        <TagInput 
          trainingData={editedTraining}
          onTrainingDataChange={setEditedTraining}
        />
      </div>

      <button
        onClick={handleSaveClick}
        className="bg-yellow-400 text-white py-3 w-40 rounded-lg"
      >
        保存
      </button>
    </div>
  );
};

export default EditProfile;
