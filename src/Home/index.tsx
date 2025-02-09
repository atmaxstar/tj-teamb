import React, { useEffect, useState } from 'react';
import EditProfile from './EditProfile';
import ViewProfile from './ViewProfile';
import HeaderCard from './HeaderCard';

// カラダの記録
type BodyData = {
  weight: number;   // 体重（kg）
  bodyFat: number;  // 体脂肪率（%）
  chest: number;    // 胸囲（cm）
  waist: number;    // ウエスト（cm）
  hip: number;      // ヒップ（cm）
  arm: number;      // 二の腕（cm）
  calf: number;     // ふくらはぎ（cm）
};

// トレーニングの記録
type TrainingRecord = {
  name: string;   // メニュー名
  weight: number; // 重量 (kg) - ランニングなど重量不要の場合は 0 か null 扱いでもOK
  reps: number;   // 回数
  sets: number;   // セット数
};

type ProfileData = {
  bodyData: BodyData;
  trainingData: TrainingRecord[];
};

// Date型をyyyymmddの数字に変換する
const convertToNumberDate = (date: Date) => {
  const year = date.getFullYear(); // 年
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月 (0から始まるため +1)
  const day = String(date.getDate()).padStart(2, '0'); // 日

  return Number(`${year}${month}${day}`);
}
interface Props {
  dataPerDay: {[key: number]:ProfileData};
  setData: (data: ProfileData, date: number) => void;
}

const Home = ({dataPerDay, setData}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [date, setDate] = useState<Date>(new Date());

  // 最初に表示するダミーデータ
  const [profileData, setProfileData] = useState<ProfileData>({
    bodyData: {
      weight: 60,
      bodyFat: 15,
      chest: 85,
      waist: 70,
      hip: 90,
      arm: 25,
      calf: 35,
    },
    trainingData: [
      // { name: 'ベンチプレス', weight: 30, reps: 10, sets: 3 },
      // { name: 'スクワット', weight: 40, reps: 10, sets: 3 },
      // { name: 'ランニング', weight: 0,  reps: 30, sets: 0 }, // 30分を回数扱いなど例
    ],
  });
  
  // 日付が変わったら既存のデータを読み込む
  useEffect(() => {
    const numberDate = convertToNumberDate(date);
    if (numberDate in dataPerDay){
      setProfileData(dataPerDay[numberDate]);
    }
  }, [date])

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedData: ProfileData) => {
    // 編集を保存するタイミングで親の state を更新
    setProfileData(updatedData);
    setData(updatedData, convertToNumberDate(date));
    setIsEditing(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <HeaderCard date={date} setDate={setDate}/>
      {isEditing ? (
        <EditProfile 
          profileData={profileData}
          onSave={handleSave} 
        />
      ) : (
        <ViewProfile
          profileData={profileData}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default Home;
