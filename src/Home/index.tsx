import { useEffect, useState } from 'react';
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

  const initData = {
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
  }

  // 最初に表示するダミーデータ
  const [profileData, setProfileData] = useState<ProfileData>(initData);
  
  // 日付が変わったら既存のデータを読み込む
  useEffect(() => {
    console.log(dataPerDay);
    const numberDate = convertToNumberDate(date);
    if (numberDate in dataPerDay){
      setProfileData(dataPerDay[numberDate]);
    }
    else{
      setProfileData(initData);
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

  const MET_TABLE: Record<string, number> = {
    'ベンチプレス': 6,
    'スクワット': 8,
    'デッドリフト': 8,
    'ランニング': 8,
    'プッシュアップ': 5,
    'ダンベルカール': 4,
    'ショルダープレス': 5,
    '懸垂': 5,
    'レッグプレス': 5,
    'プランク': 4,
  };

  const calculateCalories = (profile: ProfileData): number => {
    let total = 0;
    const userWeight = profile.bodyData.weight;

    for (const record of profile.trainingData) {
      // メニュー名から MET を推定 (無ければ 5 とする)
      const baseMET = MET_TABLE[record.name] ?? 5;
      
      // 重量に応じて多少 MET を補正したい場合はこんなイメージ
      // 例えば「(使用重量 / 40)」でプラスアルファ
      // (あくまで適当な例)
      const weightFactor = record.weight > 0 
        ? (record.weight / 40) 
        : 0;

      // 最終的な MET
      const met = baseMET + weightFactor;

      // 1レップ3秒 × (reps × sets)
      const totalSeconds = record.reps * record.sets * 3;
      const totalHours = totalSeconds / 3600;

      // カロリー = MET × 体重 × 時間
      const kcal = met * userWeight * totalHours;
      total += kcal;
    }

    // 小数を四捨五入
    return Math.round(total);
  };

  // 計算結果を算出
  const totalCalories = calculateCalories(profileData);

  return (
    <div className="bg-white min-h-screen">
      <HeaderCard date={date} setDate={setDate} totalCalories={totalCalories}/>
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
