import React, { useState } from "react";

type Exercise = {
  name: string;
  value: string;  // kgや回数などユーザーが入力する値
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

const ExerciseInput: React.FC = () => {
  const [inputValue, setInputValue] = useState(""); 
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  // ユーザーが選択したメニュー + 入力値を管理
  const [exercises, setExercises] = useState<Exercise[]>([]);

  // 入力欄が変化したとき
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // 入力が空でなければ、候補をフィルタリング
    if (value.trim() !== "") {
      const filtered = muscleMenu.filter(
        (menu) =>
          menu.toLowerCase().includes(value.toLowerCase()) &&
          !exercises.some((ex) => ex.name === menu) // まだ選択していないメニューのみ
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // 候補をクリックしてメニュー追加
  const addExercise = (menuName: string) => {
    // まだ追加されていない場合のみ
    if (!exercises.some((ex) => ex.name === menuName)) {
      setExercises([...exercises, { name: menuName, value: "" }]);
    }
    setInputValue("");
    setSuggestions([]);
  };

  // ユーザーが入力値を変更したとき (kg、回数など)
  const handleValueChange = (index: number, newValue: string) => {
    setExercises((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], value: newValue };
      return updated;
    });
  };

  // 記録ボタン押下
  const handleRecord = (exercise: Exercise) => {
    console.log("記録:", exercise);
    // TODO: ここでAPI等に送信処理を書く
  };

  // メニューを削除したい場合（任意）
  const removeExercise = (index: number) => {
    setExercises((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full mx-auto">
      <h1 className="text-lg mb-4 mt-4">トレーニングメニューを追加</h1>

      {/* Autocomplete入力部分 */}
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
        {exercises.map((exercise, index) => (
          <div key={exercise.name} className="flex items-center space-x-4">
            {/* メニュー名 */}
            <label className="w-28 text-gray-800 font-semibold">
              {exercise.name}
            </label>

            {/* kgや回数などの入力 */}
            <input
              type="text"
              placeholder="kg / 回数など"
              className="border border-gray-300 p-2 flex-1 rounded"
              value={exercise.value}
              onChange={(e) => handleValueChange(index, e.target.value)}
            />

            {/* 記録ボタン */}
            <button
              className="bg-black text-white px-3 py-2 rounded"
              onClick={() => handleRecord(exercise)}
            >
              記録
            </button>

            {/* 削除ボタン（任意で実装） */}
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

export default ExerciseInput;
