import React from "react";

type TrainingRecord = {
  name: string;
  weight: number;
  reps: number;
  sets: number;
};

type TagInputProps = {
  trainingData: TrainingRecord[];
  onTrainingDataChange: (newData: TrainingRecord[]) => void;
};

const muscleMenu = [
  "ベンチプレス",
  "スクワット",
  "デッドリフト",
  "ランニング",
  "プッシュアップ",
  "ダンベルカール",
  "ショルダープレス",
  "懸垂",
  "レッグプレス",
  "プランク",
];

const TagInput: React.FC<TagInputProps> = ({
  trainingData,
  onTrainingDataChange,
}) => {
  const [inputValue, setInputValue] = React.useState("");

  // 入力欄が変化したとき
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 候補をクリックしてメニュー追加
  const addExercise = (menuName: string) => {
    // まだ追加されていない場合のみ追加などのロジックは任意で
    const newExercises = [
      ...trainingData,
      { name: menuName, weight: 0, reps: 0, sets: 0 },
    ];
    onTrainingDataChange(newExercises);
    setInputValue("");
  };

  // 入力値(重量, 回数, セット数)を変更したとき
  const handleExerciseChange = (
    index: number,
    field: "weight" | "reps" | "sets",
    value: number
  ) => {
    const newData = [...trainingData];
    newData[index] = { ...newData[index], [field]: value };
    onTrainingDataChange(newData);
  };

  const removeExercise = (index: number) => {
    const newData = trainingData.filter((_, i) => i !== index);
    onTrainingDataChange(newData);
  };

  // メニュー候補のフィルタリング
  const suggestions = inputValue
    ? muscleMenu.filter((menu) =>
        menu.toLowerCase().includes(inputValue.toLowerCase())
      )
    : [];

  return (
    <div className="w-full mx-auto">
      <h1 className="text-lg mb-4 mt-4">トレーニングメニューを追加</h1>

      <div className="relative mb-6">
        <input
          type="text"
          className="block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="メニュー名を入力..."
          value={inputValue}
          onChange={handleChange}
        />
        {suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded mt-1 shadow-md z-10">
            {suggestions.map((item) => (
              <li
                key={item}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => addExercise(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 選択されたメニュー一覧 */}
      <div className="space-y-4">
        {trainingData.map((exercise, index) => (
          <div
            key={`${exercise.name}-${index}`}
            className="flex items-center space-x-4"
          >
            <label className="w-28 text-gray-800 font-semibold">
              {exercise.name}
            </label>

            <div className="flex items-center space-x-1">
              <input
                type="number"
                placeholder="重量"
                className="border border-gray-300 p-2 w-16 rounded"
                value={exercise.weight}
                onChange={(e) =>
                  handleExerciseChange(index, "weight", parseFloat(e.target.value) || 0)
                }
              />
              <span>kg</span>
            </div>

            <div className="flex items-center space-x-1">
              <input
                type="number"
                placeholder="回数"
                className="border border-gray-300 p-2 w-16 rounded"
                value={exercise.reps}
                onChange={(e) =>
                  handleExerciseChange(index, "reps", parseInt(e.target.value) || 0)
                }
              />
              <span>回</span>
            </div>

            <div className="flex items-center space-x-1">
              <input
                type="number"
                placeholder="セット数"
                className="border border-gray-300 p-2 w-16 rounded"
                value={exercise.sets}
                onChange={(e) =>
                  handleExerciseChange(index, "sets", parseInt(e.target.value) || 0)
                }
              />
              <span>セット</span>
            </div>

            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => removeExercise(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
