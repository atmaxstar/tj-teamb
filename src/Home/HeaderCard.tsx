import React from 'react'

interface Props {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  totalCalories: number;
}

const HeaderCard = ({date, setDate, totalCalories}: Props) => {

  const changeDate = (direction: "prev" | "next") => {
    const newDate = new Date(date);
    if (direction === "prev") {
      newDate.setDate(date.getDate() - 1); // 前日
    } else if (direction === "next") {
      newDate.setDate(date.getDate() + 1); // 翌日
    }
    setDate(newDate);
  };

  // 日付を表示形式 "月/日（曜日）" に変換
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()} (${["日", "月", "火", "水", "木", "金", "土"][date.getDay()]})`;

  return (
    <div className="bg-gray-300 py-6 text-center w-full">
      <div className="flex justify-center items-center">
        <button
          className="px-3 py-1 text-xl text-gray-600 hover:text-gray-800"
          onClick={() => changeDate("prev")}
        >
          &lt;
        </button>
        <p className="text-2xl mx-4">{formattedDate}</p>
        <button
          className="px-3 py-1 text-xl text-gray-600 hover:text-gray-800"
          onClick={() => changeDate("next")}
        >
          &gt;
        </button>
      </div>
      <p>今日の消費カロリー</p>
      <h1 className="text-5xl text-yellow-500 font-bold mt-2"><span>{totalCalories}</span>kcal</h1>
    </div>
  )
}

export default HeaderCard