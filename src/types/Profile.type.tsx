// カラダの記録
export type BodyData = {
    weight: number;   // 体重（kg）
    bodyFat: number;  // 体脂肪率（%）
    chest: number;    // 胸囲（cm）
    waist: number;    // ウエスト（cm）
    hip: number;      // ヒップ（cm）
    arm: number;      // 二の腕（cm）
    calf: number;     // ふくらはぎ（cm）
};
  
// トレーニングの記録
export type TrainingRecord = {
    name: string;   // メニュー名
    weight: number; // 重量 (kg) - ランニングなど重量不要の場合は 0 か null 扱いでもOK
    reps: number;   // 回数
    sets: number;   // セット数
};
  
export type ProfileData = {
    bodyData: BodyData;
    trainingData: TrainingRecord[];
};