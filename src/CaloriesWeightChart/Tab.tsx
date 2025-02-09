import React from 'react'

interface Props {
    tab: "week"|"month"|"three"|"six";
    setTab: React.Dispatch<React.SetStateAction<"week" | "month" | "three" | "six">>;
}

const Tab = ({tab, setTab}: Props) => {
    const handleTab = (val: "week"|"month"|"three"|"six") => {
        setTab(val);
    }

  return (
    <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li className="w-full focus-within:z-10">
            <button disabled={tab === "week"} onClick={() => handleTab("week")} className="inline-block w-full p-4 disabled:text-gray-900 bg-white border-r disabled:bg-gray-100 border-gray-200 rounded-s-lg" aria-current="page">1週間</button>
        </li>
        <li className="w-full focus-within:z-10">
            <button disabled={tab === "month"} onClick={() => handleTab("month")} className="inline-block w-full p-4 disabled:text-gray-900 bg-white border-r disabled:bg-gray-100 border-gray-200 rounded-s-lg">1か月</button>
        </li>
        <li className="w-full focus-within:z-10">
            <button disabled={tab === "three"} onClick={() => handleTab("three")} className="inline-block w-full p-4 disabled:text-gray-900 bg-white border-r disabled:bg-gray-100 border-gray-200 rounded-s-lg">3か月</button>
        </li>
        <li className="w-full focus-within:z-10">
            <button disabled={tab === "six"} onClick={() => handleTab("six")} className="inline-block w-full p-4 disabled:text-gray-900 bg-white border-r disabled:bg-gray-100 border-gray-200 rounded-s-lg">6か月</button>
        </li>
    </ul>
  )
}

export default Tab
